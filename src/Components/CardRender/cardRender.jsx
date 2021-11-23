import './cardRender.css';

export default function CardRender(props) {
  return (
    <div className='cardRender-div'>
      <h2 className='cardRender-title'>{props.title}</h2>
      <div className='cardRender-cards'>
        {props.children}
      </div>
    </div>
  )
}