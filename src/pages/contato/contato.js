import React from "react";
import Header from '../../components/header/header'
import './styles.css'
import Logo from '../../assets/R-removebg-preview.png'


function Contato () {

  return (
    <>
      <Header />
      <div id="banner"></div>
      <h1>Contato</h1>
      <div className="contato">
        <span>Nome:</span>
        <input id="nome" type="text" name="nome"/>
        <span>Email:</span>
        <input id="email" type="email" name="email" placeholder="Coloque um email válido"/>
        <span>Digite sua mensagem:</span>
        <textarea name="mensagem" id="mensagem" rows="10"></textarea>
        <button className="button">Enviar</button>
      </div>
      <footer>
        <img id="logo" src={Logo}></img>
        <p className="copyright">Desenvolvido por &copy; Artur Souza</p>
      </footer>
    </>
  )
}

export default Contato;