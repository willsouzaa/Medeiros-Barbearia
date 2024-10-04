import React from 'react'; // Importa o React, que é necessário para construir componentes na aplicação.
import ReactDOM from 'react-dom/client'; // Importa ReactDOM, utilizado para renderizar o React no DOM.
import './index.css'; // Importa o arquivo de estilos globais.
import App from './App'; // Importa o componente principal do app (App.js), que será o ponto de partida do layout e lógica.
import reportWebVitals from './reportWebVitals'; // Importa a função para medir a performance do aplicativo (opcional).

// Seleciona o elemento no HTML com o id 'root' para ancorar o React no DOM.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Renderiza o componente App dentro do modo estrito do React. */}
  </React.StrictMode>
);

// A função reportWebVitals é usada para medir e monitorar o desempenho do app, podendo enviar esses dados para uma plataforma de análise.
reportWebVitals();
