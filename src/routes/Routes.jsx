import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
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
]);
