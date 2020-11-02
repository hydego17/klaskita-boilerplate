import styled from "@emotion/styled"
import HamburgerMenu from "react-hamburger-menu"

export default function MobileMenu({ openMenu, setOpenMenu }) {
  return (
    <MobileStyled>
      <HamburgerMenu
        isOpen={openMenu}
        menuClicked={() => setOpenMenu(!openMenu)}
        width={18}
        height={15}
        strokeWidth={2}
        rotate={0}
        color="#2f3542"
        borderRadius={0}
        animationDuration={0.4}
      />
    </MobileStyled>
  )
}

const MobileStyled = styled.div`
  position: fixed;
  top: 1.5rem;
  right: 1rem;
  z-index: 5;
  cursor: pointer;
  @media (min-width: 1023px) {
    display: none;
  }
`