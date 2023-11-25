import { Helmet } from 'react-helmet-async';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Skill UP || Student and Class management System</title>
      </Helmet>
      <Navbar />
      <Footer />
    </div>
  );
};

export default Home;
