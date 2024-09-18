import { ProjectsSection, Project, Card, Tools } from "./projects.styles";

import PokemonImage from "../../assets/img/projects/pokemon.png";
import ProjectImage from "../../assets/img/project.jpg";

const projects = [
  {
    title: "Project title",
    tools: ["CSS", "Javascript", "API", "Async"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s",
    github: "",
    link: "",
    image: ProjectImage,
    imageAlt: "Image of project",
  },
  {
    title: "Pokémon Search App",
    tools: ["CSS", "Javascript", "API", "Async"],
    description:
      "This project is a Pokémon search application that allows users to search for details about a Pokémon by its name or ID.",
    github: "https://github.com/Raitis128/Pokemon-Search-App",
    link: "https://iziks-pokemon-app.netlify.app/",
    image: PokemonImage,
    imageAlt: "Image of project Pokémon Search App",
  },
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <h2>Projects</h2>
      {projects
        .slice()
        .reverse()
        .map((project, index) => {
          return (
            <Project key={index}>
              {index % 2 === 0 ? (
                <img src={project.image} alt={project.imageAlt} />
              ) : null}

              <Card>
                <h3>{project.title}</h3>
                <Tools>
                  {project.tools.map((tool, index) => {
                    return <span key={index}>{tool}</span>;
                  })}
                </Tools>
                <p>{project.description}</p>
                <nav>
                  <a href={project.github} target="_blank">
                    <i className="fa-brands fa-github fa-4x github"></i>
                  </a>
                  <a href={project.link} target="_blank">
                    <i className="fa-solid fa-arrow-up-right-from-square fa-4x link"></i>
                  </a>
                </nav>
              </Card>

              {index % 2 === 0 ? null : (
                <img src={project.image} alt={project.imageAlt} />
              )}
            </Project>
          );
        })}
    </ProjectsSection>
  );
};

export default Projects;
