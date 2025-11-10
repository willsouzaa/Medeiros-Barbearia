import React from 'react';
import './selecaoLocal.css';
import logo from '../../componentes/Jardin-eldorado/imagens/logo.png';

const unidades = [
  {
    id: 'eldorado',
    nome: 'Jardim Eldorado',
    endereco: 'Rua Valdemar Vieira - Jardim Eldorado, Palhoça - SC',
  },
  {
    id: 'pagani',
    nome: 'Pagani',
    endereco: 'Rua José Bonifácio de Souza, 73 - Pagani, Palhoça - SC',
  },
];

function SelecaoLocal({ onSelecionar }) {
  return (
    <div className="selecao-local">
      <div className="hero">
        <img
          src={logo}
          alt="Logo Barbearia Medeiros"
          className="hero-logo"
        />
        <h1 className="hero-title">Barbearia Medeiros</h1>
        <p className="hero-subtitle">Escolha a unidade que deseja acessar</p>
      </div>

      <div className="options-grid">
        {unidades.map(({ id, nome, endereco }) => (
          <div key={id} className="option-card">
            <h2 className="option-title">{nome}</h2>
            <p className="option-address">{endereco}</p>
            <button className="botao" onClick={() => onSelecionar(id)}>
              Acessar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelecaoLocal;
