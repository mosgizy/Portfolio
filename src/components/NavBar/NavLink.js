import React from 'react'

const NavLink = ({ value, scroll, active, handleClick }) => {
    return <li onClick={() => handleClick
        (value)} className={`nav-link ${active === value ? "nav-color" : ""}`}>{value}</li>
}

export default NavLink
