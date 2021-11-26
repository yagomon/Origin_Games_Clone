import "./inscreva-se.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavEntrar from "../../Components/NavBar-Entrar/navEntrar";
import ContainerBodyPage from "../../Components/ContainerBodyPage/containerBodyPage";


export default function Inscrever(){

  const [Active, setActive] = useState("");
  const handleClick= (e)=>{
    setActive(e.target.name)
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const user = {
      name,
      email,
      nickname,
      password,
      passwordConfirmation
    }

    axios.post('user/register', user)
    .then(response => console.log(response))
  }

  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate('/login')
  }


  return(
    <ContainerBodyPage id="cadastro">
      <div className="card-cadastrar">
        <NavEntrar/>

        <form className="form-cadastro" onSubmit={handleSubmit}>
          
          <div className="nome" >
            <p id="titulo-cadastrar" >Nome:</p>
            <input type="text" required onChange={event => setName(event.target.value)} onClick={handleClick} name="nome" className={`input-cadastro ${Active === "nome" ? "inputActive":"" }`}  placeholder="Insira seu nome" />
          </div>

          <div className="email" >
            <p id="titulo-cadastrar" >Email:</p>
            <input type="email" required onChange={event => setEmail(event.target.value)}  onClick={handleClick} name="e-mail" className={`input-cadastro ${Active === "e-mail" ? "inputActive":"" }`}  placeholder="Insira seu melhor e-mail!" />
          </div>

          <div className="apelido" >
            <p id="titulo-cadastrar" >Apelido:</p>
            <input type="text" required onChange={event => setNickname(event.target.value)} onClick={handleClick} name="apelido" className={`input-cadastro ${Active === "apelido" ? "inputActive":"" }`} placeholder="Como te chamamos?" />
          </div>

          <div className="senha" >
            <p id="titulo-cadastrar" >Senha:</p>
            <input type='password' required onChange={event => setPassword(event.target.value)} onClick={handleClick} name="senha" className={`input-cadastro ${Active === "senha" ? "inputActive":"" }`} placeholder="Digite uma senha" />
          </div>

          <div className="senha" >
            <p id="titulo-cadastrar" >Confirmar Senha:</p>
            <input type="password" required onChange={event => setPasswordConfirmation(event.target.value)} onClick={handleClick} name="confirma" className={`input-cadastro ${Active === "confirma" ? "inputActive":"" }`} placeholder="Digite a senha novamente" />
          </div>

          

          <button onClick="goToLoginPage" className="button-cadastrar" type="submit" value='Continuar'>Inscreva-se</button>

        </form>
        
        <p className="ea-origin"><img className="img-ea-origin" src="https://signin.ea.com/p/statics/originX/img/EA_Origin_Lockup_Black.png" alt="EA / Origin" />  O Origin é parte da EA Network.</p>

      </div>
    </ContainerBodyPage>
  )
}