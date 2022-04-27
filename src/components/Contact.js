import React, { useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const contact = useRef(null)
    const form = useRef(null)

    // const [input, setInput] = useState({
    //     name: "",
    //     email: "",
    //     subject: "",
    //     message:""
    // })

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('default_service','hasterisk',form.current, 'TZARVgU4FQxaMRICf').then(
            (result) => {
            console.log(result.text)
            }, (error) => {
                console.log(error.text)
            }
        )
        console.log(form.current)
    }

    return (
        <section id="contact" ref={contact}>
            <article className="sub-section">
                <div className="contact">
                    <h1 className='section-header'>contact us</h1>
                    <p>Got a question or proposal, or just want to say hello? Go ahead</p>
                    <article>
                        <form ref={form} onSubmit={sendEmail} className="form">
                            <label htmlFor="name">your name</label>
                            <input type="text" name='user_name' id='name' />
                            <label htmlFor="email">email address</label>
                            <input type="email" name='user_email' id='email' />
                            <label htmlFor="subject">subject</label>
                            <input type="text" name='user_subject' id='subject' />
                            <label htmlFor="message">your message</label>
                            <textarea name="message" id="message"></textarea>
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
