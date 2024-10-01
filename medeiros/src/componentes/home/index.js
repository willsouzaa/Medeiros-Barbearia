import React from 'react';
import "./home.css";
import barbaImg from './Barba.JPG'; // Use a capitalização correta
import limpezaImg from './Barba.JPG'; // Exemplo de imagem
import cuidadosImg from './Barba.JPG'; // Exemplo de imagem
import studioImg from './Barba.JPG'; // Exemplo de imagem
import formandoImg from './Barba.JPG'; // Exemplo de imagem
import lavagemImg from './Barba.JPG'; // Exemplo de imagem

function Home() {
    return (
        <section className="home">
            <p>Experiência profissional de qualidade em cortes de cabelo e barba.</p>
            <h2>Nossos Serviços</h2>
            <div className="servicos">
                <div className="servico">
                    <img src={barbaImg} alt="Barba e bigode cuidados" />
                    <h3>Barba e Bigode Cuidados</h3>
                    <p>Serviço completo de cuidados com barba e bigode, deixando você com uma aparência impecável.</p>
                </div>
                <div className="servico">
                    <img src={limpezaImg} alt="Limpeza detalhada de pele" />
                    <h3>Limpeza Detalhada de Pele</h3>
                    <p>Oferecemos uma limpeza profunda para revitalizar sua pele e deixá-la mais saudável.</p>
                </div>
                <div className="servico">
                    <img src={cuidadosImg} alt="Cuidados Faciais e da Pele" />
                    <h3>Cuidados Faciais e da Pele</h3>
                    <p>Tratamentos especiais para manter sua pele limpa, hidratada e saudável.</p>
                </div>
                <div className="servico">
                    <img src={studioImg} alt="Fotos de Estúdio" />
                    <h3>Fotos de Estúdio</h3>
                    <p>Transforme seu visual com fotos profissionais após o corte.</p>
                </div>
                <div className="servico">
                    <img src={formandoImg} alt="Formando a Barba" />
                    <h3>Formando a Barba</h3>
                    <p>Defina o estilo da sua barba com precisão e cuidado.</p>
                </div>
                <div className="servico">
                    <img src={lavagemImg} alt="Lavagem de Cabelo" />
                    <h3>Lavagem de Cabelo</h3>
                    <p>Serviço completo de lavagem, com produtos de qualidade para deixar seu cabelo limpo e cheiroso.</p>
                </div>
            </div>
        </section>
    );
}

export default Home;
