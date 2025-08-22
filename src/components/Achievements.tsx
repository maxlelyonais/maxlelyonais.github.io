import '../styles/achievements.css'
import { useState } from "react"
import CompetitiveProgrammingImg from "../assets/AdaByronAward.jpg";
import AcademicAwardImg from "../assets/MejorExpediente.jpeg";
import RoboticCompetitionImg from "../assets/RoboticCompetition.jpeg";

type Achievements = "CompetitiveProgramming" | "AcademicAward" | "RoboticCompetition";

type ImageUrl = {
  imgUrl: string;
};

const AchievementsImages: Record<Achievements, ImageUrl> = {
  CompetitiveProgramming: { imgUrl: CompetitiveProgrammingImg },
  AcademicAward: { imgUrl: AcademicAwardImg },
  RoboticCompetition: { imgUrl: RoboticCompetitionImg },
};

function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievements | null>(null);

  return (
    <section id="achievements">
      <h2>Achievements</h2>

      <div className="card">
        <ul className="Detail">
          <li 
            onMouseEnter={() => setSelectedAchievement("RoboticCompetition")} 
            className={selectedAchievement === "RoboticCompetition" ? "active" : ""}
          >
            Robotic Competition
          </li>
          <li 
            onMouseEnter={() => setSelectedAchievement("CompetitiveProgramming")} 
            className={selectedAchievement === "CompetitiveProgramming" ? "active" : ""}
          >
            Competitive Programming
          </li>
          <li 
            onMouseEnter={() => setSelectedAchievement("AcademicAward")} 
            className={selectedAchievement === "AcademicAward" ? "active" : ""}
          >
            Academic Success
          </li>
        </ul>

        <div className="AchievementImage">
          {selectedAchievement && (
            <img
              src={AchievementsImages[selectedAchievement].imgUrl}
              alt={selectedAchievement}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
