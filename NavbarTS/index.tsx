import { useState } from 'react';
import Menu from './menu.png'
import './navbar.css';

function App() {
    const [open,setOpen] = useState(false);

    // Change desired links here
    const navLinks = ['News','Entertainment','Sports','Politics'];

    // Handles toggling navDropDown
    const toggleMenu = (e:React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        const targetEl = e.target as Element;
        const target = targetEl.classList[0];
      
        (!open && (target === 'menu' || target === 'menuImg'))?
            setOpen(true) : setOpen(false);
    }

    return (
        <div className="navbar">

            {/* Background when navDropDown is open */}
            <div className={`navBackground ${open?"expand":""}`} onClick={e=>toggleMenu(e)}>

                {/* Button to handle toggling dropown menu */}
                <div className="menu" onClick={e=>toggleMenu(e)}>
                    <img className="menuImg" src={Menu} alt="menu"></img>
                </div>

                {/* Navigation links in dropdown menu on small screens */}
                <div className={`navDropDown ${open?"showNav":"hideNav"}`}>
                    {navLinks.map((link,index)=>{
                        return (
                            <div key={index} className="navLink">{link}</div>
                        )
                    })}
                </div>

            </div>
        </div>
    );
}

export default App;
