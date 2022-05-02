import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import { useGlobalContext } from '../../context'

const Footer = () => {
    const {scroll} = useGlobalContext()

    return (
        <footer>
            <button type="button" aria-label="back to top" className="to-top" onClick={() => scroll("home")}>
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
            <div className="footer_content">
                <p>back to top</p>
                <ul>
                    <li><a href="https://twitter.com/asterisk_me" aria-label='twitter icon'><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://github.com/mosgizy" aria-label='github icon'><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://linkedin.com/in/moshood-ope-3333a590" aria-label='linkedin icon'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
            </div>
            <div className="copyright">
                <p className="email">moshood521@gmail.com</p>
                <p>copyright © <span className='date'>{ new Date().getFullYear()}</span></p>
            </div>
        </footer>
    )
}

export default Footer
