import { useState } from "react"
import HeaderContext from "../Contexts/HeaderContext"

export default function ContextWrapper({ children, navs }) {
  // Navigation state (from strapi)
  const [menus] = useState(navs)

  // Responsive navbar state
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <HeaderContext.Provider value={{ menus, openMenu, setOpenMenu }}>
      {children}
    </HeaderContext.Provider>
  )
}
