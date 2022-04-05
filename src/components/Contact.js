import React from 'react'

const Contact = () => {
    return (
        <section id="contact">
            <div className="sub-section">
                <div className="contact">
                    <h1 className='section-header'>get in touch</h1>
                    <p>Got a question or proposal, or just want to say hello? Go ahead</p>

                    <article>
                        <form action="" className="form">
                            <label htmlFor="name">your name</label>
                            <input type="text" name='name' id='name' />
                            <label htmlFor="email">email address</label>
                            <input type="email" name='email' id='email' />
                            <label htmlFor="subject">subject</label>
                            <input type="text" name='subject' id='subject' />
                            <label htmlFor="message">your message</label>
                            <textarea name="message" id="message"></textarea>
                            <div className="btn-wrapper">
                                <button type='submit' className='btn about-btn'>send message</button>
                            </div>
                        </form>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Contact