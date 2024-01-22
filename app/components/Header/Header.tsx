'use client'

import { useState } from "react"
import { BurgerMenu } from "./BurgerMenu"
import { MobileNav } from "./MobileNav"

export const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerOpen] = useState(false)
 
  function openMenu () {
    setIsBurgerOpen((s) => {
      return !s
    })
  }

  return (
    <header className="bg-white drop-shadow-md">
      <nav
        className="container flex w-full max-w-5xl justify-between py-6 sm:items-center"
      >
        <a href="/" className="text-xl font-semibold">Marcelo Sosa</a>
        <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen} openMenu={openMenu}/>
        {/* Desktop links */}
        <ul className="hidden text-center text-white sm:flex">
          <a
            href="/docs/resume-en.pdf"
            target="_blank"
            rel="noopener noreferrer"
            ><li className="font-bold text-black">Download CV</li></a
          >
        </ul>
      </nav>
      <MobileNav isBurgerMenuOpen={isBurgerMenuOpen}/>
    </header>
  )
}
