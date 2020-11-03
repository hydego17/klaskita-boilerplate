import { useContext } from "react"
import HeaderContext from "../../Contexts/HeaderContext"

import styled from "@emotion/styled"
import HamburgerMenu from "react-hamburger-menu"

export default function MobileMenu() {
  const { openMenu, setOpenMenu } = useContext(HeaderContext)

  return (
    <MobileStyled>
      <HamburgerMenu
        isOpen={openMenu}
        menuClicked={() => setOpenMenu(!openMenu)}
        width={18}
        height={15}
        strokeWidth={2}
        rotate={180}
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
  z-index: 3;
  cursor: pointer;
  @media (min-width: 1023px) {
    display: none;
  }
`
