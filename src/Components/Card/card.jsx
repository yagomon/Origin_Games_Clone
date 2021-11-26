import './card.css'
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Card = (props) => {

  const [wish, setWish]= useState(false);

  const navigate = useNavigate();

  const goToGamePage = () => {
    navigate('/game', { state: props.id })
  }

  const wishGame = () => {
    const token = localStorage.token;
    const config = {
      headers: { Authorization: `Bearer ${token}`}
    }
    const id = props.id;

    axios.get(`/game/wish/${id}`, config)
  }

  const handleWish = ()=>{
    setWish(!wish);
    wishGame()
  }

  return (
    <div className='card'>
      
        <div className='card-image' onClick={goToGamePage}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <h2 className='card-title'>{props.title}</h2>
        
        
      

      <div className='card-botton'>
        <span className='card-price'>{`R$ ${props.preco}`}</span>
        <FaRegHeart onClick={handleWish} className={`wishlist ${wish ? "wishFalse" : "" }`} />
        <FaHeart onClick={handleWish} className={`wished ${wish ? "wish" : "" }`}/>

      </div>

    </div>
  )
}

export default Card