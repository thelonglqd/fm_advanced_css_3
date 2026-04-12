import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import hero1 from '../assets/images/mobile-image-hero-1.jpg'
import hero2 from '../assets/images/mobile-image-hero-2.jpg'
import hero3 from '../assets/images/mobile-image-hero-3.jpg'

const IMAGES = [hero1, hero2, hero3]

const TRACKS = [IMAGES.at(-1), ...IMAGES, IMAGES.at(0)]

console.log('TRACKS ::: ', TRACKS)

export const ImagesSlider = () => {
  const [trackIndex, setTrackIndex] = useState(1)
  const [transitionEnabled, setTransitionEnabled] =
    useState(true)

  const isTransitioning = useRef(false)

  const handleNext = () => {
    if (isTransitioning.current) return
    isTransitioning.current = true
    setTrackIndex(i => i + 1)
  }

  const handlePrev = () => {
    if (isTransitioning.current) return
    isTransitioning.current = true
    setTrackIndex(i => i - 1)
  }

  const handleTransitionEnd = () => {
    isTransitioning.current = false
    if (trackIndex === TRACKS.length - 1) {
      setTransitionEnabled(false)
      setTrackIndex(1)
    } else if (trackIndex === 0) {
      setTransitionEnabled(false)
      setTrackIndex(IMAGES.length)
    }
  }

  useEffect(() => {
    if (!transitionEnabled) setTransitionEnabled(true)
  }, [transitionEnabled])

  return (
    <>
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            width: `${TRACKS.length * 100}%`,
            transform: `translateX(-${(trackIndex / TRACKS.length) * 100}%)`,
            transition: transitionEnabled
              ? 'transform 200ms cubic-bezier(0.77, 0, 0.175, 1)'
              : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}>
          {TRACKS.map((track, idx) => (
            <div
              key={`${idx}-${track}`}
              style={{ width: `${100 / TRACKS.length}%` }}>
              <img
                className="w-full h-full object-cover"
                src={track}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="text-white px-4 py-2 bg-amber-500 cursor-pointer">
        PREVIOUS
      </button>
      <button
        onClick={handleNext}
        className="text-white px-4 py-2 bg-purple-500 cursor-pointer">
        NEXT
      </button>
    </>
  )
}
