import { useState } from "react"
import { Link } from "react-router-dom"
import './navEntrar.css'



const NavEntrar= ()=>{
  const [isActive, setIsActive] = useState("");
  
  const handleClick= (e)=>{
    setIsActive(e.target.name)
  }

  return (
    <div className="container-nav-entrar">
      <Link onClick={handleClick} className={isActive === "conectar" ? "isActive" : "" } name="conectar" id="conectar"  to="/login">CONECTAR</Link>
      <Link onClick={handleClick} className={isActive === "criar-conta" ? "isActive" : "" } name="criar-conta" id="criar-conta" to="/inscreva-se"> CRIAR UMA CONTA</Link>
    </div>
  )

}

export default NavEntrar