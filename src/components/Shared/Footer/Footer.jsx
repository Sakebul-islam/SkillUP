import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=''>
      <div className='py-6 text-sm text-center bg-gray-50 text-gray-600'>
        © {currentYear}
        <Link to='/' className='text-[#03b97c] font-bold'>
          &nbsp;Skill Up&nbsp;
        </Link>
        Corporation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
