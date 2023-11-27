import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import avatarImg from '../../../assets/images/placeholder.jpg';
import useAuth from '../../../hooks/useAuth';

const MenuDropdown = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=' select-none'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-100 flex flex-row items-center gap-1 md:gap-3 rounded-md cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='md:block'>
            {/* Avatar */}
            <img
              className='rounded-full w-8 h-8'
              referrerPolicy='no-referrer'
              src={user?.photoURL ? user?.photoURL : avatarImg}
              alt='profile'
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='hidden md:block absolute rounded-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-[200px] bg-white overflow-hidden right-10 top-16 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <NavLink className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
              {user?.displayName}
            </NavLink>
            <NavLink
              to='/dashboard'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Dashboard
            </NavLink>

            {user?.email ? (
              <NavLink
                onClick={logOut}
                to='/'
                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
              >
                Log Out
              </NavLink>
            ) : (
              <NavLink
                to='/signin'
                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
              >
                Log In
              </NavLink>
            )}
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
          <NavLink className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
            {user?.displayName}
          </NavLink>
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
            to='/all-classes'
            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
          >
            All Classes
          </NavLink>
          <NavLink
            to='/texh-on-skillup'
            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
          >
            Teach on SkillUP
          </NavLink>

          {user?.email ? (
            <NavLink
              onClick={logOut}
              to='/'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
            >
              Log Out
            </NavLink>
          ) : (
            <NavLink
              to='/signin'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
            >
              Log In
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuDropdown;
