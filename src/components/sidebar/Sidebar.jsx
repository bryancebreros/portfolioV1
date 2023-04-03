import { useState, useContext } from "react"
import LanguageContext from "../../context/LanguageContext"
import MenuContext from "../../context/MenuContext"
function Sidebar() {
    const {texts} = useContext(LanguageContext)
    const {openMenu} = useContext(MenuContext)

  return (
    
    <nav className={openMenu === 'open' ? 'openSidebar' : 'closeSidebar'}>
    <ul className="navlist">
      <li>
        <a className="menu-item menu-logo" href="#">
          BS
        </a>
      </li>

      <li>
        <a className="menu-item" href="#about">
          {texts.nav1}
        </a>
      </li>

      <li>
        <a className="menu-item" href="#projects">
          {texts.nav2}
        </a>
      </li>
      <li>
        <a className="menu-item" href="#contact">
          {texts.nav3}
        </a>
      </li>
    </ul>
  </nav>
    
  )
}

export default Sidebar