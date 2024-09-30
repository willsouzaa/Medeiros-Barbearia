import React from 'react';

function Contatos() {
  return (
    <section className="contatos">
      <h2>Entre em Contato</h2>
      <div className="info-contato">
        <p><strong>Telefone:</strong> (48) 98840-5365</p>
        <p><strong>Email:</strong> contato@smbbarber.com</p>
        <p><strong>Endereço:</strong> Rua dos Barbeiros, 123, Centro - Sua Cidade</p>
      </div>
      <div className="redes-sociais">
        <h3>Siga-nos nas redes sociais:</h3>
        <a href="https://www.instagram.com/smbarber" target="_blank" rel="noreferrer">Instagram</a> | 
        <a href="https://www.facebook.com/smbarber" target="_blank" rel="noreferrer">Facebook</a>
      </div>
    </section>
  );
}

export default Contatos;
