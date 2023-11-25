import Container from '../Container';
import MenuDropdown from './MenuDropdown';
import Logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full bg-white z-10 shadow-sm relative'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            <Link to='/' className='max-w-[200px]'>
              <img src={Logo} alt='skill UP' title='skill up' />
            </Link>
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
