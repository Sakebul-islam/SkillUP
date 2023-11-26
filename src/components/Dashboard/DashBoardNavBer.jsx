import { Link } from 'react-router-dom';
import Container from '../Shared/Container';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../../assets/images/Logo.png';
import { useState } from 'react';

const DashBoardNavBer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className='relative'>
      <Container>
        <div className='flex justify-between items-center py-2'>
          <Link
            to='/'
            className='max-w-[150px] md:max-w-[180px] lg:max-w-[200px]'
          >
            <img src={Logo} alt='skill UP' title='skill up' />
          </Link>
          <div
            className={`duration-300 flex flex-col absolute top-0 bg-neutral-200 w-3/4 h-screen ${
              isOpen ? 'left-0' : '-left-full'
            }`}
          >
            <div className='flex justify-center items-start p-4 bg-gray-100'>
              <Link
                to='/'
                className='max-w-[150px] md:max-w-[180px] lg:max-w-[200px]'
              >
                <img src={Logo} alt='skill UP' title='skill up' />
              </Link>
            </div>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className='w-12 h-12 select-none grid place-content-center bg-gray-400 cursor-pointer'
          >
            <GiHamburgerMenu className='' color='#fff' />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DashBoardNavBer;
