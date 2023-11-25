import { Helmet } from 'react-helmet-async';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';
import HomeSlider from '../../components/HomePage/HomeSlider';

const Home = () => {
  return (
    <div className=''>
      <Helmet>
        <title>Skill UP || Student and Class management System</title>
      </Helmet>
      <Navbar />
      <HomeSlider />
      <Footer />
    </div>
  );
};

export default Home;
