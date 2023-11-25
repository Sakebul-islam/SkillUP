import { Helmet } from 'react-helmet-async';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';
import HomeSlider from '../../components/HomePage/HomeSlider';
import PartnersSection from '../../components/HomePage/PartnersSection';
import Feedback from '../../components/HomePage/Feedback';
import PlatformOverview from '../../components/HomePage/PlatformOverview';
import BecomeAInstractor from '../../components/HomePage/BecomeAInstractor';
import MapSection from '../../components/HomePage/MapSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Skill UP || Student and Class management System</title>
      </Helmet>
      <Navbar />
      <HomeSlider />
      <PartnersSection />
      <Feedback />
      <PlatformOverview />
      <BecomeAInstractor />
      <MapSection />
      <Footer />
    </>
  );
};

export default Home;
