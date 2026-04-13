import { useEffect, useState } from 'react'

const mobileImages = [
  {
    imgSrc: new URL(
      '../assets/images/mobile-image-hero-1.jpg',
      import.meta.url,
    ).href,
    title: 'Discover innovative ways to decorate',
    content:
      'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
  },
  {
    imgSrc: new URL(
      '../assets/images/mobile-image-hero-2.jpg',
      import.meta.url,
    ).href,
    title: 'We are available all across the globe',
    content:
      "With stores all over the world, it's easy for you to find furniture for your homejor place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    imgSrc: new URL(
      '../assets/images/mobile-image-hero-3.jpg',
      import.meta.url,
    ).href,
    title: 'Manufactured with the best materials',
    content:
      'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
  },
]

const desktopImages = [
  {
    imgSrc: new URL(
      '../assets/images/desktop-image-hero-1.jpg',
      import.meta.url,
    ).href,
    title: 'Discover innovative ways to decorate',
    content:
      'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
  },
  {
    imgSrc: new URL(
      '../assets/images/desktop-image-hero-2.jpg',
      import.meta.url,
    ).href,
    title: 'We are available all across the globe',
    content:
      "With stores all over the world, it's easy for you to find furniture for your homejor place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    imgSrc: new URL(
      '../assets/images/desktop-image-hero-3.jpg',
      import.meta.url,
    ).href,
    title: 'Manufactured with the best materials',
    content:
      'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
  },
]

export const useHeroImages = () => {
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
