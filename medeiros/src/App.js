import React, { useState } from 'react';
import './App.css';

import SelecaoLocal from './componentes/SelecaoLocal/SelecaoLocal';

import HomeEldorado from './componentes/Jardin-eldorado/home';
import HomePagani from './componentes/Pagani/home';

import EquipeEldorado from './componentes/Jardin-eldorado/equipe';
import EquipePagani from './componentes/Pagani/equipe'; // clone e personalize

import Contatos from './componentes/Jardin-eldorado/contatos';
import Logo from './componentes/Jardin-eldorado/imagens/logo.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [local, setLocal] = useState(null); // <- localidade selecionada
  const whatsappNumber = "5548996748923"; 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  if (!local) {
    return <SelecaoLocal onSelecionar={setLocal} />;
  }

  // define componentes por local
  const Home = local === 'eldorado' ? HomeEldorado : HomePagani;
  const Equipe = local === 'eldorado' ? EquipeEldorado : EquipePagani;

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
              href="https://sites.appbarber.com.br/barbershopmedeiros" 
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
          {/* Aqui você pode exibir mapas diferentes conforme a unidade */}
          {local === 'eldorado' ? (
            <iframe
              title="Mapa - Eldorado"
              src="https://www.google.com/maps/embed?...(link da unidade Eldorado)..."
              allowFullScreen
              loading="lazy"
            ></iframe>
          ) : (
            <iframe
              title="Mapa - Pagani"
              src="https://www.google.com/maps/embed?...(link da unidade Pagani)..."
              allowFullScreen
              loading="lazy"
            ></iframe>
          )}
        </section>

        <div className="botaoMapa-container">
          <a
            href={
              local === 'eldorado'
                ? 'https://maps.google.com/maps/dir//Barbershop+Medeiros...Eldorado'
                : 'https://maps.google.com/maps/dir//Barbershop+Medeiros...Pagani'
            }
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
