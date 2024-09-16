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
    image: { ProjectImage },
    imageAlt: "Image of project",
  },
  {
    title: "Pokémon Search App",
    tools: ["CSS", "Javascript", "API", "Async"],
    description:
      "This project is a Pokémon search application that allows users to search for details about a Pokémon by its name or ID.",
    github: "https://github.com/Raitis128/Pokemon-Search-App",
    link: "https://iziks-pokemon-app.netlify.app/",
    image: { PokemonImage },
    imageAlt: "Image of project Pokémon Search App",
  },
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <h2>Projects</h2>
      <Project>
        <Card className="first">
          <h3>Pokémon Search App</h3>
          <Tools>
            <span>CSS</span>
            <span>Javascript</span>
            <span>API</span>
            <span>Async</span>
          </Tools>
          <p>
            This project is a Pokémon search application that allows users to
            search for details about a Pokémon by its name or ID.
          </p>
          <nav>
            <a
              href="https://github.com/Raitis128/Pokemon-Search-App"
              target="_blank"
            >
              <i className="fa-brands fa-github fa-4x github"></i>
            </a>
            <a href="https://iziks-pokemon-app.netlify.app/" target="_blank">
              <i className="fa-solid fa-arrow-up-right-from-square fa-4x link"></i>
            </a>
          </nav>
        </Card>

        <img src={PokemonImage} alt="Image of project" />
      </Project>

      <Project>
        <img src={ProjectImage} alt="Image of project" />
        <Card className="second">
          <h3>Project title</h3>
          <Tools>
            <span>Tool1</span>
            <span>Tool2</span>
            <span>Tool3</span>
            <span>Tool4</span>
          </Tools>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s
          </p>
          <nav>
            <a href="">
              <i className="fa-brands fa-github fa-4x github"></i>
            </a>
            <a href="">
              <i className="fa-solid fa-arrow-up-right-from-square fa-4x link"></i>
            </a>
          </nav>
        </Card>
      </Project>
    </ProjectsSection>
  );
};

export default Projects;
