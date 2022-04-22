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

    // toggleClick handles all the nav button clicks, both hamburger and the nav buttons, this function might later be split into two because is a good practice for a function to perform just a single task

    const toggleClick = (e) => {
        // this show and hide the nav menu while dynamicly changing its height to allow the animation with css work fine

        hamburger.current.classList.toggle("show-nav-content")
        hamburger.current.classList.contains("show-nav-content") ? hamburger.current.style.height = navHeight + "px" : hamburger.current.style.height = 0 + "px"

        // this is for nav button on a desktop, onclick will scroll to the section top got from the stored data on pages in context.js

        let hold = e.target.innerHTML
        
        for (let page in pages) {
            // checking if the text in the button is the same as that of the key in pages to map each button to there specific section on the page
            (page === hold) && window.scrollTo(0, pages[page])
            setActive(hold)
        }
    }

    window.addEventListener("scroll", () => {
        // this indicate the section which the user scroll at on the nav button changing the collor of the active button based on the section the user is scrolling
        for (let page in pages) {
            Math.ceil(window.scrollY >= pages[page]) && setActive(page)
        }
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
