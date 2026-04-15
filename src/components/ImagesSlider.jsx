import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

import arrowLeft from '../assets/images/icon-angle-left.svg'
import arrowRight from '../assets/images/icon-angle-right.svg'
import { useHeroImages } from '../hooks/useHeroImages'

export const ImagesSlider = () => {
  const [imgTrackIdx, setImgTrackIdx] = useState(1)
  const [imgTransitionEnable, setImgTransitionEnable] =
    useState(true)
  const [sliderBtnsWidth, setSliderBtnsWidth] = useState(0)

  const isImgTransitioning = useRef(false)
  const sliderRef = useRef(null)
  const sliderBtnsRef = useRef(null)
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
      setImgTrackIdx(IMAGES.length)
    }
  }

  useEffect(() => {
    if (!imgTransitionEnable) {
      // void sliderRef.current.offsetWidth // force reflow
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setImgTransitionEnable(true)
        })
      })
    }
  }, [imgTransitionEnable])

  useLayoutEffect(() => {
    if (sliderBtnsRef.current) {
      const rect =
        sliderBtnsRef.current.getBoundingClientRect()
      setSliderBtnsWidth(rect.width)
    }
  }, [])

  return (
    <div className="lg:flex">
      <div className="relative lg:w-full">
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
        <div
          ref={sliderBtnsRef}
          className={`absolute bottom-0 right-0 lg:bottom-0 lg:left-full lg:right-auto lg:flex z-10`}>
          <button
            onClick={handlePrevImage}
            className="bg-black py-6 px-8 cursor-pointer"
            type="button">
            <i className="flex">
              <img
                className="w-3.5 h-5 flex-none"
                src={arrowLeft}
                alt=""
              />
            </i>
          </button>
          <button
            onClick={handleNextImage}
            className="bg-black py-6 px-8 cursor-pointer"
            type="button">
            <i className="flex">
              <img
                className="w-3.5 h-5 flex-none"
                src={arrowRight}
                alt=""
              />
            </i>
          </button>
        </div>
      </div>
      <div className="overflow-hidden lg:max-w-2/5 lg:relative">
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
              className="w-full px-8 py-12"
              key={`${idx}-${track.title}`}>
              <h2 className="text-preset-2">
                {track.title}
              </h2>
              <p className="text-gray-500 text-preset-3 mt-4">
                {track.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
