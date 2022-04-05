import React, { useRef, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const hamburger = useRef(null)
    const themes = useRef(null)
    const [navHeight,setNavHeight] = useState(0)
    const [theme,setTheme] = useState(false)

    const toggleClick = () => {
        hamburger.current.classList.toggle("show-nav-content")
        if (hamburger.current.classList.contains("show-nav-content")) {
            hamburger.current.style.height = navHeight + "px";
            console.log(navHeight)
        } else {
            hamburger.current.style.height = 0 + "px";
        }
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 786) {
            hamburger.current.style.height = 0;
        }
    })

    // change page theme

    const darkTheme = () => {
        document.body.classList.add("dark-theme")
        setTheme(true)
    }

    const brightTheme = () => {
        document.body.classList.remove("dark-theme")
        setTheme(false)
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
                    <a href="#">Moshood => Asterisk</a>
                </div>
                <div className="navigation">
                    <div className="nav-mobile">
                        <div className="dark-bright" ref={themes}>
                            <div className={`icon dark ${!theme ? 'show': 'hide'}`} onClick={(e) => darkTheme(e)}>
                                <FontAwesomeIcon icon={faMoon} />
                            </div>
                            <div className={`icon bright ${theme ? 'show' : 'hide'}`} onClick={(e) => brightTheme(e)}>
                                <FontAwesomeIcon icon={faSun} />
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faBars} className='hamburger icon' onClick={toggleClick} />
                    </div>
                </div>
                <div className="nav-content" ref={hamburger}>
                    <ul>
                        <li><a href="#home" onClick={toggleClick}>home</a></li>
                        <li><a href="#about" onClick={toggleClick}>about</a></li>
                        <li><a href="#projects" onClick={toggleClick}>projects</a></li>
                        <li><a href="#contact" onClick={toggleClick}>contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
