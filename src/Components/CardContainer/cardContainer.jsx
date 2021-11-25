import './cardContainer.css';


export default function CardContainer(props) {
    
  return (
    <div className='cardContainer-div'>
      <h2 className='cardContainer-title'>{props.title}</h2>
      <div className='cardContainer-cards'> {props.children} </div>
    </div>
  )
};