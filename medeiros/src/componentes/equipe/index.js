import React from 'react';
import "./equipe.css"; // Certifique-se de importar o CSS

// Importe suas imagens aqui
import barbeiro1 from './equipe.jpg'; // Exemplo de foto do barbeiro 1
import barbeiro2 from './equipe.jpg'; // Exemplo de foto do barbeiro 2
import barbeiro3 from './equipe.jpg'; // Exemplo de foto do barbeiro 3
import local1 from './espaço1.jpg'; // Exemplo de foto do local
import local2 from './espaço2.jpg'; // Exemplo de foto do local
import local3 from './espaço3.jpg'; // Exemplo de foto do local
import local4 from './espaço4.jpg'; // Exemplo de foto do local
import local5 from './espaço5.jpg'; // Exemplo de foto do local

function Equipe() {
  return (
    <section className="equipe">
      <h2>Conheça Nossa Equipe</h2>
      <div className="barbers">
        <div className="barber">
          <img src={barbeiro1} alt="Barbeiro 1" />
          <p>Nome do Barbeiro 1</p>
        </div>
        <div className="barber">
          <img src={barbeiro2} alt="Barbeiro 2" />
          <p>Nome do Barbeiro 2</p>
        </div>
        <div className="barber">
          <img src={barbeiro3} alt="Barbeiro 3" />
          <p>Nome do Barbeiro 3</p>
        </div>
      </div>
      <h2>Fotos da Barbearia</h2>
      <div className="local">
        <img src={local1} alt="Local da Barbearia 1" />
        <img src={local2} alt="Local da Barbearia 2" />
        <img src={local3} alt="Local da Barbearia 3" />
        <img src={local4} alt="Local da Barbearia 4" />
        <img src={local5} alt="Local da Barbearia 5" />
      </div>
    </section>
  );
}

export default Equipe;
