import { useState, useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
import { motion } from "framer-motion"

function Header() {
  const {texts, handleLanguage} = useContext(LanguageContext);
  const [navbar, setNavbar] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  
  const toggleSwitch = () => {
    handleLanguage()
    setIsOn(!isOn);
  }
  const handleMenuClick = () => {
    setOpenMenu(!openMenu)
  }
  const changeBg = () => {
    window.scrollY > 0 ? setNavbar(true) : setNavbar(false);
    console.log(navbar);
  };
  window.addEventListener('scroll', changeBg);
  return (
    <header className={navbar ? 'header-section sticky' : 'header-section'}>
      <nav className="nav-container">
      <i class="ri-menu-line menu-icon" onClick={handleMenuClick}></i>
        <h1 className='main-logo'>
          <a href="#" >BS</a>
        </h1>
        <div className={`${openMenu ? 'nav-items menu-open': 'nav-items'}`}>
          <a href="#about" className="underline" onClick={() => setOpenMenu(false)}>
            {texts.nav1}
          </a>
          <a href="#projects" className="underline" onClick={() => setOpenMenu(false)}>
            {texts.nav2}
          </a>
          <a href="#contact" className="underline" onClick={() => setOpenMenu(false)}>
            {texts.nav3}
          </a>
        </div>
        <div className='lever'>
          <span>{texts.lang}</span>
          <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
            
            <motion.div className="handle" layout transition={spring} />
          </div>
        </div>
        
      </nav>
    </header>
  );
}

export default Header;
const spring = {
  type: "spring",
  stiffness: 300,
  damping: 40
};