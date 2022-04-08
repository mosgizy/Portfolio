import React from 'react'
import { useGlobalContext } from '../context'

const About = () => {
    const { avatar } = useGlobalContext();

    return (
        <section id="about">
            <div className='sub-section sub-about'>
                <h1 className='section-header'>about</h1>
                <div className="about-content">
                    <article className="my-image">
                        <img src={avatar.image} alt="my avartar" />
                    </article>
                    <article className="about-me">
                        <div className="about-me_text">
                            <p>I am a frontend developer, I love to solve problems whether it's finding the most elegant way to write lines of code or figuring out which code fits best into progression.I am committed to learning and self-development to achieve better results. I am always open to learning and constructive feedback.</p>
                            <p>I create interactive and responsive websites and web apps on a daily basis in order me grow and learn a ton of new stuff as a developer my github kind of scream that. My current tech stack in HTML, CSS, JavaScript and React. </p>
                            <p>My interest in the future is to sharpen my skills and learn about new tools that can help me build more robust and user friendly web pages, i do have keen interest in Open Source, Linux and Backend Development</p>
                        </div>
                        <button type='button' className='btn about-btn'><a href='https://resume.io/r/CuTCTfdXh'>download cv</a></button>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default About
