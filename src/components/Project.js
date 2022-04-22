import React, { useState, useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'
import ProjectCard from './ProjectCard'

const Project = () => {
    const { projects, updatePage } = useGlobalContext()
    const [project, setProject] = useState([])
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
        setTimeout(() => {
            window.innerWidth > 768 ? updatePage({ projects: pro.current.offsetTop - 122 }) : updatePage({ projects: pro.current.offsetTop - 82 })
        }, 2000)
    }, [projects])

    return (
        <section ref={pro}>
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
                        projects && project.map((project) => {
                            return <ProjectCard key={project.id} {...project} />
                        })
                    }
                </article>
            </article>
        </section>
    )
}

export default Project
