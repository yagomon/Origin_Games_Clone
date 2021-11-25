import "./loja.css"
import Carrossel from "../../Components/Carousel/carousel.jsx"
import  CardRenderAll  from "../../Components/CardRenders/cardRenderAll"

export default function Loja(){
  return(
    <div className="body">
      <Carrossel/>
      <CardRenderAll title='Todos os Jogos'/>
      
    </div>
  )
}