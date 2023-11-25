import { Helmet } from 'react-helmet-async';
import Categories from '../../components/Categories/Categories';
import Rooms from '../../components/Rooms/Rooms';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>RoyalKing || Vacation Homes & Condo Rentals</title>
      </Helmet>
      <Categories />
      <Rooms />
    </div>
  );
};

export default Home;
