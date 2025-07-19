import React from 'react';
import "./home.css";

// Avaliações
function Home() {
    return (
        <section className="avaliacoes">
            <h2>O que dizem sobre a Barbearia Medeiros</h2>
            <div className="avaliacoes-grid">
                <div className="avaliacao">
                    <span className="estrela">★★★★★</span>
                    <p>"Atendimento impecável e corte top! Recomendo demais."</p>
                    <strong>— Lucas M.</strong>
                </div>
                <div className="avaliacao">
                    <span className="estrela">★★★★★</span>
                    <p>"Ambiente limpo, profissionais educados. Melhor barbearia da região!"</p>
                    <strong>— Rafael S.</strong>
                </div>
                <div className="avaliacao">
                    <span className="estrela">★★★★★</span>
                    <p>"Já sou cliente há anos. Sempre saio satisfeito."</p>
                    <strong>— João P.</strong>
                </div>
            </div>

            {/* Botão de Agendamento */}
            <div className="botao-agendamento-container">
                <a 
                    href="https://sites.appbarber.com.br/barbershopmedei-r6kc" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="botao-agendamento"
                >
                    Agendar Horário
                </a>
            </div>
        </section>
    );
}

export default Home;
