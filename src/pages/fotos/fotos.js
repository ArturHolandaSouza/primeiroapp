import React from "react";
import Header from '../../components/header/header'
import './styles.css'
import Logo from '../../assets/R-removebg-preview.png'


function Fotos () {

  return (
    <>
      <Header />
      <div id="banner"></div>
      <h1>Fotos</h1>
      <div className="actor-cards-container">
        <div className="cards-content">
          <div class="card banner-1"></div>
          <div class="card banner-2"></div>
          <div class="card banner-3"></div>
          <div class="card banner-4"></div>
          <div class="card banner-5"></div>
          <div class="card banner-6"></div>
          <div class="card banner-7"></div>
          <div class="card banner-8"></div>
          <div class="card banner-9"></div>
        </div>
      </div>
      <footer>
        <img id="logo" src={Logo}></img>
        <p className="copyright">Desenvolvido por &copy; Artur Souza</p>
      </footer>
    </>
  )
}

export default Fotos;