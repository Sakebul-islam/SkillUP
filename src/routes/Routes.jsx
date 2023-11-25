import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    //   children: [
    //     {
    //       path: '/',
    //       element: ,
    //     },
    //     {
    //       path: '/',
    //       element: ,
    //     },
    //   ],
  },
  { path: 'signin', element: <SignIn /> },
  { path: 'signup', element: <SignUp /> },
]);
