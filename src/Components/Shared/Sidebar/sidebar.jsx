import { useState } from 'react';
import "./sidebar.css";
import logo from "./logo.png";
import Search from "../../Search/search.jsx"
import { Link } from "react-dom";


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
        <li>
          <a
            id=""
            className={status ? "item ativo":"item"}
            href="/"
            target="blank"
            onClick={()=>{setStatus(true)}}
>
            EA Play
          </a>
        </li>
        <li>
          <a id="" className="item" href="a2.htm">
            Loja
          </a>
        </li>
        <li className="categorias">
          <a
            id="explorar"
            className="item"
            href="/"
            target="blank"
          >
            Explorar jogos
          </a>

          <ul id="categoriasList">
            <li>
              <a href="a2.htm">Ação</a>
            </li>
            <li>
              <a href="Aventura">Aventura</a>
            </li>
            <li>
              <a href="a2.htm">MMO</a>
            </li>
            <li>
              <a href="a2.htm">Esportes</a>
            </li>
          </ul>
        </li>

        <li>
          <a
            id="ofertas"
            className="item"
            href="https://www.origin.com/bra/pt-br/shrefre/deals"
            target="blank"
          >
            Ofertas
          </a>
        </li>
      </ul>

      <div></div>
    </div>
  );
}
