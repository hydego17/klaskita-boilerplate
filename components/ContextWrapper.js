import { useState } from "react"
import HeaderContext from "../Contexts/HeaderContext"

export default function ContextWrapper({ children, navs }) {
  // navigation state (from strapi)
  const [menus] = useState(navs)

  // State for responsive nav toggle
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <HeaderContext.Provider value={{ menus, openMenu, setOpenMenu }}>
      {children}
    </HeaderContext.Provider>
  )
}
