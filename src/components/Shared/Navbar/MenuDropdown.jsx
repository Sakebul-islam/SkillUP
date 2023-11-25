import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import HostRequestModal from '../../Modal/HostRequestModal';
import avatarImg from '../../../assets/images/placeholder.jpg';
import { becomeHost } from '../../../api/auth';
import useRole from '../../../hooks/useRole';
import toast from 'react-hot-toast';

const MenuDropdown = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [role] = useRole();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalHandler = async () => {
    try {
      const data = await becomeHost(user?.email);
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success('Success!, Please wait for admin confirmation');
      } else {
        toast.success('Please! Wait for admin Approval ✋');
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        {/* Become A Host btn */}
        <div className='hidden md:block'>
          {(!user || !role || role === 'guest') && (
            <button
              onClick={() => setIsModalOpen(true)}
              disabled={!user}
              className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'
            >
              Host your home
            </button>
          )}
        </div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            {/* Avatar */}
            <img
              className='rounded-full'
              referrerPolicy='no-referrer'
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt='profile'
              height='30'
              width='30'
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <Link
              to='/'
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Home
            </Link>

            {user ? (
              <>
                <Link
                  to='/dashboard'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Dashboard
                </Link>
                <Link
                  onClick={logOut}
                  to='/'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                >
                  Log Out
                </Link>
              </>
            ) : (
              <>
                <Link
                  to='/login'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Login
                </Link>
                <Link
                  to='/signup'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
      <HostRequestModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        modalHandler={modalHandler}
      />
    </div>
  );
};

export default MenuDropdown;
