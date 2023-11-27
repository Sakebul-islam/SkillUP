import { useState } from 'react';
// Components
import logo from '../../../assets/images/logo.png';
import MenuItem from './MenuItem';

// Icons
import { GrLogout } from 'react-icons/gr';
import { FcSettings } from 'react-icons/fc';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdDashboardCustomize } from 'react-icons/md';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';
import StudentMenu from './StudentMenu';
import TeacherMenu from './TeacherMenu';
import { Link, NavLink } from 'react-router-dom';
import AdminMenu from './AdminMenu';

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const [role] = useRole();

  // const role = 'admin';

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div className='block cursor-pointer p-4 font-bold'>
          <Link to='/'>
            <img src={logo} alt='logo' width='100' height='100' />
          </Link>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <GiHamburgerMenu className='h-5 w-5' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-start overflow-x-hidden bg-gray-200 w-64 space-y-6 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div className='w-full md:flex px-4 py-5 -mb-5 shadow-lg rounded-sm justify-center items-center bg-gray-300 mx-auto'>
          <Link to='/'>
            <img src={logo} alt='logo' width='100' height='100' />
          </Link>
        </div>

        <div
          onClick={handleToggle}
          className='h-full !mt-0 flex flex-col justify-between'
        >
          <div>
            {/* Nav Items */}
            <div className='flex flex-col justify-between flex-1'>
              {/* If a user is host */}
              <nav>
                <NavLink
                  to='/dashboard'
                  end
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5 transition-colors text-white ${
                      isActive ? 'bg-[#03b97c]' : 'bg-gray-700'
                    }`
                  }
                >
                  <MdDashboardCustomize className='w-5 h-5' />

                  <span className='mx-4 font-medium'>Dashboard</span>
                </NavLink>

                {role === 'student' && <StudentMenu />}
                {role === 'teacher' && <TeacherMenu />}
                {role === 'admin' && <AdminMenu />}
              </nav>
            </div>
          </div>

          <div>
            <hr />

            <MenuItem
              icon={FcSettings}
              label='Profile'
              address='/dashboard/profile'
            />
            <button
              onClick={logOut}
              className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
            >
              <GrLogout className='w-5 h-5' />

              <span className='mx-4 font-medium'>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
