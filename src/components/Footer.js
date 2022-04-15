import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer>
            <button type="button" aria-label="back to top" className="to-top" onClick={() => window.scrollTo(0,-82)}>
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
            <div className="footer_content">
                <h3>back to top</h3>
                <ul>
                    <li><a href="https://twitter.com/asterisk_me" aria-label='twitter icon'><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://github.com/mosgizy" aria-label='github icon'><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://linkedin.com/in/moshood-ope-3333a590" aria-label='linkedin icon'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
            </div>
            <div className="copyright">
                <p>copyright © <span className='date'>{ new Date().getFullYear()}</span></p>
            </div>
        </footer>
    )
}

export default Footer
