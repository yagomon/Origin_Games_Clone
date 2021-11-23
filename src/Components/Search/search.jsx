import search from "./search-icon.png";
import "./search.css";

export default function Search() {
  return(
    <div id="divBusca">
      <img src={search} id="btnBusca" alt="Buscar" />

      <input type="text" id="txtBusca" placeholder="Procure Jogos e muito mais" />
    </div>
  )
}