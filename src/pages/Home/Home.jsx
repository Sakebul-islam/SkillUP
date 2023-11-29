import { Helmet } from 'react-helmet-async';
import HomeSlider from '../../components/HomePage/HomeSlider';
import PartnersSection from '../../components/HomePage/PartnersSection';
import Feedback from '../../components/HomePage/Feedback';
import PlatformOverview from '../../components/HomePage/PlatformOverview';
import BecomeAInstractor from '../../components/HomePage/BecomeAInstractor';
import MapSection from '../../components/HomePage/MapSection';
import Instructors from '../../components/HomePage/Instructors';
import FeaturedCourses from '../../components/HomePage/FeaturedCourses';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Skill UP || Student and Class management System</title>
      </Helmet>
      <HomeSlider />
      <PartnersSection />
      <Feedback />
      <FeaturedCourses />
      <Instructors />
      <PlatformOverview />
      <BecomeAInstractor />
      <MapSection />
    </>
  );
};

export default Home;
