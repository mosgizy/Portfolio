import React, { useRef, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useGlobalContext } from '../../context'

import NavLink from './NavLink'

const Navbar = () => {
    const hamburger = useRef(null)
    const themes = useRef(null)
    const nav = useRef(null)

    const [navHeight,setNavHeight] = useState(0)
    const [theme, setTheme] = useState(false)
    const [active, setActive] = useState("home")
    
    const { scroll,checkScroll } = useGlobalContext()
    
    const navContent = ['home', 'about', 'projects', 'contact'];
    // console.log("this is navbar")

    // toggleClick handles all the nav button clicks, both hamburger and the nav buttons, this function might later be split into two because is a good practice for a function to perform just a single task

    const toggleClick = () => {
        // this show and hide the nav menu while dynamicly changing its height to allow the animation with css work fine

        hamburger.current.classList.toggle("show-nav-content")
        hamburger.current.classList.contains("show-nav-content") ? hamburger.current.style.height = navHeight + "px" : hamburger.current.style.height = 0 + "px"
    }

    // when users click on the nav buttons it navigate the user to the section with a smooth scroll effect and also highlighting on the nav bar in which section the user is

    const handleClick = (value) => {
        scroll(value)
        setActive(value)
        hamburger.current.style.height = 0;
    }

    // this highlight on the nav bar in which section the user is while scrolling through the page
    window.addEventListener('scroll', () => {
        navContent.map((nav) => checkScroll(nav) && setActive(nav))
    })

    window.addEventListener('resize', () => {
        // this auto hide the nav menu when user decide to resize the web page manually,making the height of the nav menu 0
        if (window.innerWidth > 786) {
            hamburger.current.style.height = 0;
        }
    })

    // change theme of the webpage directly adding class to the document body

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
        // get the size of the nav menu and resize it to zero to be able to dynamically toggle the nav menu when the user click on the hamburger

        let tempHeight = hamburger.current.getBoundingClientRect().height;
        hamburger.current.style.height = 0;
        setNavHeight(tempHeight)

        // this automatically scroll to the top on page refresh
        window.scrollTo(0, -82)
    }, [])

    return (
        <header className='main-header' ref={nav}>
            <nav className='main-nav'>
                <div className="logo" onClick={() => scroll("home")}>
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
                                return <NavLink key={index} active={active} handleClick={handleClick} value={nav} scroll={scroll} />
                            })
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
