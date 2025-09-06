import '../styles/achievements.css'
import { useState } from "react"
import CompetitiveProgrammingImg from "../assets/AdaByronAward.jpg";
import AcademicAwardImg from "../assets/MejorExpediente.jpeg";
import RoboticCompetitionImg from "../assets/RoboticCompetition.jpeg";

type AchievementsKey = "Competitive Programming" | "Academic Award" | "Robotic Competition";

type ImageUrl = {
  imgUrl: string;
};

const AchievementsImages: Record<AchievementsKey, ImageUrl> = {
  "Competitive Programming": { imgUrl: CompetitiveProgrammingImg },
  "Academic Award": { imgUrl: AcademicAwardImg },
  "Robotic Competition": { imgUrl: RoboticCompetitionImg },
};

function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementsKey | null>(null);
  const [enabled, setEnabled] = useState<boolean>(false);

  return (
    <section id="achievements">
      <h2>Achievements</h2>

      <div className="card">
        <ul className="Detail">


          {Object.keys(AchievementsImages).map( (key) => {
            const achievementKey = key as AchievementsKey;
            return (

              <li key={achievementKey}

                  onMouseOver={(e) => {
                    (e.target as HTMLElement).style.cursor = "pointer";
                  }}


                  onMouseDown={() => {
                    if (achievementKey === selectedAchievement) {
                      setEnabled(!enabled)
                    } else {
                      setSelectedAchievement(achievementKey)
                      setEnabled(true)
                    }
                  }}
                  className={ (selectedAchievement === achievementKey && enabled) ? "active" : ""}
              >
                {achievementKey}
              </li>
            )
          })}
        </ul>

        <div className="AchievementImage">
          {enabled && selectedAchievement && (
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
