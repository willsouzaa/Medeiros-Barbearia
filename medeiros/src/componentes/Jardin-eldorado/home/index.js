import React from 'react'; // Importa a biblioteca React para permitir a criação de componentes.
import "./home.css"; // Importa o arquivo CSS para aplicar estilos ao componente.
import barbaImg from './barba2.JPG'; // Importa a imagem para o serviço de barba.
import corteImg from "./corte1.JPG"; // Importa a imagem para o serviço de corte de cabelo.
import infantil from './infantil.JPG'; // Importa a imagem para o serviço de corte infantil.
import luzes from './Luzes.JPG'; // Importa a imagem para o serviço de luzes.
import limpeza from './limpezapele.jpeg'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

// Importe as imagens
import barbaImg1 from './barba2.JPG';
import barbaImg2 from './barba2.JPG';
import corteImg1 from './corte1.JPG';
import corteImg2 from './corte2.jpeg';
import infantil1 from './infantil.JPG';
import infantil2 from './infantil2.jpeg';
import luzes1 from './Luzes.JPG'
import limpezapele1 from './limpezapele.jpeg';

function Home() {
    return (
        <section className="avaliacoes">
            <h2>O que dizem sobre a Barbearia Medeiros</h2>
            <div className="avaliacoes-grid">
                <div className="avaliacao">
                    <span className="estrela">★★★★★</span>
                    <p>"Atendimento impecável e corte top! Recomendo demais."</p>
                    <strong>— Lucas M.</strong>
                </div>
                <div className="avaliacao">
                    <span className="estrela">★★★★★</span>
                    <p>"Ambiente limpo, profissionais educados. Melhor barbearia da região!"</p>
                    <strong>— Rafael S.</strong>
                </div>
                <div className="avaliacao">
                    <span className="estrela">★★★★★</span>
                    <p>"Já sou cliente há anos. Sempre saio satisfeito."</p>
                    <strong>— João P.</strong>
                </div>
            </div>

            {/* Botão de Agendamento */}
            <div className="botao-agendamento-container">
                <a 
                    href="https://seulinkdeagendamento.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="botao-agendamento"
                >
                    Agendar Horário
                </a>
            </div>
        </section>
    );
}

export default Home; // Exporta o componente Home para ser usado em outros arquivos.
