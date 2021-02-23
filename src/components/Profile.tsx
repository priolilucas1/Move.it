import styles from "../styles/components/Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/priolilucas1.png" alt="Lucas Prioli" />
      <div>
        <strong>Lucas Prioli</strong>
        <p>
          <img src="icons/level.svg" alt="Level" /> Level 2
        </p>
      </div>
    </div>
  );
}
