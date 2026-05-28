import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="projects"
      data-aos="fade-up"
    >
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            tech={project.tech}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
