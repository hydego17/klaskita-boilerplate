import React, { useState } from "react"
import Link from "next/link"
import styled from "@emotion/styled"
import HamburgerMenu from "react-hamburger-menu"

function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }

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

          <div className="nav-links">
            <Link href="/about">
              <a>about</a>
            </Link>
            <Link href="/program">
              <a>program</a>
            </Link>
            <Link href="/shop">
              <a>shop</a>
            </Link>
            <Link href="/login">
              <a>sign in</a>
            </Link>
          </div>
        </div>
      </HeaderStyled>

      <MobileMenu>
        <HamburgerMenu
          isOpen={openMenu}
          menuClicked={handleMenu}
          width={20}
          height={14}
          strokeWidth={2}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.3}
        />
      </MobileMenu>

      {/* Responsive Menu */}
      <ResponsiveMenu openMenu={openMenu}>
        <Link href="/about">
          <a>about</a>
        </Link>
        <Link href="/program">
          <a>program</a>
        </Link>
        <Link href="/shop">
          <a>shop</a>
        </Link>
        <Link href="/login">
          <a>sign in</a>
        </Link>
      </ResponsiveMenu>
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
    position: relative;
    z-index: 3;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-links {
    display: flex;

    @media (max-width: 1023px) {
      display: none;
    }

    a {
      display: block;
      padding: 1rem 0;

      @media (min-width: 1023px) {
        display: initial;
        padding: 0.75rem;
      }
    }
  }

  .logo {
    display: inline-block;
    width: 175px;
  }
`

const MobileMenu = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  z-index: 5;
  cursor: pointer;
  @media (min-width: 1023px) {
    display: none;
  }
`

const ResponsiveMenu = styled.div`
  display: none;

  @media (max-width: 1023px) {
    display: block;
    opacity: ${({ openMenu }) => (openMenu ? 1 : 0)};
    background: #fff;
    top: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    transition: opacity 0.5s ease;
    text-align: right;
    padding: 4rem 1rem;

    a {
      display: block;
      padding: 1rem 0;
    }
  }
`

export default Header
