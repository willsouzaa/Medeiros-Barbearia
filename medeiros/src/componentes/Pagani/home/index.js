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
        <section className="home">
            <p>Experiência profissional de qualidade em cortes de cabelo e barba.</p>
            <h2>Nossos Serviços</h2>
            <div className="servicos">
                
                {/* Serviço - Barba */}
                <div className="servico">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                    >
                        <SwiperSlide><img src={barbaImg1} alt="Barba e bigode cuidados" /></SwiperSlide>
                        <SwiperSlide><img src={barbaImg2} alt="Barba estilizada" /></SwiperSlide>
                    </Swiper>
                    <h3>Barba e Bigode Cuidados</h3>
                    <p>Deixe sua barba impecável com nosso corte personalizado. Oferecemos um serviço detalhado para aparar, modelar e cuidar da sua barba, sempre usando produtos de alta qualidade que hidratam e protegem. Cuide do visual e saúde da sua barba em grande estilo!</p>
                </div>

                {/* Serviço - Corte de cabelo */}
                <div className="servico">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                    >
                        <SwiperSlide><img src={corteImg1} alt="Corte de cabelo" /></SwiperSlide>
                        <SwiperSlide><img src={corteImg2} alt="Corte moderno" /></SwiperSlide>
                    </Swiper>
                    <h3>Corte</h3>
                    <p>Transforme seu visual com nosso corte de cabelo personalizado. Com técnicas modernas e atenção aos detalhes, oferecemos um serviço que valoriza seu estilo e personalidade. Aqui, seu cabelo recebe o cuidado que merece, com produtos de qualidade para um resultado impecável.</p>
                </div>

                {/* Serviço - Corte infantil */}
                <div className="servico">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                    >
                        <SwiperSlide><img src={infantil1} alt="Corte infantil" /></SwiperSlide>
                        <SwiperSlide><img src={infantil2} alt="Corte infantil estilizado" /></SwiperSlide>
                    </Swiper>
                    <h3>Corte Infantil</h3>
                    <p>Nosso corte infantil é feito com carinho e cuidado, garantindo conforto e um visual moderno para os pequenos. Com uma abordagem divertida e produtos adequados para crianças, criamos um ambiente descontraído para que elas aproveitem a experiência e saiam estilosas!</p>
                </div>
                {/* Serviço - Corte infantil */}
                <div className="servico">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                    >
                        <SwiperSlide><img src={luzes1} alt="Luzes" /></SwiperSlide>
                        <SwiperSlide><img src={luzes1} alt="Luzes estilizado" /></SwiperSlide>
                    </Swiper>
                    <h3>Luzes</h3>
                    <p>Realce seu estilo com luzes no cabelo, trazendo luminosidade e profundidade ao seu visual. Usamos técnicas profissionais para garantir um resultado natural e harmonioso, sempre cuidando da saúde dos fios com produtos de alta qualidade. Ilumine sua beleza com sutileza e elegância!</p>
                </div>
                {/* Serviço - Corte infantil */}
                <div className="servico">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                    >
                        <SwiperSlide><img src={limpezapele1} alt="Limpeza de pele" /></SwiperSlide>
                        <SwiperSlide><img src={limpezapele1} alt="Limpeza de pele estilizado" /></SwiperSlide>
                    </Swiper>
                    <h3>Limpeza de pele</h3>
                    <p>Renove sua pele com uma limpeza profunda que remove impurezas, células mortas e ajuda a equilibrar a oleosidade. Indicado para todos os tipos de pele, esse tratamento proporciona frescor, maciez e um brilho natural, deixando sua pele saudável e revigorada.</p>
                </div>

            </div>
        </section>
    );
}

export default Home; // Exporta o componente Home para ser usado em outros arquivos.
