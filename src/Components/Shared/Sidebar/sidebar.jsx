import { useState } from 'react';
import "./sidebar.css";
import logo from "./logo.png";
import Search from "../../Search/search.jsx"
import { Link } from "react-router-dom";


export default function Sidebar() {
  
  const [activeLink, setActiveLink]= useState("")

  const handleClick= (e) => {
    setActiveLink(e.target.name)
  }
  
  
  return (
    <div id="menu">
      <img className="logo" src={logo} alt="Logotipo origin" />

      <Search/>

      <ul>
        <li >
          <Link to="s" onClick={handleClick} name="EA Play"
            className={`item ${activeLink === "EA Play" ? "linkAtivo":"" }` } >
            EA Play
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} name="Loja"
            className={`item ${activeLink === "Loja" ? "linkAtivo":"" }` } to="/">
            Loja
          </Link>
        </li>
        <li className="categorias">
          <Link onClick={handleClick} name="Explorar"
            className={`item ${activeLink === "Explorar" ? "linkAtivo":"" }` } id="explorar"  to="a">
            Explorar jogos
          </Link>

          <ul id="categoriasList">
            <li>
              <Link className="subcategoria" to="a">Ação</Link>
            </li>
            <li>
              <Link className="subcategoria" to="a">Aventura</Link>
            </li>
            <li>
              <Link className="subcategoria" to="a">MMO</Link>
            </li>
            <li>
              <Link className="subcategoria" to="a">Esportes</Link>
            </li>
          </ul>
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
