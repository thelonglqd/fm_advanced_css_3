import { useState } from 'react'
import './App.css'
import { ImagesSlider } from './components/ImagesSlider'
import { useImages } from './hooks/useImages'

function App() {
  const [current, setCurrent] = useState(0)
  const images = useImages()

  const next = () =>
    setCurrent(i => (i + 1) % images.length)
  const prev = () =>
    setCurrent(i => (i - 1 + images.length) % images.length)

  return (
    <div>
      <ImagesSlider
        current={current}
        prev={prev}
        next={next}
      />
    </div>
  )
}

export default App
