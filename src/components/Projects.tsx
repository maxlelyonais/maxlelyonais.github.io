import { useState } from "react";
import "../styles/project.css";
import ProjectCard from "./ProjectCard";
import OrderCoffe from "../assets/orderCoffe.svg";
import WeatherApp from "../assets/weatherApp.svg";
import Financial from "../assets/financial.svg";
import ArtificialIntelligence from "../assets/ArtificialIntelligence.svg";
import SentimentAnalysis from "../assets/SentimentAnalysis.svg";

type ProjectKey = "Backend" | "Frontend" | "Ai";
type ProjectTech = "SpringBoot" | "React" | "Pytorch" | "MongoDB" | "Python" | "Pandas" | "SQLite" | "Kivy" | "HTML" | "Css" | "Javascript" | "Express" | "Matplotlib" | "Tensorflow";

type Project = {
  name: string;
  info: string;
  stack: ProjectTech[];
  image: string;
};

const projects: Record<ProjectKey, Project[]> = {
  Backend: [
    {
      name: "Cafeteria App",
      info: "App developed using Python library Kivy with SQLite to streamline order management in a cafeteria. The system allows staff to place, update, track and complete orders through a simple interface. SQLite is used for storing menu items, customer details, and order history, ensuring fast and reliable local data management. The app also includes features like order summaries, billing, and search functionality to improve efficiency and reduce errors",
      stack: ["Python", "SQLite", "Kivy"],
      image: OrderCoffe
    }
  ],
  Frontend: [
    {
      name: "Weather App",
      info: "A weather application built using HTML, CSS, and JavaScript for the frontend, with Express.js handling API requests. The app fetches real-time weather data from a third-party API",
      stack: ["HTML", "Css", "Javascript", "Express"],
      image: WeatherApp
    },
  ],
  Ai: [
    {
      name: "Stock Prediction",
      info: "An AI-driven system for stock prediction that analyzes historical price data to recommend optimal buy timings and quantities. Built with Python, Pandas for preprocessing, Prophet for time-series forecasting, and Matplotlib for visualization. The model helps reduce overstocking while maximizing profit opportunities by providing accurate demand forecasts.",
      stack: ["Python", "Pandas", "Matplotlib"],
      image: Financial
    },
    {
      name: "Flappy Bird with NEAT",
      info: "An AI agent trained to play the Flappy Bird game using NeuroEvolution of Augmenting Topologies (NEAT). The system evolves neural networks over multiple generations, improving decision-making strategies such as jumping at the right time.",
      stack: ["Python"],
      image: ArtificialIntelligence
    },
    {
      name: "Sentiment analysis of Youtube Comments",
      info: "A machine learning model designed to perform sentiment analysis on YouTube video comments. Using Youtube API to obtain comments, processes text using Pandas for data handling, and trains deep learning models with TensorFlow to classify sentiments as positive, negative, or neutral. This project highlights natural language processing (NLP) applications in understanding audience engagement and content feedback.",
      stack: ["Python", "Tensorflow" , "Pandas"],
      image: SentimentAnalysis
    }
  ],
};

function Projects() {
  const [selected, setSelected] = useState<ProjectKey>("Backend");
  const [enabled, setEnabled] = useState<boolean>(false);

  return (
    <section id="projects">
      <h2>Projects</h2>

      {/* Category Selector */}
      <div className="projectSelector">
        {Object.keys(projects).map((key) => {
          const projectKey = key as ProjectKey;
          return (

            <p
              key={projectKey}

              onMouseOver={(e) => {
                (e.target as HTMLElement).style.cursor = "pointer";
              }}

              onMouseDown={() => {
                
                if (projectKey === selected) {
                  setEnabled(!enabled);
                } else {
                  setSelected(projectKey);
                  setEnabled(true)
                }
              
              }}

              className={ (selected === projectKey && enabled) ? "active" : ""}
            >
              {projectKey}
            </p>
          );
        })}
      </div>
      
      <div className="ProjectsGrid">
        {projects[selected].map((project, index) => (

          enabled &&
          <ProjectCard
            key={index}
            type={selected}
            name={project.name}
            description={project.info}
            technologies={project.stack}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}


export default Projects;
