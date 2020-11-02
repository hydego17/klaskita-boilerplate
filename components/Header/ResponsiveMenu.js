import styled from "@emotion/styled"
import Link from "next/link"

export default function ResponsiveMenu({ openMenu }) {
  return (
    <ResponsiveNav openMenu={openMenu}>
      <Link href="/investasi">
        <a>Investasi</a>
      </Link>
      <Link href="/workshop">
        <a>Workshop</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/login">
        <a>Sign In</a>
      </Link>
    </ResponsiveNav>
  )
}

const ResponsiveNav = styled.div`
  display: none;

  @media (max-width: 1023px) {
    display: block;
    opacity: 0;
    background: #fff;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    position: fixed;
    z-index: 3;
    transition: opacity 0.5s ease;
    text-align: right;
    padding: 4rem 1rem;
    ${({ openMenu }) =>
      openMenu &&
      `
    opacity: 1;
    
  `}

    a {
      display: ${({ openMenu }) => (openMenu ? "block" : "none")};
      padding: 1rem 0;
    }
  }
`
