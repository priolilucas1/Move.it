import styles from "../styles/components/Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.sideBarContent}>
        <img src="icons/logoHome.svg" alt="Logo" />

        <div className={styles.sideBarButtons}>
          <img src="icons/home-icon.svg" alt="Home icon" />
          <img src="icons/medal-icon.svg" alt="Medal icon" />
        </div>
      </div>
    </div>
  );
}
