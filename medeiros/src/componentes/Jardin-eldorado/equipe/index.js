import React, { useEffect, useState } from 'react';
import Slider from "react-slick"; // Importa o Slider da biblioteca react-slick
import "slick-carousel/slick/slick.css"; // Importa o CSS do carrossel
import "slick-carousel/slick/slick-theme.css"; // Importa o tema do carrossel
import "./equipe.css"; // Seu CSS personalizado

// Importando as imagens
import equipeImgStatic from './equipe.jpg'; // Foto da equipe (fallback)
import local1Static from './espaço1.jpg';
import local2Static from './espaço2.jpeg';
import local3Static from './espaço3.jpg';
import local4Static from './espaço4.jpeg';
import local5Static from './espaço5.jpeg';
import local7Static from './espaco77.jpg';
import local8Static from './espaco88.jpg';
import local9Static from './espaco99.jpg';
import local0Static from './espaco1010.jpg';


function Equipe() {
  const [images, setImages] = useState({ equipe: equipeImgStatic, slides: [local1Static, local2Static, local3Static, local4Static, local5Static, local7Static, local8Static, local9Static, local0Static] });

  useEffect(() => {
    // try load from API first
    fetch('http://localhost:4000/api/images/jardin-eldorado?page=equipe&slot=main')
      .then(r => r.json())
      .then(data => {
        if (data && data.length) {
          setImages(prev => ({ ...prev, equipe: `http://localhost:4000${data[0].url}`, slides: prev.slides }));
        }
      }).catch(()=>{});

    fetch('http://localhost:4000/api/images/jardin-eldorado?page=equipe&slot=slide')
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
          <span className="section-badge">Unidade Jardim Eldorado</span>
          <h2 className="section-heading">Nossa equipe e o ambiente que te recebe</h2>
          <p className="section-subtitle">Cuidado artesanal, atmosfera acolhedora e a energia certa para valorizar cada detalhe do seu estilo.</p>
        </div>

        <div className="barbers">
          <div className="barber">
            <img className='barber-img' src={images.equipe} alt="Equipe da Barbearia" />
            <p className="barber-copy">Profissionais premiados que combinam técnica e personalidade em cada atendimento.</p>
          </div>
        </div>

        <div className="carousel-frame">
          <h3 className="carousel-title">Fotos da Barbearia</h3>
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
