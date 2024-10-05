import { ProjectsSection, Project, Card, Tools } from "./projects.styles";

import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

import PokemonImage from "../../assets/img/projects/pokemon.png";
import ProjectImage from "../../assets/img/project.jpg";
import SimpleCarImage from "../../assets/img/projects/rent-car.png";

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
    title: "Simple Car",
    tools: ["Typescript", "React", "Styled-components"],
    description:
      "Simple Car is a user-friendly web application for car rentals. It features a dynamic search form for location and dates, a car selection dropdown with real-time updates on vehicle details, and informative sections highlighting the benefits of renting with us, FAQs, and contact information. Future enhancements will include backend integration for a complete rental experience.",
    github: "https://github.com/Raitis128/rent-car-app",
    link: "https://simple-car.netlify.app/",
    image: SimpleCarImage,
    imageAlt: "Image of project Simple Car",
    dateTime: "2024-05-10",
    finishDate: "October 5, 2024",
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
                      <FaGithub className="icon" />
                    </a>
                    <a href={project.link} target="_blank">
                      <FaLink className="icon" />
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
