import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import MyEnrollClass from '../pages/Dashboard/Student/MyEnrollClass';
import AllClasses from '../pages/AllClasses/AllClasses';
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
        element: <AllClasses />,
      },
      {
        path: '/tech-on-skillup',
        element: <AllClasses />,
      },
    ],
  },
  { path: 'signin', element: <SignIn /> },
  { path: 'signup', element: <SignUp /> },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard/my-enroll-class',
        element: <MyEnrollClass />,
      },
    ],
  },
]);
