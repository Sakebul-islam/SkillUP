import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import MyEnrollClass from '../pages/Dashboard/Student/MyEnrollClass';
import AllClasses from '../pages/AllClasses/AllClasses';
import TechOnSkillup from '../pages/TechOnSkillup/TechOnSkillup';
import PrivateRoute from './PrivateRoute';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/all-classes',
        element: (
          <PrivateRoute>
            <AllClasses />
          </PrivateRoute>
        ),
      },
      {
        path: '/tech-on-skillup',
        element: (
          <PrivateRoute>
            <TechOnSkillup />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: 'signin', element: <SignIn /> },
  { path: 'signup', element: <SignUp /> },
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />,
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard/my-enroll-class',
        element: (
          <PrivateRoute>
            <MyEnrollClass />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
