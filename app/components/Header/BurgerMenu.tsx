interface CustomProps {
  isBurgerMenuOpen: boolean,
  openMenu: () => void
}

export const BurgerMenu: React.FC<CustomProps> = ({ isBurgerMenuOpen, openMenu }) => {
  return (
   <>
    <button
      onClick={openMenu}
      className={`hamburger ${isBurgerMenuOpen ? 'open': ''} relative z-20 block self-center justify-self-end focus:outline-none sm:hidden `}
      >
        <span className='hamburger-top bg-white'></span>
        <span className='hamburger-middle bg-white'></span>
        <span className='hamburger-bottom bg-white'></span>
    </button>
   </>
  )
}
