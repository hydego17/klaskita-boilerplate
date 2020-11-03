import { useContext } from "react"
import HeaderContext from "../../Contexts/HeaderContext"

import Link from "next/link"
import { useRouter } from "next/router"
import styled from "@emotion/styled"

export default function ResponsiveMenu() {
  const { menus, openMenu, setOpenMenu } = useContext(HeaderContext)
  const router = useRouter()

  return (
    <ResponsiveNav openMenu={openMenu} setOpenMenu={openMenu}>
      {menus.map((menu) => (
        <Link key={menu.id} href={menu.slug}>
          <a
            onClick={() => setOpenMenu(!openMenu)}
            className={router.pathname === menu.slug ? "active" : ""}
          >
            {menu.title}
          </a>
        </Link>
      ))}

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
    text-align: right;
    background: #fff;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    position: fixed;
    z-index: -99;
    opacity: 0;
    transition: opacity 0.5s ease;
    padding: 5rem 3rem;

    ${({ openMenu }) =>
      openMenu &&
      `
    opacity: 0.95;
    z-index:2;
    
  `}

    a {
      font-size: 1.3rem;
      font-weight: bolder;
      display: ${({ openMenu }) => (openMenu ? "block" : "none")};
      padding: 1rem 0;
      transition: transform 0.5s ease;

      &.active {
        font-weight: bolder;
        text-decoration: underline;
      }

      &:hover {
        transform: translateX(-2%);
        text-decoration: underline;
      }
    }
  }
`
