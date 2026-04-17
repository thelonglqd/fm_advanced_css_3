import './App.css'
import { AboutSection } from './components/AboutImage'
import HeroSlider from './components/HeroSlider'
import { ShopNowButton } from './components/ShopNowButton'
import { useMediaScreen } from './hooks/useMediaScreen'

function App() {
  const { isDesktop } = useMediaScreen()
  return (
    <div className="mx-auto max-w-7xl">
      <HeroSlider />
      {!isDesktop && <ShopNowButton />}
      <AboutSection />
    </div>
  )
}

export default App
