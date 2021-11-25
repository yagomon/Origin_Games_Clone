import './footer.css';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';
import ContainerBodyPage from '../ContainerBodyPage/containerBodyPage';

const Footer = () => {
  return (
    <ContainerBodyPage>
      <div className='footer'>
        <div className='social'>
          <a href='https://www.facebook.com/OriginInsider' target="blank"><FaFacebookSquare className='social-item'/></a>
          <a href='https://www.instagram.com/eaoriginals/' target="blank"><FaInstagramSquare className='social-item' /></a>
          <a href='https://twitter.com/origininsider' target="blank"><FaTwitterSquare className='social-item'/></a>
          <a href='https://www.youtube.com/channel/UCXWUa9LL0XXeqBcTCRAkVfg ' target="blank"><FaYoutubeSquare className='social-item' /></a>
        </div>
        <span>© 2021 Electronic Arts Inc. Os jogos são propriedade de seus respectivos donos.</span>
        <span>EA Swiss Sàrl | A sede está localizada em Place du Molard, Genebra (Suíça)</span>
        <span>Registry (Genebra) sob o número: CH-660-2328005-8.</span>
      </div>
      </ContainerBodyPage>  
  )
}


export default Footer
