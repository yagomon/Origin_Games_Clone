import "./wishlist.css"
import ContainerBodyPage from "../../Components/ContainerBodyPage/containerBodyPage"
import CardContainer from "../../Components/CardContainer/cardContainer"
import Card from "../../Components/Card/card"

export default function WishList(){
  return(
    <ContainerBodyPage>
      <CardContainer title='Minha Lista de Desejos'>
        <Card/>
      </CardContainer>
      
    </ContainerBodyPage>
  )
}