import './App.css'
import { AboutSection } from './components/AboutImage'
import HeroSlider from './components/HeroSlider'
import { NavBar } from './components/Navbar.jsx'
import { ShopNowButton } from './components/ShopNowButton'
import { useMediaScreen } from './hooks/useMediaScreen'

function App() {
  const { isDesktop } = useMediaScreen()
  return (
    <div className="lg:grid mx-auto max-w-7xl lg:grid-cols-7">
      <NavBar />
      <HeroSlider />
      {!isDesktop && <ShopNowButton />}
      <AboutSection />
    </div>
  )
}

export default App
