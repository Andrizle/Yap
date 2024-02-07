import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import LandingPage from '../components/LandingPage';
import CreateBusiness from '../components/CreateBusiness/CreateBusiness';
import UpdateBusiness from '../components/UpdateBusiness/UpdateBusiness';
import MyBusinesses from '../components/Businesses/MyBusinesses';
import SingleBusiness from '../components/Businesses/SingleBusiness';
import MyReviews from '../components/MyReviews';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "/review/current",
        element: <MyReviews />
      },
      {
        path: "business",
        children: [
          {
            path: "new",
            element: <CreateBusiness />
          },
          {
            path: "current",
            element: <MyBusinesses />
          },
          {
            path: ":businessId",
            children: [
              {
                path: "edit",
                element: <UpdateBusiness />
              },
              {
                index: true,
                element: <SingleBusiness />
              }
            ]
          }
        ]
      }
    ],
  },
]);
