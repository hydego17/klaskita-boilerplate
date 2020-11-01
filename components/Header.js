import Link from "next/link"
import styled from "@emotion/styled"

function Header() {
  return (
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
  )
}

const HeaderStyled = styled.header`
  border-bottom: 1px solid #dfe4ea;

  .container {
    @media (min-width: 1023px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .nav-links {
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
    max-width: 175px;
  }
`

export default Header
