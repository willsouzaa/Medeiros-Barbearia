import React from 'react';
import './selecaoLocal.css';
import logo from '../../componentes/Jardin-eldorado/imagens/logo.png';

function SelecaoLocal({ onSelecionar }) {
  return (
    <div className="selecao-local">
      <div className="selecao-overlay">
        <div className="selecao-grid">
          {/* Caixa - Eldorado */}
          <div className="local-box">
            <img src={logo} alt="Logo Eldorado" className="logo" />
            <h2 className="titulo">Jardim Eldorado</h2>
            <p className="subtitulo">Rua Valdemar Vieira-Jardim eldorado, Palhoça - SC</p>
            <button className="botao" onClick={() => onSelecionar('eldorado')}>
              Acessar
            </button>
          </div>

          {/* Caixa - Pagani */}
          <div className="local-box">
            <img src={logo} alt="Logo Pagani" className="logo" />
            <h2 className="titulo">Pagani</h2>
            <p className="subtitulo">Rua José Bonifácio de souza 73,Pagani - Palhoça - SC</p>
            <button className="botao" onClick={() => onSelecionar('pagani')}>
              Acessar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelecaoLocal;
