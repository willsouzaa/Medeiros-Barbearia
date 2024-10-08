import React from 'react';
import "./equipe.css"; // Certifique-se de importar o CSS

// Importe suas imagens aqui
import equipeImg from './equipe.jpg'; // Exemplo de foto do barbeiro 1
import local1 from './espaço1.jpg'; // Exemplo de foto do local
import local2 from './espaço2.jpg'; // Exemplo de foto do local
import local3 from './espaço3.jpg'; // Exemplo de foto do local

function Equipe() {
  return (
    <section className="equipe">

      <div className="barbers">
        <div className="barber">
          <img className='' src={equipeImg} alt="equipeImg" />
        </div>
        {/* Você pode adicionar mais barbeiros aqui */}
      </div>
      <h2>Fotos da Barbearia</h2>
      <div className="local">
        <img src={local1} alt="Local da Barbearia 1" />
        <img src={local2} alt="Local da Barbearia 2" />
        <img src={local3} alt="Local da Barbearia 3" />
      </div>
    </section>
  );
}

export default Equipe;
