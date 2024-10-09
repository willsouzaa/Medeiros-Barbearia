import './App.css'; // Importa o arquivo CSS para aplicar estilos ao aplicativo.
import Home from './componentes/home'; // Importa o componente Home.
import Equipe from './componentes/equipe'; // Importa o componente Equipe.
import Contatos from './componentes/contatos'; // Importa o componente Contatos.
import Logo from './componentes/imagens/logo.png'; // Importa a imagem do logo.

function App() { // Define o componente funcional App.
    const whatsappNumber = "5548996748923"; // Número do WhatsApp para agendamentos.

    return (
        <div className="App"> {/* Contêiner principal do aplicativo */}
            <header>
                <img src={Logo} alt="Logo SMBarber" className="logo" /> {/* Logo da barbearia */}
                <nav>
                    <div className="nav-links"> {/* Links de navegação */}
                        <a href="#home">Sobre</a>
                        <a href="#equipe">Equipe</a>
                        <a href="#contatos">Contato</a>
                    </div>
                </nav>
            </header>
            <main>
                <section id="home"> {/* Seção para o componente Home */}
                    <Home />
                </section>
                <section id="equipe"> {/* Seção para o componente Equipe */}
                    <Equipe />
                </section>
                <section id="localizacao"> {/* Seção para localização */}
                    <h2>Localização</h2>
                    
                    <iframe
                        title="Mapa da Barbearia" // Acessibilidade para o iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.61947220776176!2d-48.665370401517634!3d-27.62064536178305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273542bc0551fd%3A0x7f013ddaa9edf83c!2sBarbershop%20Medeiros!5e0!3m2!1spt-BR!2sbr!4v1727743027149!5m2!1spt-BR!2sbr"
                        allowFullScreen // Permite que o iframe seja exibido em tela cheia.
                        loading="lazy" // Carregamento atrasado para melhorar a performance.
                    ></iframe>
                </section>
                <div className='botaoMapa-container'>
                    <a
                    href={`https://maps.google.com/maps/dir//Barbershop+Medeiros+R.+Valdemar+Vi%C3%AAira,+1415+-+Jardim+Eldorado+Palho%C3%A7a+-+SC+88133-390/@-27.6205542,-48.6651694,20z/data=!4m5!4m4!1m0!1m2!1m1!1s0x95273542bc0551fd:0x7f013ddaa9edf83c`} // Link Site de agendamento online.
                    target="_blank" // Abre o link em uma nova aba.
                    rel="noopener noreferrer" // Melhora a segurança ao abrir um link em nova aba.
                    className="irParaRotas-button" // Classe para estilização do botão.
                >
                    Abrir no Google Maps {/* Texto do botão */}
                </a>
                </div>
              
                <section id="contatos"> {/* Seção para o componente Contatos */}
                    <Contatos />
                </section>
            </main>
            <div className="whatsapp-button-container"> {/* Contêiner para o botão do WhatsApp */}
                <a
                    href={`https://wa.me/${whatsappNumber}?text=Olá, gostaria de fazer um agendamento.`} // Link do WhatsApp com mensagem pré-definida.
                    target="_blank" // Abre o link em uma nova aba.
                    rel="noopener noreferrer" // Melhora a segurança ao abrir um link em nova aba.
                    className="whatsapp-button" // Classe para estilização do botão.
                >
                    Agendamento via whatsapp {/* Texto do botão */}
                </a>
                <a
                    href={`https://sites.appbarber.com.br/barbershopmedeiros`} // Link Site de agendamento online.
                    target="_blank" // Abre o link em uma nova aba.
                    rel="noopener noreferrer" // Melhora a segurança ao abrir um link em nova aba.
                    className="agendamentoOnline-button" // Classe para estilização do botão.
                >
                    Agendamento online {/* Texto do botão */}
                </a>
            </div>
            
        </div>
        
    );
}

export default App; // Exporta o componente App para ser usado em outros arquivos.
