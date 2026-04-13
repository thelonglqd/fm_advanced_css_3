import { useEffect, useRef, useState } from 'react'

import arrowLeft from '../assets/images/icon-angle-left.svg'
import arrowRight from '../assets/images/icon-angle-right.svg'
import { useHeroImages } from '../hooks/useHeroImages'

export const ImagesSlider = () => {
  const [imgTrackIdx, setImgTrackIdx] = useState(1)
  const [imgTransitionEnable, setImgTransitionEnable] =
    useState(true)

  const isImgTransitioning = useRef(false)
  const sliderRef = useRef(null)
  const IMAGES = useHeroImages()

  const imagesTracks = [
    IMAGES.at(-1),
    ...IMAGES,
    IMAGES.at(0),
  ]

  const handleNextImage = () => {
    if (isImgTransitioning.current) return
    isImgTransitioning.current = true
    setImgTrackIdx(i => i + 1)
  }

  const handlePrevImage = () => {
    if (isImgTransitioning.current) return
    isImgTransitioning.current = true
    setImgTrackIdx(i => i - 1)
  }

  const handleImageTransitionEnd = () => {
    isImgTransitioning.current = false
    if (imgTrackIdx === imagesTracks.length - 1) {
      setImgTransitionEnable(false)
      setImgTrackIdx(1)
    } else if (imgTrackIdx === 0) {
      setImgTransitionEnable(false)
      setImgTrackIdx(IMAGES.length - 1)
    }
  }

  useEffect(() => {
    if (!imgTransitionEnable) {
      void sliderRef.current.offsetWidth
      setImgTransitionEnable(true)
    }
  }, [imgTransitionEnable])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          style={{
            width: `${imagesTracks.length * 100}%`,
            transform: `translateX(-${(imgTrackIdx / imagesTracks.length) * 100}%)`,
            transition: imgTransitionEnable
              ? `transform 0.3s ease-in-out`
              : 'none',
          }}
          onTransitionEnd={handleImageTransitionEnd}
          className="flex">
          {imagesTracks.map((track, idx) => (
            <div
              className="w-full"
              key={`${idx}-${track.imgSrc}`}>
              <img
                className="w-full"
                src={track.imgSrc}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <button
          onClick={handlePrevImage}
          className="bg-black py-6 px-8 cursor-pointer"
          type="button">
          <i>
            <img
              src={arrowLeft}
              alt=""
            />
          </i>
        </button>
        <button
          onClick={handleNextImage}
          className="bg-black py-6 px-8 cursor-pointer"
          type="button">
          <i>
            <img
              src={arrowRight}
              alt=""
            />
          </i>
        </button>
      </div>
    </div>
  )
}
