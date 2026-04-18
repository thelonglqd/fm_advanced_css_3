import { useMediaScreen } from '../../hooks/useMediaScreen'
import hamburgerIcon from '../../assets/images/icon-hamburger.svg'
import logoIcon from '../../assets/images/logo.svg'
import closeIcon from '../../assets/images/icon-close.svg'

import { useState } from 'react'

const NavBarMobile = () => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <>
      <div className="fixed z-100 left-0 right-0 p-10 bg-transparent flex justify-between items-center">
        <button
          aria-label="open nav"
          onClick={() => setNavOpen(true)}
          type="button"
          className="cursor-pointer">
          <img
            src={hamburgerIcon}
            alt="hamburger icon"
          />
        </button>
        <div>
          <img
            src={logoIcon}
            alt="room logo"
          />
        </div>
        <div></div>
      </div>
      <nav
        style={
          navOpen
            ? { opacity: 1, zIndex: 200 }
            : { opacity: 0, zIndex: 1 }
        }
        className="bg-white fixed w-full p-10 flex justify-between items-center transition-opacity duration-300 ease-in-out">
        <button
          aria-label="close nav"
          type="button"
          onClick={() => setNavOpen(false)}
          className="basis-4 cursor-pointer">
          <img
            src={closeIcon}
            alt="close button"
          />
        </button>
        <ul className="text-preset-3 flex justify-between basis-[70%]">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">shop</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

const NavBarDesktop = () => {
  return (
    <nav className="flex fixed z-200 p-10 col-span-4 items-center gap-10">
      <div>
        <img
          src={logoIcon}
          alt="room logo"
        />
      </div>
      <ul className="text-preset-3 flex justify-between gap-4 text-white basis-[70%]">
        <li>
          <a
            className="nav-link"
            href="#">
            home
          </a>
        </li>
        <li>
          <a
            className="nav-link"
            href="#">
            shop
          </a>
        </li>
        <li>
          <a
            className="nav-link"
            href="#">
            about
          </a>
        </li>
        <li>
          <a
            className="nav-link"
            href="#">
            contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export const NavBar = () => {
  const { isDesktop } = useMediaScreen()

  return isDesktop ? <NavBarDesktop /> : <NavBarMobile />
}
