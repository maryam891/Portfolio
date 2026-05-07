import { projects } from '../data'
import "../data"
import '../css/Projects.css'

export default function Projects() {
  return (
    <section className={"project-container"} id='Projects'>
      <div style={{ fontWeight: "400" }}>Projects</div>
      <h2>Some of my projects</h2>
      <div className={"projects-card-container"}>
        {projects.map((project) => (
          <div key={project.id} className={"project-card"}>
            <h3>{project.title}</h3>
            <p className='project-description'>{project.description}</p>
            {project.tags.map((tag, i) => (
              <span className='project-tags' key={i}> {tag}</span>))}
            <p style={{ marginTop: "10px", marginBottom: "20px" }}>View code on Github:</p>
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className='project-url'>{project.githubUrl}</a>
            <p style={{ marginTop: "10px", marginBottom: "20px" }}>View live demo:</p>
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className='project-url'>{project.liveUrl}</a>
          </div>
        ))}
      </div>
    </section>
  )
}
