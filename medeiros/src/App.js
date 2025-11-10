import React, { useState, useEffect } from 'react';
import './App.css';

import SelecaoLocal from './componentes/SelecaoLocal/SelecaoLocal';
import AdminPanel from './componentes/AdminPanel/AdminPanel';

import HomeEldorado from './componentes/Jardin-eldorado/home';
import HomePagani from './componentes/Pagani/home';

import EquipeEldorado from './componentes/Jardin-eldorado/equipe';
import EquipePagani from './componentes/Pagani/equipe';
import ContatoEldorado from './componentes/Jardin-eldorado/contatos';
import ContatoPagani from './componentes/Pagani/contatos';
import Logo from './componentes/Jardin-eldorado/imagens/logo.png';

const SLUG_MAP = Object.freeze({
  eldorado: '/barbearia/barbearia-jardim-eldorado',
  pagani: '/barbearia/barbearia-pagani-corte',
});

const SEO_CONFIG = {
  default: {
    title: 'Barbearia Medeiros | Barbearia em Palhoça',
    description:
      'Barbearia Medeiros oferece cortes masculinos premium em Palhoça, com equipe especializada e atendimento personalizado nas unidades Jardim Eldorado e Pagani.',
    keywords:
      'barbearia palhoça, barbearia medeiros, corte de cabelo masculino, barbeiro palhoça, corte de barba, barba e cabelo, jardim eldorado, pagani',
  },
  eldorado: {
    title: 'Barbearia Medeiros | Unidade Jardim Eldorado',
    description:
      'Conheça a unidade Jardim Eldorado da Barbearia Medeiros em Palhoça. Agende seu corte, barba ou cuidados especiais com uma equipe dedicada.',
    keywords:
      'barbearia jardim eldorado, barbearia medeiros palhoça, corte masculino jardim eldorado, barbeiro jardim eldorado, barba e cabelo palhoça',
  },
  pagani: {
    title: 'Barbearia Medeiros | Unidade Pagani',
    description:
      'Agende seu horário na Barbearia Medeiros Pagani em Palhoça. Profissionais experientes para cortes masculinos, barba e tratamentos especiais.',
    keywords:
      'barbearia pagani, barbearia medeiros pagani, corte masculino pagani, barbeiro pagani palhoça, barba e cabelo pagani',
  },
};

const normalizePath = (path) => {
  if (!path) return '/';
  const trimmed = path.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed.toLowerCase();
};

const getLocalFromPath = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  const path = normalizePath(window.location.pathname);
  if (path === '/admin') {
    return null;
  }
  const match = Object.entries(SLUG_MAP).find(([, slug]) => normalizePath(slug) === path);
  return match ? match[0] : null;
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [local, setLocal] = useState(() => getLocalFromPath());
  const whatsappNumber = "5548996748923";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSelecionar = (id) => {
    const slug = SLUG_MAP[id] || '/';
    if (typeof window !== 'undefined') {
      const currentPath = normalizePath(window.location.pathname);
      const targetPath = normalizePath(slug);
      if (currentPath !== targetPath) {
        window.history.pushState({}, '', slug);
      }
    }
    setLocal(id);
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const onPopState = () => {
      setLocal(getLocalFromPath());
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const { title, description, keywords } = SEO_CONFIG[local] || SEO_CONFIG.default;
    document.title = title;

    const setMetaContent = (selector, attr, value) => {
      const element = document.querySelector(selector);
      if (element) {
        element.setAttribute(attr, value);
      }
    };

    setMetaContent('meta[name="description"]', 'content', description);
    if (keywords) {
      setMetaContent('meta[name="keywords"]', 'content', keywords);
    }
    setMetaContent('meta[property="og:title"]', 'content', title);
    setMetaContent('meta[property="og:description"]', 'content', description);
    setMetaContent('meta[name="twitter:title"]', 'content', title);
    setMetaContent('meta[name="twitter:description"]', 'content', description);

    const slug = local ? SLUG_MAP[local] : '/';
    const normalizedSlug = slug === '/' ? '' : slug;

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical && canonical.dataset && canonical.dataset.baseUrl) {
      canonical.setAttribute('href', `${canonical.dataset.baseUrl.replace(/\/$/, '')}${normalizedSlug}`);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && ogUrl.dataset && ogUrl.dataset.baseUrl) {
      ogUrl.setAttribute('content', `${ogUrl.dataset.baseUrl.replace(/\/$/, '')}${normalizedSlug}`);
    }

    const twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrl && twitterUrl.dataset && twitterUrl.dataset.baseUrl) {
      twitterUrl.setAttribute('content', `${twitterUrl.dataset.baseUrl.replace(/\/$/, '')}${normalizedSlug}`);
    }
  }, [local]);

  if (!local) {
    // Allow accessing the admin panel at /admin (permanent route) or via ?admin=1
    const pathname = typeof window !== 'undefined' ? window.location.pathname || '/' : '/';
    const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
    if (pathname === '/admin' || params.get('admin') === '1') {
      return <AdminPanel />;
    }
    if (typeof window !== 'undefined' && normalizePath(pathname) !== '/') {
      window.history.replaceState({}, '', '/');
    }
    return <SelecaoLocal onSelecionar={handleSelecionar} />;
  }

  const localConfig = {
    eldorado: {
      Home: HomeEldorado,
      Equipe: EquipeEldorado,
      Contatos: ContatoEldorado,
      mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.128088445356!2d-48.67004031287587!3d-27.62054936185389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273542bc0551fd%3A0x7f013ddaa9edf83c!2sBarbershop%20Medeiros!5e0!3m2!1spt-BR!2sbr!4v1752542445467!5m2!1spt-BR!2sbr',
      rota: 'https://www.google.com.br/maps/dir//Barbershop+Medeiros+-+R.+Valdemar+Vi%C3%AAira,+1415+-+Jardim+Eldorado,+Palho%C3%A7a+-+SC,+88133-390/@-27.6205494,-48.6700403,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95273542bc0551fd:0x7f013ddaa9edf83c!2m2!1d-48.6651694!2d-27.6205542?entry=ttu',
      agendamento: "https://sites.appbarber.com.br/barbershopmedeiros",
      // Horário detalhado para a filial Eldorado
      hours: {
        label: 'Horário de atendimento',
        schedule: [
          { day: 'Terça-Feira', times: ['09:00 - 12:00', '13:00 - 20:00'] },
          { day: 'Quarta-Feira', times: ['09:00 - 12:00', '13:00 - 20:00'] },
          { day: 'Quinta-Feira', times: ['09:00 - 12:00', '13:00 - 20:00'] },
          { day: 'Sexta-Feira', times: ['09:00 - 12:00', '13:00 - 20:00'] },
          { day: 'Sábado', times: ['08:00 - 12:00', '13:00 - 17:00'] }
        ]
      }
    },
    pagani: {
      Home: HomePagani,
      Equipe: EquipePagani,
      Contatos: ContatoPagani,
      mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.4587182892847!2d-48.67480282372039!3d-27.641276024040152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952735a444849887%3A0xd0889e75b6c69afd!2sR.%20Jos%C3%A9%20Bonif%C3%A1cio%20de%20Souza%2C%2073%20-%20Passa%20Vinte%2C%20Palho%C3%A7a%20-%20SC%2C%2088132-140!5e0!3m2!1spt-BR!2sbr!4v1752542210760!5m2!1spt-BR!2sbr',
      rota: 'https://www.google.com.br/maps/dir//R.+Jos%C3%A9+Bonif%C3%A1cio+de+Souza,+73+-+Passa+Vinte,+Palho%C3%A7a+-+SC,+88132-140/@-27.641276,-48.6748028,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x952735a444849887:0xd0889e75b6c69afd!2m2!1d-48.6722279!2d-27.6412808?entry=ttu',
      agendamento: "https://sites.appbarber.com.br/barbershopmedei-r6kc",
      // Horário detalhado para a filial Pagani
      hours: {
        label: 'Horário de atendimento',
        schedule: [
          { day: 'Segunda-Feira', times: ['09:00 - 20:00'] },
          { day: 'Terça-Feira', times: ['09:00 - 20:00'] },
          { day: 'Quarta-Feira', times: ['09:00 - 20:00'] },
          { day: 'Quinta-Feira', times: ['09:00 - 20:00'] },
          { day: 'Sexta-Feira', times: ['09:00 - 20:00'] },
          { day: 'Sábado', times: ['09:00 - 17:00'] }
        ]
      }
    }
  };

  const { Home, Equipe, Contatos, mapaEmbed, rota, agendamento, hours } = localConfig[local];

  // Determina o nome do dia atual em português e busca o horário correspondente
  const todayNames = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
  const todayName = todayNames[new Date().getDay()];
  const todayEntry = hours?.schedule?.find(d => d.day === todayName);

  return (
    <div className="App">
      <header>
        <img src={Logo} alt="Logo SMBarber" className="logo" />
        {/* Exibe o horário referente ao dia atual e botão de agendamento */}
        {hours && (
          <div className="header-hours">
            <strong>{hours.label}</strong>
            <div className="today-block">
              <span className="day-name">{todayEntry ? todayEntry.day : todayName}</span>
              {todayEntry && todayEntry.times && todayEntry.times.length > 0 ? (
                todayEntry.times.map((t, idx) => (
                  <span className="time" key={idx}>{t}</span>
                ))
              ) : (
                <span className="time">Fechado</span>
              )}
            </div>
            <div className="header-actions">
              <a
                href={agendamento}
                target="_blank"
                rel="noopener noreferrer"
                className="header-ver-todos"
              >
                Ver todos
              </a>
            </div>
          </div>
        )}
        <div className="scroll-indicator">⬇</div>
        <nav>
          <div className="menu-icon" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Sobre</a>
            <a href="#equipe" onClick={() => setMenuOpen(false)}>Equipe</a>
            <a href="#contatos" onClick={() => setMenuOpen(false)}>Contato</a>
            <a href="/admin" onClick={() => setMenuOpen(false)}>Admin</a>
            <a 
              href={agendamento}
              target="_blank"
              rel="noopener noreferrer"
              className="agendamentoOnline-button"
                onClick={() => setMenuOpen(false)}
            >
              Agendamento online
            </a>
          </div>
        </nav>
        
      </header>

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="equipe">
          <Equipe />
        </section>

        <section id="localizacao">
          <h2>Localização</h2>
          <iframe
            title={`Mapa - ${local}`}
            src={mapaEmbed}
            allowFullScreen
            loading="lazy"
          ></iframe>
          <div className="botaoMapa-container">
            <a
              href={rota}
              target="_blank"
              rel="noopener noreferrer"
              className="irParaRotas-button"
            >
              Abrir no Google Maps
            </a>
          </div>
        </section>

        <section id="contatos">
          <Contatos />
        </section>
      </main>

      <div className="whatsapp-button-container">
        <a
          href={`https://wa.me/${whatsappNumber}?text=Olá, gostaria de fazer um agendamento.`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
