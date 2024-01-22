interface CustomProps { 
  isBurgerMenuOpen: boolean
}

export const MobileNav: React.FC<CustomProps> = ({ isBurgerMenuOpen }) => {
  return (
    <nav
      className={`absolute z-10 w-full bg-white shadow-md sm:hidden ${isBurgerMenuOpen ? '': 'hidden'}`}
    >
      <ul className="text-center font-bold text-black">
        <a
          href="/docs/resume-en.pdf"
          target="_blank"
          rel="noopener noreferrer"
          ><li className="pt-1 pb-3">Download CV</li></a
        >
      </ul>
    </nav>
  )
}
