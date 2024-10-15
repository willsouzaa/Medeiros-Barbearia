import React from 'react';
import Slider from "react-slick"; // Importa o Slider da biblioteca react-slick
import "slick-carousel/slick/slick.css"; // Importa o CSS do carrossel
import "slick-carousel/slick/slick-theme.css"; // Importa o tema do carrossel
import "./equipe.css"; // Seu CSS personalizado

// Importando as imagens
import equipeImg from './equipe.jpg'; // Foto da equipe
import local1 from './espaço1.jpg'; // Foto do local 1
import local2 from './espaço2.jpg'; // Foto do local 2
import local3 from './espaço3.jpg'; // Foto do local 3
import local4 from './espaço4.jpg'; // Foto do local 3
import local5 from './espaço5.jpg'; // Foto do local 3

function Equipe() {
  // Configurações do carrossel (slick)
  const settings = {
    dots: true, // Exibe bolinhas de navegação
    infinite: true, // Faz com que o carrossel gire em loop
    speed: 500, // Velocidade da transição
    slidesToShow: 1, // Quantidade de slides visíveis
    slidesToScroll: 1, // Quantidade de slides a mover por vez
    autoplay: true, // Ativa o autoplay
    autoplaySpeed: 3000, // Tempo para trocar o slide automaticamente (3 segundos)
    nextArrow: <SampleNextArrow />, // Arrow customizada para próximo slide
    prevArrow: <SamplePrevArrow />, // Arrow customizada para slide anterior
  };

  return (
    <section className="equipe">
      {/* Seção dos barbeiros */}
      <div className="barbers">
        <div className="barber">
          <img className='barber-img' src={equipeImg} alt="Equipe da Barbearia" />
        </div>
      </div>

      {/* Título da seção de fotos da barbearia */}
      <h2>Fotos da Barbearia</h2>

      {/* Carrossel com fotos do local */}
      <Slider {...settings} className="carousel">
        <div>
          <img className='local-img' src={local1} alt="Local da Barbearia 1" />
        </div>
        <div>
          <img className='local-img' src={local2} alt="Local da Barbearia 2" />
        </div>
        <div>
          <img className='local-img' src={local3} alt="Local da Barbearia 3" />
        </div>
        <div>
          <img className='local-img' src={local4} alt="Local da Barbearia 4" />
        </div>
        <div>
          <img className='local-img' src={local5} alt="Local da Barbearia 5" />
        </div>
        {/* Você pode adicionar mais imagens se necessário */}
      </Slider>
    </section>
  );
}

// Arrows customizadas (opcional)
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgba(234, 198, 87, 1)" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgba(234, 198, 87, 1)" }}
      onClick={onClick}
    />
  );
}

export default Equipe;
