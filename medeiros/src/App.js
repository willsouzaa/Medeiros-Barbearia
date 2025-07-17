import React, { useState } from 'react';
import './App.css';

import SelecaoLocal from './componentes/SelecaoLocal/SelecaoLocal';

import HomeEldorado from './componentes/Jardin-eldorado/home';
import HomePagani from './componentes/Pagani/home';

import EquipeEldorado from './componentes/Jardin-eldorado/equipe';
import EquipePagani from './componentes/Pagani/equipe';
import ContatoEldorado from './componentes/Jardin-eldorado/contatos';
import ContatoPagani from './componentes/Pagani/contatos';
import Logo from './componentes/Jardin-eldorado/imagens/logo.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [local, setLocal] = useState(null);
  const whatsappNumber = "5548996748923";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  if (!local) {
    return <SelecaoLocal onSelecionar={setLocal} />;
  }

  const localConfig = {
    eldorado: {
      Home: HomeEldorado,
      Equipe: EquipeEldorado,
      Contatos: ContatoEldorado,
      mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.128088445356!2d-48.67004031287587!3d-27.62054936185389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273542bc0551fd%3A0x7f013ddaa9edf83c!2sBarbershop%20Medeiros!5e0!3m2!1spt-BR!2sbr!4v1752542445467!5m2!1spt-BR!2sbr',
      rota: 'https://www.google.com.br/maps/dir//Barbershop+Medeiros+-+R.+Valdemar+Vi%C3%AAira,+1415+-+Jardim+Eldorado,+Palho%C3%A7a+-+SC,+88133-390/@-27.6205494,-48.6700403,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95273542bc0551fd:0x7f013ddaa9edf83c!2m2!1d-48.6651694!2d-27.6205542?entry=ttu',
      agendamento: "https://sites.appbarber.com.br/barbershopmedeiros"
    },
    pagani: {
      Home: HomePagani,
      Equipe: EquipePagani,
      Contatos: ContatoPagani,
      mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.4587182892847!2d-48.67480282372039!3d-27.641276024040152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952735a444849887%3A0xd0889e75b6c69afd!2sR.%20Jos%C3%A9%20Bonif%C3%A1cio%20de%20Souza%2C%2073%20-%20Passa%20Vinte%2C%20Palho%C3%A7a%20-%20SC%2C%2088132-140!5e0!3m2!1spt-BR!2sbr!4v1752542210760!5m2!1spt-BR!2sbr',
      rota: 'https://www.google.com.br/maps/dir//R.+Jos%C3%A9+Bonif%C3%A1cio+de+Souza,+73+-+Passa+Vinte,+Palho%C3%A7a+-+SC,+88132-140/@-27.641276,-48.6748028,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x952735a444849887:0xd0889e75b6c69afd!2m2!1d-48.6722279!2d-27.6412808?entry=ttu',
      agendamento: "https://sites.appbarber.com.br/barbershopmedei-r6kc"
    }
  };

  const { Home, Equipe, Contatos, mapaEmbed, rota, agendamento } = localConfig[local];

  return (
    <div className="App">
      <header>
        <img src={Logo} alt="Logo SMBarber" className="logo" />
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
        </section>

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
