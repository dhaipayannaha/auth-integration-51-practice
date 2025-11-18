import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layouts/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import Order from './Components/Order/Order.jsx'
import Profile from './Components/Profile/Profile.jsx'
import DashBoard from './Components/DashBoard/DashBoard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'order',
        element: <PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: 'dashBoard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
