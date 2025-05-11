import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Pages/About.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import Home from './Pages/Home.jsx';
import PricingPlans from './Pages/PricingPlans.jsx';
import User from './Components/Users/User/User.jsx';
import Profile from './Components/Users/MainContent/Profile.jsx';
import Wishlist from './Components/Users/MainContent/Wishlist/Wishlist.jsx';
import Billing from './Components/Users/MainContent/Billing.jsx';
import Profilesetting from './Components/Users/MainContent/Profilesetting.jsx';
import DownloadHistory from './Components/Users/MainContent/Download/DownloadHistory.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/pricingplans",
        element: <PricingPlans></PricingPlans>
      },
    ],

  },
  {
    path: "/user",
    element: <User></User>,
    children: [
      {
        index: true,
        element: <Profile></Profile>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "billing",
        element: <Billing></Billing>,
      },
      {
        path: "settings",
        element: <Profilesetting></Profilesetting>,
      },
      {
        path: "downloads",
        element: <DownloadHistory></DownloadHistory>,
      },
    ], 
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
