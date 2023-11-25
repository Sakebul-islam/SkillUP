import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';

// eslint-disable-next-line react/prop-types
const Logo = () => {
  return (
    <Link to='/'>
      <img
        className='hidden md:block'
        src={logoImg}
        alt='logo'
        width='100'
        height='100'
      />
    </Link>
  );
};

export default Logo;
