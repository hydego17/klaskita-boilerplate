import styled from "@emotion/styled"
import Link from "next/link"
import { useRouter } from "next/router"

export default function ResponsiveMenu({ openMenu, setOpenMenu, navs }) {
  const router = useRouter()
  return (
    <ResponsiveNav openMenu={openMenu} setOpenMenu={openMenu}>
      {navs.map((nav) => (
        <Link key={nav.id} href={nav.slug}>
          <a
            onClick={() => setOpenMenu(!openMenu)}
            className={router.pathname === nav.slug ? "active" : ""}
          >
            {nav.title}
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
