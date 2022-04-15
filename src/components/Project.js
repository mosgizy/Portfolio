import React, { useState, useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'
import ProjectCard from './ProjectCard'

const Project = () => {
    const { projects, dispatch } = useGlobalContext()
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
            if (window.innerWidth > 768) {
                dispatch({
                    type: "PAGE_UPDATE", payload: {
                        projects: pro.current.offsetTop - 122
                    }
                })
            }
            else {
                dispatch({
                    type: "PAGE_UPDATE", payload: {
                        projects: pro.current.offsetTop - 82
                    }
                })
            }
        }, 2000)
    }, [projects])

    return (
        <section id="projects" ref={pro}>
            <div className="sub-section">
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
            </div>
        </section>
    )
}

export default Project
