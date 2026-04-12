import { useEffect, useState } from 'react'
import styles from './breakpoints.module.css'

const mobileImages = [
  new URL(
    '../assets/images/mobile-image-hero-1.jpg',
    import.meta.url,
  ).href,
  new URL(
    '../assets/images/mobile-image-hero-2.jpg',
    import.meta.url,
  ).href,
  new URL(
    '../assets/images/mobile-image-hero-3.jpg',
    import.meta.url,
  ).href,
]

const desktopImages = [
  new URL(
    '../assets/images/desktop-image-hero-1.jpg',
    import.meta.url,
  ).href,
  new URL(
    '../assets/images/desktop-image-hero-2.jpg',
    import.meta.url,
  ).href,
  new URL(
    '../assets/images/desktop-image-hero-3.jpg',
    import.meta.url,
  ).href,
]

export const useImages = () => {
  console.log('styles ::: ', styles)
  const getSmBreakpoint = (unit = 'px') => {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue('--breakpoint-sm')
      .trim()
    return unit === 'px'
      ? parseFloat(value) * 16
      : parseFloat(value)
  }

  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth < getSmBreakpoint(),
  )

  useEffect(() => {
    const sm = getSmBreakpoint('rem')
    const mq = window.matchMedia(`(width >= ${sm}rem`)
    const handler = e => setIsMobile(!e.matches)
    mq.addEventListener('change', handler)

    return () => mq.removeEventListener('change', handler)
  }, [])

  return isMobile ? mobileImages : desktopImages
}
