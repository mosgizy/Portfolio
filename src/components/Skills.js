import { useGlobalContext } from '../context'

const Skills = () => {
    const { skills } = useGlobalContext()
    const newSkills = Object.entries(skills)
    
    return (
        <section id="skills" className='skill-set'>
            <div className='sub-section'>
                <h1 className='section-header'>skills</h1>

                <ul className="skills">
                    {/* <li><img src={skills.html} alt="html" /></li>
                    <li><img src={skills.css} alt="css" /></li>
                    <li><img src={skills.javascript} alt="javascript" /></li>
                    <li><img src={skills.react} alt="reactjs" /></li>
                    <li><img src={skills.tailwind} alt="tailwindcss" /></li>
                    <li><img src={skills.git} alt="git" /></li> */}

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
