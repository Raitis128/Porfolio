import { ProjectsSection, Project, Card, Tools } from "./projects.styles";
import React from "react";

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
    dateTime: "2024-01-01",
    finishDate: "January 1, 2024",
  },
  {
    title: "Project title",
    tools: ["CSS", "Javascript", "API", "Async"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s",
    github: "",
    link: "",
    image: ProjectImage,
    imageAlt: "Image of project",
    dateTime: "2024-01-01",
    finishDate: "January 1, 2024",
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
    dateTime: "2024-14-09",
    finishDate: "September 14, 2024",
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
                <a href={project.link} target="_blank">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="odd"
                  />
                </a>
              ) : null}

              <Card className="cards">
                <h3>{project.title}</h3>
                <Tools>
                  {project.tools.map((tool, index) => {
                    return <span key={index}>{tool}</span>;
                  })}
                </Tools>
                <p>{project.description}</p>
                <section className="date-icons">
                  <nav>
                    <a href={project.github} target="_blank">
                      <i className="icon fa-brands fa-github fa-4x github"></i>
                    </a>
                    <a href={project.link} target="_blank">
                      <i className="icon fa-solid fa-arrow-up-right-from-square fa-4x link"></i>
                    </a>
                  </nav>
                  <time dateTime={project.dateTime}>{project.finishDate}</time>
                </section>
              </Card>

              {index % 2 === 0 ? null : (
                <a href={project.link} target="_blank">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="even"
                  />
                </a>
              )}
            </Project>
          );
        })}
    </ProjectsSection>
  );
};

export default Projects;
