import HeaderStyle from './styles';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <HeaderStyle>
      <header className='Header'>
        <div className='Logo-Section'>
          <img src='/img/logo.svg' alt='' />
        </div>
        <div className='Navigation'>
          <ul className='Links'>
            <li>
              <Link to='/'>ACCUEIL</Link>
            </li>
            <li>
              <Link to='/'>RECHERCHE</Link>
            </li>
          </ul>
        </div>
      </header>
    </HeaderStyle>
  );
}
