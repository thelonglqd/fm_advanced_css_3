import { useImages } from '../hooks/useImages'
import iconLeft from '../assets/images/icon-angle-left.svg'
import iconRight from '../assets/images/icon-angle-right.svg'
import { useEffect, useRef, useState } from 'react'

import hero1 from '../assets/images/mobile-image-hero-1.jpg'
import hero2 from '../assets/images/mobile-image-hero-2.jpg'
import hero3 from '../assets/images/mobile-image-hero-3.jpg'

const SLIDES = [hero1, hero2, hero3]

const TRACK = [SLIDES.at(-1), ...SLIDES, SLIDES.at(0)]
export const ImagesSlider = ({ current, prev, next }) => {
  const [trackIndex, setTrackIndex] = useState(1)
  const [transitionEnabled, setTransitionEnabled] =
    useState(true)
  const isTransitioning = useRef(false)

  const handleNext = () => {
    if (isTransitioning.current) return
    isTransitioning.current = true
    setTransitionEnabled(true)
    // if (!transitionEnabled) return
    setTrackIndex(i => i + 1)
  }

  const handlePrev = () => {
    if (isTransitioning.current) return

    isTransitioning.current = true
    setTransitionEnabled(true)
    setTrackIndex(i => i - 1)
  }

  const handleTransitionEnd = () => {
    isTransitioning.current = false

    if (trackIndex === TRACK.length - 1) {
      setTransitionEnabled(false)
      setTrackIndex(1)
    } else if (trackIndex === 0) {
      setTransitionEnabled(false)
      setTrackIndex(SLIDES.length)
    }
  }

  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true)
        })
      })
    }
  }, [transitionEnabled])

  return (
    <>
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            width: `${TRACK.length * 100}%`,
            transform: `translateX(-${(trackIndex / TRACK.length) * 100}%)`,
            transition: transitionEnabled
              ? 'transform 200ms cubic-bezier(0.77, 0, 0.175, 1)'
              : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}>
          {TRACK.map((src, i) => {
            return (
              <div
                key={i}
                style={{ width: `${100 / TRACK.length}%` }}>
                <img
                  src={src}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={handlePrev}>PREVIOUS</button>
        <button onClick={handleNext}>NEXT</button>
      </div>
    </>
  )
}
