import FeatureSection from "./components/FeatureSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"

function App() {
  return <div className="flex flex-col justify-center items-center">
     <Navbar />
     <HeroSection />
     <FeatureSection/>
  </div>
    
}

export default App
