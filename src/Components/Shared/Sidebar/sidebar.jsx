import { useState } from 'react';
import "./sidebar.css";
import logo from "./logo.png";
import Search from "../../Search/search.jsx"
import { Link } from "react-router-dom";


export default function Sidebar() {
  
  const [activeLink, setActiveLink]= useState("Loja")

  const handleClick= (e) => {
    setActiveLink(e.target.name)
  }
  
  
// Abrir em nova janela de tamanho especifico-->  onclick="window.open(this.href,'galeria','width=680,height=470'); return false;" title="Galeria de fotos" id="galeria"></a>

  return (
    <div id="menu">
      <img className="logo" src={logo} alt="Logotipo origin" />

      <Search/>

      <ul>
        <li >
          <a href='https://www.origin.com/bra/pt-br/store/ea-play' target="blank" onClick={handleClick} name="EA Play"
            className={`item ${activeLink === "EA Play" ? "linkAtivo":"" }` } >
            EA Play
          </a>
        </li>
        <li>
          <Link onClick={handleClick} name="Loja"
            className={`item ${activeLink === "Loja" ? "linkAtivo":"" }` } to="/">
            Loja
          </Link>
        </li>
        <li className="perfil">
          <Link onClick={handleClick} name="Perfil"
            className={`item ${activeLink === "Perfil" ? "linkAtivo":"" }` } id="perfil"  to="/profile">
            Meu Perfil
          </Link>
        </li>

        <li>
          <Link id="desejos" onClick={handleClick} name="Desejos"
            className={`item ${activeLink === "Desejos" ? "linkAtivo":"" }` } to="/wishlist">
            Lista de Desejos
          </Link>
        </li>
      </ul>

      <div className='buttons'>
        <Link className='entrar' to="/login"> Entrar</Link>
        <Link  className='inscrever' to="/inscreva-se">Inscreva-se</Link>
      </div>
    </div>
  );
}
