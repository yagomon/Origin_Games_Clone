import "./loja.css"
import Carrossel from "../../Components/Carousel/carousel.jsx"
import CardRender from "../../Components/CardRender/cardRender.jsx"
import Card from "../../Components/Card/card.jsx"

export default function Loja(){
  return(
    <div id="loja">
      <Carrossel/>
      <CardRender title='Mais vendidos'>
        <Card image='https://originassets.akamaized.net/origin-com-store-final-assets-prod/16274525/231.0x326.0/1102028_LB_231x326_en_WW_%5E_2021-05-24-12-48-25_1c911c8edc7ad6e669be044cc09555cb0f890ec4.jpg'
          title='Mario Kart™ 8 Deluxe'
          preco='299,00' />
      </CardRender>

    </div>
  )
}