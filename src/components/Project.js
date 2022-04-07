import React,{useState,useEffect} from 'react'
import { useGlobalContext } from '../context'

const Project = () => {
    const { projects } = useGlobalContext()
    const [project, setProject] = useState([])

    const handleClick = (tech) => {
        if (tech === 'all') {
            setProject([...projects])
        } else {
            const newProjects = projects.filter(project => project.category === tech)
            setProject([...newProjects])
        }
    }
    
    useEffect(() => {
        setProject([...projects])
    },[projects])

    return (
        <section id="projects">
            <div className="sub-section">
                <h1 className='section-header'>projects</h1>
                <nav className='project-navbar'>
                    <button type='button' className='project-btn' onClick={() => handleClick("all")}>all</button>
                    <button type='button' className='project-btn' onClick={() => handleClick("landing page")}>landing pages</button>
                    <button type='button' className='project-btn' onClick={() => handleClick("javascript")}>javascript</button>
                    <button type='button' className='project-btn' onClick={() => handleClick("react")}>react</button>
                </nav>

                <article className='projects-wrapper'>
                    {
                       projects && project.map((project) => {
                            return <ProjectCard key={project.id} {...project}  />
                        })
                    }
                </article>
            </div>
        </section>
    )
}

const ProjectCard = ({img,title,description,source,demo}) => {
    return (
        <div className="project">
            <div className="project-preview">
                <img src={img} alt={title} />
            </div>
            <div className="project_info">
                <h3 className="project_title">{ title}</h3>
                <p className="project_about">{description}</p>
                <div className="project_btn">
                    <a href={source}>source code</a>
                    <a href={demo}>Demo</a>
                </div>
            </div>
        </div>
    )
}

export default Project
