import React from 'react'

const ProjectCard = ({ img, title, description, source, demo }) => {
    return (
        <div className="project">
            <div className="project-preview">
                <img loading='lazy' src={img} alt={title} />
            </div>
            <div className="project_info">
                <h2 className="project_title">{title}</h2>
                <p className="project_about">{description}</p>
                <div className="project_btn">
                    <a href={source}>source code</a>
                    <a href={demo}>Demo</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
