import Container from '../Container';
import MenuDropdown from './MenuDropdown';
import Logo from '../../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full bg-white z-10 shadow-sm relative'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            <Link
              to='/'
              className='max-w-[150px] md:max-w-[180px] lg:max-w-[200px]'
            >
              <img src={Logo} alt='skill UP' title='skill up' />
            </Link>
            <div className='justify-between items-center gap-6 hidden md:block'>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `px-4 py-2 ${isActive ? 'bg-[#03b97c] text-white' : ''}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to='all-classes'
                className={({ isActive }) =>
                  `px-4 py-2 ${isActive ? 'bg-[#03b97c] text-white' : ''}`
                }
              >
                All Classes
              </NavLink>
              <NavLink
                to='teach-on-skillup'
                className={({ isActive }) =>
                  `px-4 py-2 ${isActive ? 'bg-[#03b97c] text-white' : ''}`
                }
              >
                Teach on SkillUP
              </NavLink>
            </div>
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
