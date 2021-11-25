import "./inscreva-se.css";
import NavEntrar from "../../Components/NavBar-Entrar/navEntrar";
import { useState } from "react";


export default function Inscrever(){

  const [Active, setActive] = useState("");

  const handleClick= (e)=>{
    setActive(e.target.name)
  }

  return(
    <div id="cadastro" className="body">
      <div className="card-cadastrar">
        <NavEntrar/>

        <form className="form-cadastro">
          
          <div className="nome" >
            <p id="titulo-cadastrar" >Nome:</p>
            <input onClick={handleClick} name="e-mail" className="input-cadastro" type="text" placeholder="Insira seu nome" />
          </div>

          <div className="email" >
            <p id="titulo-cadastrar" >Email:</p>
            <input onClick={handleClick} name="e-mail" className="input-cadastro" type="text" placeholder="Insira seu melhor e-mail!" />
          </div>

          <div className="apelido" >
            <p id="titulo-cadastrar" >Apelido:</p>
            <input onClick={handleClick} name="e-mail" className="input-cadastro" type="text" placeholder="Como te chamamos?" />
          </div>

          <div className="senha" >
            <p id="titulo-cadastrar" >Senha:</p>
            <input onClick={handleClick} name="e-mail" className="input-cadastro" type="text" placeholder="Digite uma senha" />
          </div>

          

          <button className="button-cadastrar" type="submit">Inscreva-se</button>

        </form>
        
        <p className="ea-origin"><img className="img-ea-origin" src="https://signin.ea.com/p/statics/originX/img/EA_Origin_Lockup_Black.png" alt="EA / Origin" />  O Origin é parte da EA Network.</p>

      </div>
    </div>
  )
}

// "name": "",
// "email": "",
// "nickname": "",
// "password": "",
// "passwordConfirmation":