import './cardRenderAll.css';
import React, { useEffect, useState } from "react";
import Card from '../Card/card';
import Api from '../../Api/api';
import { gamesChumbado } from '../../Api/chumbado';



export default function CardRenderAll(props) {
  const games= gamesChumbado

  // const [games, setGames] = useState([]);

  // useEffect(()=>{ 
  //   Api.fetchGetAll(setGames)
  // }, []);
  
  // console.log(games)

  return (
    <div className='cardRender-div'>
      <h2 className='cardRender-title'>{props.title}</h2>
      <div className='cardRender-cards'>
        {
          games.map((game, index)=>(
            <Card data={game} key={game.id} />  
          ))
        }
      </div>
    </div>
  )
};