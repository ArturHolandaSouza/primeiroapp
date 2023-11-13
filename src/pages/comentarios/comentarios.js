import React from "react";
import Header from '../../components/header/header'
import './styles.css'
import Logo from '../../assets/R-removebg-preview.png'
import { useParams } from "react-router-dom";


function Home () {
  const params = useParams();
  console.log(params);
  return (
    <>
      <Header />
      <div id="banner"></div>
      <h1>Comentários</h1>
      <div className="comentarios">
        <span>Digite seu comentário:</span>
        <textarea name="mensagem" id="mensagem" rows="10"></textarea>
        <button className="button">Enviar Comentário</button>
      </div>
      <footer>
        <img id="logo" src={Logo}></img>
        <p className="copyright">Desenvolvido por &copy; Artur Souza</p>
      </footer>
    </>
  )
}

export default Home;