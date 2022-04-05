import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer>
            <a href='#home' className="to-top">
                <FontAwesomeIcon icon={faArrowUp} />
            </a>
            <div className="footer_content">
                <h3>back to top</h3>
                <ul>
                    <li><a href=""><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://github.com/mosgizy"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
            </div>
            <div className="copyright">
                <p>copyright © <span className='date'>{ new Date().getFullYear()}</span></p>
            </div>
        </footer>
    )
}

export default Footer
