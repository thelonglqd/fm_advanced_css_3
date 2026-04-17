import { useEffect, useState } from 'react'

const SCREEN_SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
}

export const useMediaScreen = () => {
  const getBreakpoint = (screenSize = SCREEN_SIZES.sm) => {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(`--breakpoint-${screenSize}`)
      .trim()
  }

  const [screen, setScreen] = useState({
    isMobile: true,
    isTablet: false,
    isDesktop: false,
  })

  useEffect(() => {
    const MD = getBreakpoint(SCREEN_SIZES.md) || '48rem'
    const LG = getBreakpoint(SCREEN_SIZES.lg) || '64rem'

    const mqMD = window.matchMedia(`(min-width: ${MD})`)
    const mqLG = window.matchMedia(`(min-width: ${LG})`)

    const updateScreen = () => {
      const isDesktop = mqLG.matches
      const isTablet = mqMD.matches && !mqLG.matches
      const isMobile = !mqMD.matches

      setScreen({ isMobile, isTablet, isDesktop })
    }

    updateScreen()

    mqMD.addEventListener('change', updateScreen)
    mqLG.addEventListener('change', updateScreen)

    return () => {
      mqMD.removeEventListener('change', updateScreen)
      mqLG.removeEventListener('change', updateScreen)
    }
  }, [])

  return screen
}
