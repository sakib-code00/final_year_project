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
import Login from './Pages/Login.jsx';
import SignUp from './Pages/SignUp.jsx';
import AdminHeader from './Components/SuperAdmin/Adminpanal/AdminHeader.jsx';
import AdminNavBar from './Components/SuperAdmin/Adminpanal/AdminNavBar.jsx';
import Dashboard from './Components/SuperAdmin/Adminpanal/Dashboard.jsx';
import GeneralUsers from './Components/SuperAdmin/GeneralUsers.jsx';
import GeneralSettings from './Components/SuperAdmin/GeneralSettings.jsx';
import AddContent from './Components/SuperAdmin/AddContent.jsx';
import Contents from './Components/SuperAdmin/Contents.jsx';
import ContentSubmission from './Components/SuperAdmin/ContentSubmission.jsx';
import UploadContent from './Components/SuperAdmin/UploadContent.jsx';
import SearchResult from './Pages/SearchResult.jsx';
import RequireAdmin from './utils/RequireAdmin.jsx';
import RequireAuth from './utils/RequireAuth.jsx';
import RequireGuest from './utils/RequireGuest.jsx';
import { SettingsProvider } from './contexts/SettingsContext.jsx';
import ForgotPassword from './Pages/ForgotPassword.jsx';
import ResetPassword from './Pages/ResetPassword.jsx';

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
      {
        path: "/searchresult",
        element: <SearchResult></SearchResult>,
      },
      {
        path: "/login",
        element: (
          <RequireGuest>
            <Login />
          </RequireGuest>
        ),
      },
      {
        path: "/signup",
        element: (
          <RequireGuest>
            <SignUp />
          </RequireGuest>
        ),
      },
      { path: '/reset-password', element: <ForgotPassword /> },
      { path: '/reset-password/:token', element: <ResetPassword /> },
    ],

  },

  {
    path: "/user",
    element: (
      <RequireAuth>
        <User />
      </RequireAuth>
    ),
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
  },
  {
    path: "/dashboard",
    element: (
      <RequireAdmin>
        <Dashboard />
      </RequireAdmin>
    ),
    children: [
      {
        index: true,
        element: <GeneralUsers></GeneralUsers>,
      },
      {
        path: "generalusers",
        element: <GeneralUsers></GeneralUsers>,
      },
      {
        path: "generalsettings",
        element: <GeneralSettings></GeneralSettings>,
      },
      {
        path: "contents",
        element: <Contents></Contents>,
      },
    ],
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SettingsProvider>
      <RouterProvider router={router} />
    </SettingsProvider>
  </StrictMode>,
)
