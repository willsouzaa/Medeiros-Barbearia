import React from 'react'; // Importa a biblioteca React para criar componentes
import './contatos.css'; // Importa os estilos CSS específicos para o componente

function ContatoEldorado() {
  return (
    <section className="contatos">
      <div className="contatos-shell">
        <div className="contatos-header">
          <span className="section-badge">Unidade Jardim Eldorado</span>
          <h2 className="section-heading">Entre em Contato</h2>
          <p className="section-subtitle">Estamos prontos para receber você com horário marcado, atendimento ágil e rotas fáceis até a barbearia.</p>
        </div>

        <div className="contato-actions">
          <a
            className="contato-button primary"
            href="https://wa.me/5548996748923"
            target="_blank"
            rel="noreferrer"
          >
            Chamar no WhatsApp
          </a>
          <a
            className="contato-button ghost"
            href="https://maps.google.com/?q=R.+Valdemar+Vi%C3%AAira,+1415+-+Jardim+Eldorado,+Palho%C3%A7a+-+SC,+88133-390"
            target="_blank"
            rel="noreferrer"
          >
            Ver rotas no mapa
          </a>
        </div>

        <div className="contatos-grid">
          <div className="contato-secao">
            <h3>Barbearia Medeiros</h3>
            <address className="info-contato">
              <p><strong>Telefone:</strong> <a href="tel:+55048996748923">(48) 99674-8923</a></p>
              <p><strong>Site:</strong> <a href="https://barbeariamedeiros.com.br" target="_blank" rel="noreferrer">barbeariamedeiros.com.br</a></p>
              <p><strong>Endereço:</strong> R. Valdemar Viêira, 1415 - Jardim Eldorado, Palhoça - SC, 88133-390</p>
            </address>

            <div className="redes-sociais">
              <h4>Siga a barbearia</h4>
              <nav>
                <a href="https://www.instagram.com/barbershop__medeiros/" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">Facebook</a>
              </nav>
            </div>
          </div>

          <div className="contato-secao desenvolvedor">
            <h3>Desenvolvido por</h3>
            <address className="info-contato">
              <p><strong>Nome:</strong> Paulo Amancio</p>
              <p><strong>Telefone:</strong> <a href="tel:+5548988405365">(48) 98840-5365</a></p>
              <p><strong>Portfólio:</strong> <a href="https://Pauloamancio.com.br" target="_blank" rel="noreferrer">Pauloamancio.com.br</a></p>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContatoEldorado; // Exporta o componente Contatos para uso em outros arquivos
