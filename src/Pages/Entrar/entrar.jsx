import "./entrar.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import NavEntrar from "../../Components/NavBar-Entrar/navEntrar";
import { useState } from "react";


export default function Entrar(){

  const [Active, setActive] = useState("");

  const handleClick= (e)=>{
    setActive(e.target.name)
  }

  return(
    <div id="login" className="body">
      <div className="card-entrar">
        <NavEntrar/>
        <h3 id="titulo-conectar" >Conecte-se com sua conta EA</h3>

        <form className="form-login">
          <div className={`div-login ${Active === "e-mail" ? "inputActive":"" }` } >
            <FaUser className="icon-login" />
            <input onClick={handleClick} name="e-mail" className="input-login" type="text" placeholder="E-mail" />
          </div>

          <div className={`div-login ${Active === "senha" ? "inputActive":"" }`}>
            <FaLock className="icon-login" />
            <input onClick={handleClick} name="senha" className="input-login" type="text" placeholder="Senha" />
          </div>

          <button className="button-login" type="submit">Conectar</button>
        </form>
        <p className="ea-origin"><img className="img-ea-origin" src="https://signin.ea.com/p/statics/originX/img/EA_Origin_Lockup_Black.png" alt="EA / Origin" />  O Origin é parte da EA Network.</p>
      </div>
    </div>
  )
}