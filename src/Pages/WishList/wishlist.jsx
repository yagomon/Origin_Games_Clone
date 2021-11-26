import "./wishlist.css"
import { useState, useEffect } from 'react';
import axios from 'axios';
import ContainerBodyPage from "../../Components/ContainerBodyPage/containerBodyPage"
import CardContainer from "../../Components/CardContainer/cardContainer"
import Card from "../../Components/Card/card"
import { FaSadTear } from "react-icons/fa";

export default function WishList(){

  const [wishList, setWishList] = useState([]);
  const [mounted, setMounted] = useState(false)
  const [notLogged, setNotLoggend] = useState(true)

  useEffect(() => {
    setMounted(true)

    if(localStorage.token) {
      const token = localStorage.token;

      const config = {
        headers: { Authorization: `Bearer ${token}`}
      }

      axios.get('/game/myWishList', config)
      .then(response => {
        setNotLoggend(false)
        setWishList(response.data.games)
      })
    }
  }, [mounted])

  return(
    <ContainerBodyPage>
      {
        !notLogged ? (
            <CardContainer title='Minha Lista de Desejos'>
              {
                wishList.map(game => (
                  <Card 
                    id={game.id}
                    image={game.image}
                    title={game.name}
                    preco={game.price}
                    key={game.id}
                  />
                ))
              }
            </CardContainer>
        ) : (
          <div className="txt">
            <FaSadTear className="sad"/>
          <h2>Sem dados na lista.</h2>
          <h2>Entre com uma conta!</h2>
          </div>  
        )
      }
    </ContainerBodyPage>
  )
}