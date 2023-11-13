import React from "react";
import Header from '../../components/header/header'
import './styles.css'
import Video from '../../assets/video.mp4'
import Cards from "../../components/cards";
import Logo from '../../assets/R-removebg-preview.png'


function Home () {

  return (
    <>
      <Header />
      <div id="banner"></div>
      <div id='trailer-container'>
        <div className="content">
          <video controls className="trailer">
            <source src={Video}/>
            Seu navegador não possui suporte para vídeos
          </video>
          <div id="sinopse">
            <p className="description">
              Após dois anos espreitando as ruas como Batman,
              Bruce Wayne se encontra nas profundezas mais
              sombrias de Gothan City. Com poucos aliados
              confiáveis, o vigilante solitário se estabelece
              como a personificação da vingança para a população.
            </p>
            <button className="button">Comprar ingresso</button>
          </div>
        </div>
      </div>
      <Cards />
      <footer>
        <img id="logo" src={Logo}></img>
        <p className="copyright">Desenvolvido por &copy; Artur Souza</p>
      </footer>
    </>
  )
}

export default Home;