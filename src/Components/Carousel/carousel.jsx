import { Carousel } from 'react-bootstrap';
import sims from './sims.jpg';
import hot from './hot.jpg';
import experimente from './experimente.jpg';

export default function Carrossel(){
  return(
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sims}
          alt="First slide"
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hot}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={experimente}
          alt="Third slide"
        />
        </Carousel.Item>
    </Carousel>
  )
}


