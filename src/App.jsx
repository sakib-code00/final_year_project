import NavBar from "./Components/NavBar"
import Hero from "./Components/Hero"
import Gallery from "./Components/Gallery"
import Footer from "./Components/Footer"
import Welcome from "./Components/Welcome"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import BecomeContributor from "./Pages/BecomeContributor"
import Overlay from "./Pages/Overlay"
import ContactUs from "./Pages/ContactUs"
import PricingPlans from "./Pages/PricingPlans"
import About from "./Pages/About"
import SearchResult from "./Pages/SearchResult"
import User from "./Components/Users/User/User"


function App() {

  return (
    <div className="flex flex-col items-center">
      <NavBar></NavBar> 
      <Hero></Hero>
      <Gallery></Gallery>
      <Welcome></Welcome>
      <Login></Login>
      <SignUp></SignUp>
      <BecomeContributor></BecomeContributor>
      <Overlay></Overlay>
      <ContactUs></ContactUs>
      <PricingPlans></PricingPlans>
      <About></About>
      <SearchResult></SearchResult>
      <User></User>
      <Footer></Footer>

    </div>
  )
}

export default App
