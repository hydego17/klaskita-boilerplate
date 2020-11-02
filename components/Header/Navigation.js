import styled from "@emotion/styled"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Navigation({ navs }) {
  const router = useRouter()
  return (
    <NavStyled>
      {navs.map((nav) => (
        <Link key={nav.id} href={nav.slug}>
          <a className={router.pathname === nav.slug ? "active" : ""}>
            {nav.title}
          </a>
        </Link>
      ))}

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
    padding: 0.75rem;

    &.active {
      font-weight: bolder;
    }
  }
`
