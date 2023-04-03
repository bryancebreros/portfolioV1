import { createContext, useState } from "react";
const MenuContext = createContext();

const MenuProvider = ({children}) => {
    const [openMenu, setOpenMenu] = useState('open');
    
    

    const handleMenu = () => {
        setOpenMenu('open')
    }
    const data = {openMenu, handleMenu}

    return <MenuContext.Provider value={data}>{children}</MenuContext.Provider>
}

export {MenuProvider}

export default MenuContext