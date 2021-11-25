import "./wishlist.css"
import  CardRenderAll  from "../../Components/CardRenders/cardRenderAll"
import ContainerBodyPage from "../../Components/ContainerBodyPage/containerBodyPage"

export default function WishList(){
  return(
    <ContainerBodyPage>
      <CardRenderAll title='Minha Lista de Desejos'/>
      
    </ContainerBodyPage>
  )
}