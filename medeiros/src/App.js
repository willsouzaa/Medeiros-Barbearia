import './App.css';
import Home from './componentes/home';
import Equipe from './componentes/equipe';
import Contatos from './componentes/contatos';
import Logo from './componentes/imagens/logo.png';

function App() {
    const whatsappNumber = "5548988405365"; // Insira o número de WhatsApp no formato internacional (sem o +)

    return (
        <div className="App">
            <header>
                <img src={Logo} alt="Logo SMBarber" className="logo" />
                <nav>
                    <a href="#home">Sobre</a>
                    <a href="#equipe">Equipe</a>
                    <a href="#contatos">Contato</a>
                </nav>
                {/* Botão de agendamento via WhatsApp */}
                <section id="agendamento">
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=Olá, gostaria de fazer um agendamento.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-button"
                    >
                        Fazer um agendamento
                    </a>
                </section>
            </header>
            <main>
                <section id="home">
                    <Home />
                </section>
                <section id="equipe">
                    <Equipe />
                </section>
               {/* Mapa do Google Maps */}
               <section id="localizacao">
                    <h2>Localização</h2>
                    <iframe
                        title="Mapa da Barbearia"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.61947220776176!2d-48.665370401517634!3d-27.62064536178305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273542bc0551fd%3A0x7f013ddaa9edf83c!2sBarbershop%20Medeiros!5e0!3m2!1spt-BR!2sbr!4v1727743027149!5m2!1spt-BR!2sbr"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </section>

                <section id="contatos">
                    <Contatos />
                </section>
                
            </main>
        </div>
    );
}

export default App;
