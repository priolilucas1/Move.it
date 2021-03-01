import styles from "../styles/components/Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.sideBarContent}>
        <button>
          <img src="icons/logoHome.svg" alt="Logo" />
        </button>

        <div className={styles.sideBarButtons}>
          <button>
            <img src="icons/home-icon.svg" alt="Home icon" />
          </button>
          <button>
            <img src="icons/medal-icon.svg" alt="Medal icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
