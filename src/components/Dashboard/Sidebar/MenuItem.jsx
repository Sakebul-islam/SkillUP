import { NavLink } from 'react-router-dom';

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-1  transition-colors duration-300 transform  hover:bg-[#03b97383]   hover:text-gray-600 ${
          isActive ? 'bg-[#03b97c]  text-white' : 'text-gray-600'
        }`
      }
    >
      <Icon className='w-5 h-5' />

      <span className='mx-4 font-medium'>{label}</span>
    </NavLink>
  );
};

export default MenuItem;
