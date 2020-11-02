import { useState } from "react"
import Link from "next/link"

import styled from "@emotion/styled"

import Navigation from "./Navigation"
import MobileMenu from "./MobileMenu"
import ResponsiveMenu from "./ResponsiveMenu"

export default function Header({ navs }) {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <HeaderStyled>
        <div className="container">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="images/logo.svg" alt="klaskita" />
              </a>
            </Link>
          </div>

          <Navigation navs={navs} />
        </div>
      </HeaderStyled>

      {/* Burger Menu */}
      <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />

      {/* Responsive Menu */}
      <ResponsiveMenu
        navs={navs}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
    </>
  )
}

const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  z-index: 2;
  background: white;
  border-bottom: 1px solid #dfe4ea;

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    display: inline-block;
    width: 175px;
  }
`
