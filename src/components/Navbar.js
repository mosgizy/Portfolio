import React, { useRef, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useGlobalContext } from '../context'

const Navbar = () => {
    const hamburger = useRef(null)
    const themes = useRef(null)
    const nav = useRef(null)

    const [navHeight,setNavHeight] = useState(0)
    const [theme, setTheme] = useState(false)
    const [active, setActive] = useState("home")
    
    const { pages } = useGlobalContext()
    
    const navContent = ['home', 'about', 'projects', 'contact'];

    const toggleClick = (e) => {
        hamburger.current.classList.toggle("show-nav-content")
        hamburger.current.classList.contains("show-nav-content") ? hamburger.current.style.height = navHeight + "px" : hamburger.current.style.height = 0 + "px"

        let hold = e.target.innerHTML
        
        for (let page in pages) {
            (page === hold) && window.scrollTo(0, pages[page])
            setActive(hold)
        }
    }

    window.addEventListener("scroll", () => {
        for (let page in pages) {
            (Math.ceil(window.scrollY >= pages[page])) && setActive(page)
        }
    })

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
        if (themeColor === "light-theme"){
            document.body.classList.remove("dark-theme")
            setTheme(false)        
        }
    }

    useEffect(() => {
        let tempHeight = hamburger.current.getBoundingClientRect().height;
        hamburger.current.style.height = 0;
        setNavHeight(tempHeight)

        window.scrollTo(0, -82)
    }, [])

    return (
        <header className='main-header' ref={nav}>
            <nav className='main-nav'>
                <div className="logo">
                    Moshood => Asterisk
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

const NavLink = ({ value, func, active }) => {
    return <li onClick={func} className={`nav-link ${active === value ? "nav-color" : ""}`}>{value}</li>
}

export default Navbar
