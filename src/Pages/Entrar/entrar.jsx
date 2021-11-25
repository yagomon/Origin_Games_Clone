import "./entrar.css";
import axios from 'axios';
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import NavEntrar from "../../Components/NavBar-Entrar/navEntrar";
import ContainerBodyPage from "../../Components/ContainerBodyPage/containerBodyPage";


export default function Entrar(){

  const [Active, setActive] = useState("");
  const handleClick= (e)=>{
    setActive(e.target.name)
  };


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const login = {
      email: email,
      password: password
    }

    axios.post('/auth/login', login)
    .then(response => {
      const token = response.data.token;
      localStorage.setItem('token', token)
    })
  }

  return(
    <ContainerBodyPage id="login">
      <div className="card-entrar">
        <NavEntrar/>
        <h3 id="titulo-conectar" >Conecte-se com sua conta EA</h3>

        <form className="form-login" onSubmit={handleSubmit}>

          <div className={`div-login ${Active === "e-mail" ? "inputActive":"" }` } >
            <FaUser className="icon-login" />
            <input type="text" required
            onChange={event => setEmail(event.target.value)} onClick={handleClick} name="e-mail" className="input-login"placeholder="E-mail" />
          </div>

          <div className={`div-login ${Active === "senha" ? "inputActive":"" }`}>
            <FaLock className="icon-login" />
            <input type="password" onChange={event => setPassword(event.target.value)} onClick={handleClick} name="senha" className="input-login" placeholder="Senha" />
          </div>

          <button className="button-login" type="submit">Conectar</button>
        </form>
        <p className="ea-origin"><img className="img-ea-origin" src="https://signin.ea.com/p/statics/originX/img/EA_Origin_Lockup_Black.png" alt="EA / Origin" />  O Origin é parte da EA Network.</p>
      </div>
    </ContainerBodyPage>
  )
}