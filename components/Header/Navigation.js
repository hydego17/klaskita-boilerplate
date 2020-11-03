import { useContext } from "react"
import HeaderContext from "../../Contexts/HeaderContext"
import Link from "next/link"
import { useRouter } from "next/router"
import styled from "@emotion/styled"

export default function Navigation() {
  const { menus } = useContext(HeaderContext)

  const router = useRouter()
  return (
    <NavStyled>
      {menus.map((menu) => (
        <Link key={menu.id} href={menu.slug}>
          <a className={router.pathname === menu.slug ? "active" : ""}>
            {menu.title}
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
