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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laboriosam dolorum eveniet sint deleniti, fugiat natus quaerat aperiam alias ipsam sit. Aut aliquid libero id quod distinctio suscipit officia tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed officia eos sunt suscipit reiciendis eum distinctio? Alias, labore! Distinctio voluptatem omnis recusandae, inventore quos ea iure veniam quo cum ullam?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eos exercitationem eum, laudantium provident maiores unde autem totam at, quod veritatis fugit non vitae quam deleniti voluptate porro eligendi sit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure veritatis, dicta iste sint ullam officiis ad odio ea recusandae velit?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloremque, magni voluptatibus nam nihil ut vitae laudantium ipsa nisi quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, debitis!</p>
                        </div>
                        <button type='button' className='btn about-btn'>download cv</button>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default About
