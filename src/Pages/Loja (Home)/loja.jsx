import "./loja.css"
import Carrossel from "../../Components/Carousel/carousel.jsx"
import ContainerBodyPage from "../../Components/ContainerBodyPage/containerBodyPage"
import sims from './img/sims.jpg';
import hot from './img/hot.jpg';
import experimente from './img/experimente.jpg';
import CardContainer from "../../Components/CardContainer/cardContainer";
import Card from "../../Components/Card/card";
import axios from "axios";
import { useEffect, useState } from 'react'; 

export default function Loja(){

  const [games, setGames] = useState([]);
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    try{
      const response = await axios.get('/game/findMany');
      if(mounted) { setGames(response.data) }
    } catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    setMounted(true)
    getData()
  }, [mounted])


  return(
    <>
      <ContainerBodyPage>
        <Carrossel img1={sims} img2={hot} img3={experimente}/>
        <CardContainer title='Todos os Jogos'>
        {
          games.map(game => (
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
      </ContainerBodyPage>
      
    </>
  )
}