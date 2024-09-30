// App.js
import './App.css';
import Home from './componentes/home';
import Equipe from './componentes/equipe';
import Contatos from './componentes/contatos';
import Logo from './componentes/imagens/logo.png';

function App() {
    return (
        <div className="App">
            <header>
                <img src={Logo} alt="Logo SMBarber" className="logo" />
                <nav>
                    <a href="#home">Sobre</a>
                    <a href="#equipe">Equipe</a>
                    <a href="#depoimentos">Depoimentos</a>
                    <a href="#servicos">Serviços</a>
                    <a href="#contatos">Contato</a>
                </nav>
            </header>
            <main>
                <section id="home">
                    <Home />
                </section>
                <section id="equipe">
                    <Equipe />
                </section>
                <section id="contatos">
                    <Contatos />
                </section>
            </main>
        </div>
    );
}

export default App;
