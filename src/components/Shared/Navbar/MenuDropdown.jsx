import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import avatarImg from '../../../assets/images/placeholder.jpg';

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=' select-none'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-100 flex flex-row items-center gap-3 rounded-md cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='md:block'>
            {/* Avatar */}
            <img
              className='rounded-full'
              referrerPolicy='no-referrer'
              src={avatarImg}
              alt='profile'
              height='30'
              width='30'
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='hidden md:block absolute rounded-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-[200px] bg-white overflow-hidden right-10 top-16 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <NavLink
              to='/dashboard'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Dashboard
            </NavLink>
            <NavLink
              to='/signin'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
            >
              Log In
            </NavLink>
            <NavLink
              to='/signup'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
            >
              Log Out
            </NavLink>
          </div>
        </div>
      )}

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden absolute rounded-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] w-[70vw] h-[100vh] bg-white overflow-hidden top-0 text-sm duration-300 p-6 ${
          isOpen ? 'left-[calc(0vw)]' : 'left-[-200vw]'
        }`}
      >
        <div className='flex flex-col cursor-pointer'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `px-4 py-3 transition font-semibold ${
                isActive ? 'bg-[#03b97c] text-white' : ''
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to='/dashboard'
            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
          >
            Dashboard
          </NavLink>

          <NavLink
            to='/'
            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
          >
            Log Out
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MenuDropdown;
