import React, { useRef } from 'react'
import { useGlobalContext } from '../context'

const Contact = () => {
    const { updatePage } = useGlobalContext()
    const contact = useRef(null)

    React.useEffect(() => {
        setTimeout(() => {
            window.innerWidth > 768 ? updatePage({ contact: contact.current.offsetTop - 122 }) : updatePage({ contact: contact.current.offsetTop - 82 })
        }, 2000)
    }, [])

    return (
        <section id="contact" ref={contact}>
            <article className="sub-section">
                <div className="contact">
                    <h1 className='section-header'>contact us</h1>
                    <p>Got a question or proposal, or just want to say hello? Go ahead</p>
                    <article>
                        <form action="" className="form">
                            <label htmlFor="name">your name</label>
                            <input type="text" name='userName' id='name' />
                            <label htmlFor="email">email address</label>
                            <input type="email" name='userEmail' id='email' />
                            <label htmlFor="subject">subject</label>
                            <input type="text" name='subject' id='subject' />
                            <label htmlFor="message">your message</label>
                            <textarea name="content" id="message"></textarea>
                            <div className="btn-wrapper">
                                <button type='submit' className='btn about-btn'>send message</button>
                            </div>
                        </form>
                    </article>
                </div>
            </article>
        </section>
    )
}

export default Contact
