import React, { useState, useEffect, useRef } from 'react'
import { useGlobalContext } from '../../context'
import ProjectCard from './ProjectCard'

const Project = () => {
    const { projects } = useGlobalContext()
    const [project, setProject] = useState([...projects])
    const [active,setActive] = useState("all")
    const pro = useRef(null)

    const projectNav = ["all", "landing page", "javascript", "react"]

    const handleClick = (tech) => {
        if (tech === 'all') {
            setProject([...projects])
            setActive(tech)
        } else {
            const newProjects = projects.filter(project => project.category === tech)
            setProject([...newProjects])
            setActive(tech)
        }
    }

    useEffect(() => {
        setProject([...projects])
    }, [projects])

    return (
        <section id='projects' ref={pro}>
            <article className="sub-section">
                <h1 className='section-header'>projects</h1>
                <nav className='project-navbar'>
                    {
                        projectNav.map((link,index) => {
                            return <button type='button' key={index} className={`project-btn ${active === link ? "project-navlink": ""}`} onClick={() => handleClick(link)}>{link}</button>
                        })
                    }
                </nav>

                <article className='projects-wrapper'>
                    {
                        project.map((project) => {
                            return <ProjectCard key={project.id} {...project} />
                        })
                    }
                </article>
            </article>
        </section>
    )
}

export default Project
