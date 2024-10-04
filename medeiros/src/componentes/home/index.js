import React from 'react'; // Importa a biblioteca React para permitir a criação de componentes.
import "./home.css"; // Importa o arquivo CSS para aplicar estilos ao componente.
import barbaImg from './barba2.JPG'; // Importa a imagem para o serviço de barba.
import corteImg from "./corte1.JPG"; // Importa a imagem para o serviço de corte de cabelo.
import infantil from './infantil.JPG'; // Importa a imagem para o serviço de corte infantil.
import luzes from './Luzes.JPG'; // Importa a imagem para o serviço de luzes.

function Home() { // Define o componente funcional Home.
    return (
        <section className="home"> {/* Seção principal do componente com classe "home" */}
            <p>Experiência profissional de qualidade em cortes de cabelo e barba.</p> {/* Descrição breve */}
            <h2>Nossos Serviços</h2> {/* Título da seção de serviços */}
            <div className="servicos"> {/* Container para os serviços */}
                <div className="servico"> {/* Cada serviço individual */}
                    <img src={barbaImg} alt="Barba e bigode cuidados" /> {/* Imagem do serviço de barba */}
                    <h3>Barba e Bigode Cuidados</h3> {/* Título do serviço */}
                    <p>Deixe sua barba impecável com nosso corte personalizado. Oferecemos um serviço detalhado para aparar, modelar e cuidar da sua barba, sempre usando produtos de alta qualidade que hidratam e protegem. Cuide do visual e saúde da sua barba em grande estilo!</p> {/* Descrição do serviço */}
                </div>
                <div className="servico"> {/* Outro serviço individual */}
                    <img src={corteImg} alt="Limpeza detalhada de pele" /> {/* Imagem do serviço de corte */}
                    <h3>corte</h3> {/* Título do serviço */}
                    <p>Transforme seu visual com nosso corte de cabelo personalizado. Com técnicas modernas e atenção aos detalhes, oferecemos um serviço que valoriza seu estilo e personalidade. Aqui, seu cabelo recebe o cuidado que merece, com produtos de qualidade para um resultado impecável.</p> {/* Descrição do serviço */}
                </div>
                <div className="servico"> {/* Outro serviço individual */}
                    <img src={infantil} alt="Cuidados Faciais e da Pele" /> {/* Imagem do serviço de corte infantil */}
                    <h3>Corte infantil</h3> {/* Título do serviço */}
                    <p>Nosso corte infantil é feito com carinho e cuidado, garantindo conforto e um visual moderno para os pequenos. Com uma abordagem divertida e produtos adequados para crianças, criamos um ambiente descontraído para que elas aproveitem a experiência e saiam estilosas!</p> {/* Descrição do serviço */}
                </div>
                <div className="servico"> {/* Outro serviço individual */}
                    <img src={luzes} alt="Fotos de Estúdio" /> {/* Imagem do serviço de luzes */}
                    <h3>Luzes</h3> {/* Título do serviço */}
                    <p>Realce seu estilo com luzes no cabelo, trazendo luminosidade e profundidade ao seu visual. Usamos técnicas profissionais para garantir um resultado natural e harmonioso, sempre cuidando da saúde dos fios com produtos de alta qualidade. Ilumine sua beleza com sutileza e elegância!</p> {/* Descrição do serviço */}
                </div>
            </div>
        </section>
    );
}

export default Home; // Exporta o componente Home para ser usado em outros arquivos.
