import React from "react"
import styled from "@emotion/styled"
import Link from "next/link"

export default function Navigation() {
  return (
    <NavStyled>
      <Link href="/workshop">
        <a>Workshop</a>
      </Link>
      <Link href="/investasi">
        <a>Investasi</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>

      <Link href="/login">
        <a>Sign In</a>
      </Link>
    </NavStyled>
  )
}

const NavStyled = styled.div`
  display: flex;
  align-items: center;

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
`
