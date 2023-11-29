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
import StudentRoute from './StudentRoute';
import TeacherRoute from './TeacherRoute';
import AdminRoute from './AdminRoute';
import Users from '../pages/Dashboard/Admin/Users';
import AllClassesByAdmin from '../pages/Dashboard/Admin/AllClassesByAdmin';
import TeacherRequest from '../pages/Dashboard/Admin/TeacherRequest';
import Profile from '../pages/Dashboard/Profile/Profile';
import AddClass from '../pages/Dashboard/Teacher/AddClass';
import MyClass from '../pages/Dashboard/Teacher/MyClass';
import Feedback from '../pages/Dashboard/Admin/Feedback';
import ClassDetails from '../pages/Dashboard/Teacher/ClassDetails';
import StudentClassDetails from '../pages/ClassDetail/ClassDetail';
import UpdateClass from '../pages/Dashboard/Teacher/UpdateClass';
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
            <StudentRoute>
              <AllClasses />
            </StudentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/class/:id',
        element: (
          <PrivateRoute>
            <StudentRoute>
              <StudentClassDetails />
            </StudentRoute>
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
        path: '/dashboard/profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      // Student Routes
      {
        path: '/dashboard/my-enroll-class',
        element: (
          <PrivateRoute>
            <StudentRoute>
              <MyEnrollClass />
            </StudentRoute>
          </PrivateRoute>
        ),
      },
      // Teacher Routes
      {
        path: '/dashboard/add-class',
        element: (
          <PrivateRoute>
            <TeacherRoute>
              <AddClass />
            </TeacherRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/my-class',
        element: (
          <PrivateRoute>
            <TeacherRoute>
              <MyClass />
            </TeacherRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/my-class/:id',
        element: (
          <PrivateRoute>
            <TeacherRoute>
              <ClassDetails />
            </TeacherRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/edit/:id',
        element: (
          <PrivateRoute>
            <TeacherRoute>
              <UpdateClass />
            </TeacherRoute>
          </PrivateRoute>
        ),
      },
      // Admin Routes
      {
        path: '/dashboard/users',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Users />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/teacher-request',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <TeacherRequest />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/all-classes',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllClassesByAdmin />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/class/:id',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Feedback />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
