import { useGlobalContext } from '../context'
import React,{useRef} from 'react'

const Skills = () => {
    const { skills } = useGlobalContext()
    const newSkills = Object.entries(skills)

    const skill = useRef(null)

    return (
        <section className='skill-set' ref={skill}>
            <div className='sub-section'>
                <h1 className='section-header'>skills</h1>

                <ul className="skills">
                    {
                        newSkills.map((skill,index) => {
                            return <Skill key={index} skill = {skill} />
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

const Skill = ({ skill }) => {
    return (
        <li><img src={skill[1]} alt={skill[0]} /></li>
    )
}

export default Skills
