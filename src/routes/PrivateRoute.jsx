import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Loader from '../components/Shared/Loader';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

  return <Navigate to='/signin' state={location.pathname} replace='true' />;
};

export default PrivateRoute;
