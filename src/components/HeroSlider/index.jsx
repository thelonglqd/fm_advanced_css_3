import { useEffect, useMemo, useRef, useState } from 'react'
import { ImagesSlider } from './ImagesSlider'
import { useHeroImages } from '../../hooks/useHeroImages'
import { TextSlider } from './TextSlider'

export default function HeroSlider() {
  const [trackIdx, setTrackIdx] = useState(1)
  const [transitionEnable, setTransitionEnable] =
    useState(true)

  const isImgTransitioning = useRef(false)
  const IMAGES = useHeroImages()

  const tracks = useMemo(
    () => [IMAGES.at(-1), ...IMAGES, IMAGES.at(0)],
    [IMAGES],
  )

  const handleNext = () => {
    if (isImgTransitioning.current) return
    isImgTransitioning.current = true
    setTrackIdx(i => i + 1)
  }

  const handlePrev = () => {
    if (isImgTransitioning.current) return
    isImgTransitioning.current = true
    setTrackIdx(i => i - 1)
  }

  const handleTransitionEnd = () => {
    isImgTransitioning.current = false
    if (trackIdx === tracks.length - 1) {
      setTransitionEnable(false)
      setTrackIdx(1)
    } else if (trackIdx === 0) {
      setTransitionEnable(false)
      setTrackIdx(IMAGES.length)
    }
  }

  useEffect(() => {
    if (!transitionEnable) {
      // void sliderRef.current.offsetWidth // force reflow
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnable(true)
        })
      })
    }
  }, [transitionEnable])

  return (
    <>
      <ImagesSlider
        trackIdx={trackIdx}
        tracks={tracks}
        transitionEnable={transitionEnable}
        onNext={handleNext}
        onPrev={handlePrev}
        onTransitionEnd={handleTransitionEnd}
      />
      <TextSlider
        trackIdx={trackIdx}
        tracks={tracks}
        transitionEnable={transitionEnable}
      />
    </>
  )
}
