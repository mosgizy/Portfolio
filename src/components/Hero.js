import React, { useRef,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useGlobalContext } from '../context'

const Hero = () => {
    const { avatar,scroll } = useGlobalContext();

    const hero = useRef(null)

    useEffect(() => {
        // this update the pages array in context.js

        // window.innerWidth > 768 ? updatePage({ home: hero.current.offsetTop - 122 }) : updatePage({ home: hero.current.offsetTop - 82 })
    }, [])

    return (
        <section id='home' className='hero' ref={hero}>
            <article className="hero_wrapper">
                <article className='hero_info'>
                    <div className="hero_social-icons">
                        <a href="https://twitter.com/asterisk_me" aria-label='twitter icon'><FontAwesomeIcon icon={faTwitter} className='icon hero_icon' /></a>
                        <a href="https://github.com/mosgizy" aria-label='github icon'><FontAwesomeIcon icon={faGithub} className='icon hero_icon' /></a>
                        <a href="https://linkedin.com/in/moshood-ope-3333a590" aria-label='linkedin icon'><FontAwesomeIcon icon={faLinkedin} className='icon hero_icon' /></a>
                    </div>
                    <div className="hero_introduction">
                        <h2>hello,</h2>
                        <h2>i'm <span className="hero_name">moshood ope</span></h2>
                        <p>i'm a frontend developer based in Nigeria</p>
                        <button type='button' className='hero_btn btn' onClick={() => scroll("projects")}>view my work</button>
                    </div>
                </article>
                <article className='my-avatar'>
                    <div className="hero_my-avatar">
                        <img src={avatar.image} alt="my avatar" />
                    </div>
                </article>
            </article>
            <button type='button' className="hero_down" onClick={() => scroll("about")} aria-label="scroll down">
                <div className="hero_down_scroller">
                    <div className="hero_down_button"></div>
                </div>
                <div className="hero_arrows">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
        </section>
    )
}

export default Hero
