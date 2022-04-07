import React, { useRef, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const hamburger = useRef(null)
    const themes = useRef(null)

    const [navHeight,setNavHeight] = useState(0)
    const [theme, setTheme] = useState(false)
    const [active,setActive] = useState(true)
    
    const navContent = ['home', 'about', 'projects', 'contact'];

    const toggleClick = () => {
        hamburger.current.classList.toggle("show-nav-content")
        if (hamburger.current.classList.contains("show-nav-content")) {
            hamburger.current.style.height = navHeight + "px";
            console.log(navHeight)
        } else {
            hamburger.current.style.height = 0 + "px";
        }

        setActive(false)
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 786) {
            hamburger.current.style.height = 0;
        }
    })

    // change page theme

    const pageTheme = (themeColor) => {
        if (themeColor === "dark-theme") {
            document.body.classList.add("dark-theme")
            setTheme(true)    
        }
        if (themeColor !== "dark-theme"){
            document.body.classList.remove("dark-theme")
            setTheme(false)        
        }
    }

    useEffect(() => {
        let tempHeight = hamburger.current.getBoundingClientRect().height;
        hamburger.current.style.height = 0;
        setNavHeight(tempHeight)
    }, [])

    return (
        <header className='main-header'>
            <nav className='main-nav'>
                <div className="logo">
                    <a href="#home">Moshood => Asterisk</a>
                </div>
                <div className="navigation">
                    <div className="nav-mobile">
                        <div className="dark-bright" ref={themes}>
                            <div className={`icon dark ${!theme ? 'show': 'hide'}`} onClick={() => pageTheme("dark-theme")}>
                                <FontAwesomeIcon icon={faMoon} />
                            </div>
                            <div className={`icon bright ${theme ? 'show' : 'hide'}`} onClick={() => pageTheme("light-theme")}>
                                <FontAwesomeIcon icon={faSun} />
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faBars} className='hamburger icon' onClick={toggleClick} />
                    </div>
                </div>
                <div className="nav-content" ref={hamburger}>
                    <ul>
                        {
                            navContent.map((nav, index) => {
                                return <NavLink key={index} value={nav} func={toggleClick} active={active} />
                            })
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}

const NavLink = ({ value, func,active }) => {
    return <li><a href={`#${value}`} onClick={func} className={active ? "nav-color" : ""}>{value}</a></li>
}

export default Navbar
