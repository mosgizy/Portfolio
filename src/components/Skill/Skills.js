import { useGlobalContext } from '../../context'
import React, { useRef } from 'react'
import Skill from './Skill'

const Skills = () => {
    const { skills } = useGlobalContext()
    const newSkills = Object.entries(skills)

    const skill = useRef(null)

    return (
        <section className='skill-set' ref={skill}>
            <article className='sub-section'>
                <h1 className='section-header'>skills</h1>

                <ul className="skills">
                    {
                        newSkills.map((skill,index) => {
                            return <Skill key={index} skill = {skill} />
                        })
                    }
                </ul>
            </article>
        </section>
    )
}

export default Skills
