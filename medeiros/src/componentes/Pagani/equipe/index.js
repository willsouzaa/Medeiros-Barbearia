import React, { useEffect, useState } from 'react';
import Slider from "react-slick"; // Importa o Slider da biblioteca react-slick
import "slick-carousel/slick/slick.css"; // Importa o CSS do carrossel
import "slick-carousel/slick/slick-theme.css"; // Importa o tema do carrossel
import "./equipe.css"; // Seu CSS personalizado

// Importando as imagens
import equipeImgStatic from './equipe.jpg';
import local1Static from './espaço11.jpg';
import local2Static from './espaço22.jpeg';
import local3Static from './espaço33.jpg';
import local4Static from './espaço44.jpeg';
import local5Static from './espaço55.jpeg';
import local6Static from './espaço66.jpg';


function Equipe() {
  const [images, setImages] = useState({ equipe: equipeImgStatic, slides: [local1Static, local2Static, local3Static, local4Static, local5Static, local6Static] });

  useEffect(() => {
    fetch('http://localhost:4000/api/images/pagani?page=equipe&slot=main')
      .then(r => r.json())
      .then(data => {
        if (data && data.length) setImages(prev => ({ ...prev, equipe: `http://localhost:4000${data[0].url}` }));
      }).catch(()=>{});
    fetch('http://localhost:4000/api/images/pagani?page=equipe&slot=slide')
      .then(r=>r.json()).then(data=>{ if(data && data.length) setImages(prev=>({ ...prev, slides: data.map(d=>`http://localhost:4000${d.url}`) })); }).catch(()=>{});
  }, []);
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
      <div className="equipe-shell">
        <div className="equipe-header">
          <span className="section-badge">Unidade Pagani</span>
          <h2 className="section-heading">Referência em estilo, atitude e hospitalidade</h2>
          <p className="section-subtitle">Uma barbearia sofisticada, pensada para quem encara o visual como cartão de visita.</p>
        </div>

        <div className="barbers">
          <div className="barber">
            <img className='barber-img' src={images.equipe} alt="Equipe da Barbearia" />
            <p className="barber-copy">Equipe especializada em cortes urbanos, acabamentos impecáveis e experiências personalizadas.</p>
          </div>
        </div>

          <h3 className="carousel-title section-heading">Fotos da Barbearia</h3>
        <div className="carousel-frame">
          <Slider {...settings} className="carousel">
            {images.slides.map((src, idx) => (
              <div key={idx}>
                <img className='local-img' src={src} alt={`Local da Barbearia ${idx+1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
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
