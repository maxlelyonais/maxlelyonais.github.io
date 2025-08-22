import "../styles/projectCard.css";

import SpringBootLogo from "../assets/spring_boot.svg";
import ReactLogo from "../assets/react.svg";
import PytorchLogo from "../assets/pytorch.png";
import MongoDBLogo from "../assets/MongoDB.png";
import PythonLogo from "../assets/python.png";
import PandasLogo from "../assets/pandas.png";
import SQLiteLogo from "../assets/Sqlite-square-icon.svg";
import KivyLogo from "../assets/kivy.png";
import HTMLLogo from "../assets/HTML5.png";
import CssLogo from "../assets/CSS.png";
import JavascriptLogo from "../assets/Javascript.png";
import ExpressLogo from "../assets/Expressjs.png";
import MatplotlibLogo from "../assets/Matplotlib_icon.png";
import TensorflowLogo from "../assets/TensorFlow.png";

type ProjectCategory = "Backend" | "Frontend" | "Ai";
type ProjectTech =
  | "SpringBoot"
  | "React"
  | "Pytorch"
  | "MongoDB"
  | "Python"
  | "Pandas"
  | "SQLite"
  | "Kivy"
  | "HTML"
  | "Css"
  | "Javascript"
  | "Express"
  | "Matplotlib"
  | "Tensorflow";

type TechUrl = { imgUrl: string };

const urlProject: Record<ProjectTech, TechUrl> = {
  SpringBoot: { imgUrl: SpringBootLogo },
  React: { imgUrl: ReactLogo },
  Pytorch: { imgUrl: PytorchLogo },
  MongoDB: { imgUrl: MongoDBLogo },
  Python: { imgUrl: PythonLogo },
  Pandas: { imgUrl: PandasLogo },
  SQLite: { imgUrl: SQLiteLogo },
  Kivy: { imgUrl: KivyLogo },
  HTML: { imgUrl: HTMLLogo },
  Css: { imgUrl: CssLogo },
  Javascript: { imgUrl: JavascriptLogo },
  Express: { imgUrl: ExpressLogo },
  Matplotlib: { imgUrl: MatplotlibLogo },
  Tensorflow: { imgUrl: TensorflowLogo },
};

interface ProjectCardProps {
  type: ProjectCategory;
  name: string;
  description: string;
  technologies: ProjectTech[];
  image: string;
  codeUrl?: string;
}

function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="cardProject">
      <div className="cardInfo">
        <h3>{props.type}</h3>
        <h2>{props.name}</h2>
        <p>{props.description}</p>

        {props.codeUrl && (
          <a href={props.codeUrl} target="_blank" rel="noopener noreferrer">
            <button>Código</button>
          </a>
        )}

        <div className="cardProject-tech">
          {props.technologies.map((tech) => (
            <img key={tech} src={urlProject[tech].imgUrl} alt={tech} />
          ))}
        </div>
      </div>

      <div className="cardImage">
        <img src={props.image} alt={`${props.name} preview`} />
      </div>
    </div>
  );
}

export default ProjectCard;
