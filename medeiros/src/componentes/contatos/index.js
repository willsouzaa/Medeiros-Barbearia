import React from 'react'; // Importa a biblioteca React para criar componentes
import './contatos.css'; // Importa os estilos CSS específicos para o componente

function Contatos() {
  return (
    <section className="contatos"> {/* Seção principal para contatos */}
      <h2>Entre em Contato</h2> {/* Título da seção de contato */}

      {/* Informações da Barbearia */}
      <div className="contato-secao"> {/* Contêiner para as informações da barbearia */}
        <h3>Barbearia Medeiros</h3> {/* Subtítulo com o nome da barbearia */}
        <address className="info-contato"> {/* Elemento de endereço semântico */}
          <p><strong>Telefone:</strong> <a href="tel:+55048996748923">(48) 99674-8923</a></p> {/* Link de telefone com link direto para discagem */}
          <p><strong>Email:</strong> <a href="https://barbeariamedeiros.vercel.app" target="_blank" rel="noreferrer">barbeariamedeiros.vercel.app</a></p> {/* Link para o site da barbearia */}
          <p><strong>Endereço:</strong> R. Valdemar Viêira, 1415 - Jardim Eldorado, Palhoça - SC, 88133-390</p> {/* Informações de endereço */}
        </address>
        <div className="redes-sociais"> {/* Contêiner para as redes sociais */}
          <h4>Siga-nos nas redes sociais:</h4> {/* Título da seção de redes sociais */}
          <nav> {/* Elemento de navegação para links de redes sociais */}
            <a href="https://www.instagram.com/barbershop__medeiros/" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a> {/* Link para Instagram */}
            <span> | </span> {/* Separador entre os links */}
            <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook">Facebook</a> {/* Link para Facebook (vazio, precisa de um URL) */}
          </nav>
        </div>
      </div>

      {/* Informações do Desenvolvedor */}
      <div className="contato-secao"> {/* Contêiner para as informações do desenvolvedor */}
        <h3>Desenvolvedor do Site</h3> {/* Subtítulo com o nome do desenvolvedor */}
        <address className="info-contato"> {/* Elemento de endereço semântico */}
          <p><strong>Nome:</strong> Paulo Amancio</p> {/* Nome do desenvolvedor */}
          <p><strong>Telefone:</strong> <a href="tel:+5548988405365">(48) 98840-5365</a></p> {/* Link de telefone com link direto para discagem */}
          <p><strong>Portfólio:</strong> <a href="https://Pauloamancio.vercel.app" target="_blank" rel="noreferrer">Pauloamancio.vercel.app</a></p> {/* Link para o portfólio do desenvolvedor */}
        </address>
        <div className="redes-sociais"> {/* Contêiner para as redes sociais do desenvolvedor */}
          <h4>Siga o desenvolvedor:</h4> {/* Título da seção de redes sociais */}
          <nav> {/* Elemento de navegação para links de redes sociais */}
            <a href="https://www.linkedin.com/in/paulo-amancio-4b7bbb247/" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a> {/* Link para LinkedIn */}
            <span> | </span> {/* Separador entre os links */}
            <a href="https://github.com/willsouzaa" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a> {/* Link para GitHub */}
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Contatos; // Exporta o componente Contatos para uso em outros arquivos
