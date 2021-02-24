import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ExperienceBar.module.css";

export default function ExperienceBar() {
  const { currentXp, xpToNextLevel } = useContext(ChallengesContext);

  const percentNextLevel = Math.round((currentXp * 100) / xpToNextLevel);

  return (
    <div className={styles.container}>
      <header className={styles.experienceBar}>
        <span>0 xp</span>

        <div>
          <div style={{ width: `${percentNextLevel}%` }} />
          <span
            className={styles.currentExperience}
            style={{ left: `${percentNextLevel}%` }}
          >
            {currentXp} xp
          </span>
        </div>

        <span>{xpToNextLevel} xp</span>
      </header>
    </div>
  );
}
