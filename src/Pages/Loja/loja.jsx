import "./loja.css"
import Carrossel from "../../Components/Carousel/carousel.jsx"
import  CardRenderAll  from "../../Components/CardRenders/cardRenderAll"
import ContainerBodyPage from "../../Components/ContainerBodyPage/containerBodyPage"
import sims from './sims.jpg';
import hot from './hot.jpg';
import experimente from './experimente.jpg';

export default function Loja(){
  return(
    <>
      <ContainerBodyPage>
        <Carrossel img1={sims} img2={hot} img3={experimente}/>
        <CardRenderAll title='Todos os Jogos'/>
      </ContainerBodyPage>
      
    </>
  )
}