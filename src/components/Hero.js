import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
// import avartar from '../assets/avartar.jpg'
import { useGlobalContext } from '../context'

const Hero = () => {
    const {avatar} = useGlobalContext();
    return (
        <section className='hero' id='home'>
            <article className="hero_wrapper">
                <article className='hero_info'>
                    <div className="hero_social-icons">
                        <a href="https://twitter.com/asterisk_me"><FontAwesomeIcon icon={faTwitter} className='icon hero_icon' /></a>
                        <a href="https://github.com/mosgizy"><FontAwesomeIcon icon={faGithub} className='icon hero_icon' /></a>
                        <a href="https://linkedin.com/in/moshood-ope-3333a590"><FontAwesomeIcon icon={faLinkedin} className='icon hero_icon' /></a>
                    </div>
                    <div className="hero_introduction">
                        <h2>hello,</h2>
                        <h2>i'm <span className="hero_name">moshood ope</span></h2>
                        <p>i'm a frontend developer based in Nigeria</p>
                        <a href='#projects' type='button' className='hero_btn btn'>view my work</a>
                    </div>
                </article>
                <article className='my-avatar'>
                    <div className="hero_my-avatar">
                        <img src={avatar.image} alt="my avatar" />
                    </div>
                </article>
            </article>
            <a href='#about' className="hero_down">
                <div className="hero_down_scroller">
                    <div className="hero_down_button"></div>
                </div>
                <div className="hero_arrows">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </a>
        </section>
    )
}

export default Hero
