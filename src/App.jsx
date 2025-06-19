import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import { Outlet } from "react-router-dom"
import { useSettings } from './contexts/SettingsContext';
import { useEffect } from 'react';

function App() {
  const { siteTitle } = useSettings();

  useEffect(() => {
    if (siteTitle) {
      document.title = siteTitle;
    }
  }, [siteTitle]);

  return (
    <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', overflow: 'scroll' }} className="flex flex-col items-center bg-gray-50 w-full h-screen overflow-scroll">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
