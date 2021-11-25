import './perfil.css';
import ContainerBodyPage from "../../Components/ContainerBodyPage/containerBodyPage";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Perfil = () => {

  const [user, setUser] = useState({});
  const [mounted, setMounted] = useState(false);
  const [notLogged, setNotLogged] = useState(true);

  useEffect(() => {
    setMounted(true)

    if(localStorage.token) {
      const token = localStorage.token;

      const config = {
        headers: { Authorization: `Bearer ${token}`}
      }

      axios.get('/auth/me', config)
      .then(response => {
        setNotLogged(false)
        setUser(response.data)
      })
    }

  }, [mounted])

  return (
    <ContainerBodyPage>
      <div className='profile'>
      <div className='profile-img'>
        <img src='https://img.gta5-mods.com/q75/images/og-loc-voice-pack/0278e0-OGLOC.jpg' alt='Mario' />
      </div>
      {
        !notLogged ? (
          <>
            <h2>{user.name}</h2>
            <span>Email: {user.email}</span>
            <span>Membro desde: {user.createdAt}</span>
          </>
        ) : (
          <h2>Sem dados do perfil, faça login</h2>
        )
      }
    </div>

    </ContainerBodyPage>
  )
}

export default Perfil