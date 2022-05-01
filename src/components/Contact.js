import React, { useRef,useState,useEffect } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const contact = useRef(null)
    const form = useRef(null)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [error,setError] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('default_service', 'hasterisk', form.current,process.env.REACT_APP_EMAILJS_API_KEY).then(
            (result) => {
                if (result.text === "OK") {
                    setName("")
                    setEmail("")
                    setSubject("")
                    setMessage("")
                    setError(true)
                }
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
                setError(false)
            }
        )
    }

    useEffect(() => {
        setTimeout(() => {
            setError(false)
        },1200)
    },[error])

    return (
        <section id="contact" ref={contact}>
            <article className="sub-section">
                <div className="contact">
                    <h1 className='section-header'>contact us</h1>
                    <p>Got a question or proposal, or just want to say hello? Go ahead</p>
                    <article>
                        <form ref={form} onSubmit={sendEmail} className="form">
                            <p className={`error`}>
                                {
                                    error && "message successfully sent"
                                }
                            </p>
                            <label htmlFor="name">your name</label>
                            <input type="text" name='user_name' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="email">email address</label>
                            <input type="email" name='user_email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <label htmlFor="subject">subject</label>
                            <input type="text" name='user_subject' id='subject' value={subject} onChange={(e) => setSubject(e.target.value)}/>
                            <label htmlFor="message">your message</label>
                            <textarea name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
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
