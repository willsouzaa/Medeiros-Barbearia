import React from 'react'; // Importa React
import './App.css'; // Importa o CSS
import Home from './componentes/home'; // Importa o componente Home
import Equipe from './componentes/equipe'; // Importa o componente Equipe
import Contatos from './componentes/contatos'; // Importa o componente Contatos
import Logo from './componentes/imagens/logo.png'; // Importa a imagem do logo

function App() {
    const whatsappNumber = "5548996748923"; // Número do WhatsApp

    return (
        <div className="App">
            <header>
                <img src={Logo} alt="Logo SMBarber" className="logo" />
                <nav>
                    <div className="nav-links">
                        <a href="#home">Sobre</a>
                        <a href="#equipe">Equipe</a>
                        <a href="#contatos">Contato</a>
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
                        title="Mapa da Barbearia"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.61947220776176!2d-48.665370401517634!3d-27.62064536178305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273542bc0551fd%3A0x7f013ddaa9edf83c!2sBarbershop%20Medeiros!5e0!3m2!1spt-BR!2sbr!4v1727743027149!5m2!1spt-BR!2sbr"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </section>
                <div className='botaoMapa-container'>
                    <a
                        href={`https://maps.google.com/maps/dir//Barbershop+Medeiros+R.+Valdemar+Vi%C3%AAira,+1415+-+Jardim+Eldorado+Palho%C3%A7a+-+SC+88133-390/@-27.6205542,-48.6651694,20z/data=!4m5!4m4!1m0!1m2!1m1!1s0x95273542bc0551fd:0x7f013ddaa9edf83c`}
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
                    Agendamento via WhatsApp
                </a>
                <a
                    href={`https://sites.appbarber.com.br/barbershopmedeiros`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="agendamentoOnline-button"
                >
                    Agendamento online
                </a>
            </div>
        </div>
    );
}

export default App;
