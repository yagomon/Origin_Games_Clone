import "./inscreva-se.css";
import NavEntrar from "../../Components/NavBar-Entrar/navEntrar";
import { useState } from "react";
import ContainerBodyPage from "../../Components/ContainerBodyPage/containerBodyPage";


export default function Inscrever(){

  const [Active, setActive] = useState("");

  const handleClick= (e)=>{
    setActive(e.target.name)
  }

  return(
    <ContainerBodyPage id="cadastro">
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

          <div className="senha" >
            <p id="titulo-cadastrar" >Confirmar Senha:</p>
            <input onClick={handleClick} name="e-mail" className="input-cadastro" type="text" placeholder="Digite a senha novamente" />
          </div>

          

          <button className="button-cadastrar" type="submit">Inscreva-se</button>

        </form>
        
        <p className="ea-origin"><img className="img-ea-origin" src="https://signin.ea.com/p/statics/originX/img/EA_Origin_Lockup_Black.png" alt="EA / Origin" />  O Origin é parte da EA Network.</p>

      </div>
    </ContainerBodyPage>
  )
}

// "name": "",
// "email": "",
// "nickname": "",
// "password": "",
// "passwordConfirmation":