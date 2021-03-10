import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { FiHome, FiLogOut } from "react-icons/fi";
import { BiMedal } from "react-icons/bi";

import swal from "sweetalert";

import styles from "../styles/components/Sidebar.module.css";

interface SideBarProps {
  username?: string;
}

export default function Sidebar({ username }: SideBarProps) {
  const router = useRouter();

  const [isHomeScreen, setIsHomeScreen] = useState(false);
  const [isLeaderBoard, setIsLeaderBoard] = useState(false);

  function loginNavigation() {
    swalPopUp();
  }

  function homeNavigation() {
    if (router.pathname === `/[username]`) {
      return;
    }
    router.push(`/${username}`);
  }

  function swalPopUp() {
    swal({
      title: "Você está sendo deslogado",
      text: "Tem certeza que deseja sair?",
      icon: "warning",
      dangerMode: true,
      buttons: {
        cancel: { visible: true, text: "Cancelar" },
        confirm: { visible: true, text: "Sair" },
      },
    }).then((willConfirm) => {
      if (willConfirm) {
        router.push("/");
      }
    });
  }

  useEffect(() => {
    if (router.pathname === "/[username]") {
      setIsHomeScreen(true);
      setIsLeaderBoard(false);
    }
    if (router.pathname === "/leaderboard") {
      setIsLeaderBoard(true);
      setIsHomeScreen(false);
    }
  }, []);

  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.sideBarContent}>
        <img src="icons/logoHome.svg" alt="Logo" />

        <div className={styles.sideBarButtons}>
          <button
            onClick={homeNavigation}
            style={
              isHomeScreen
                ? {
                    borderLeft: "4px solid #5965e0",
                    color: "#5965e0",
                    paddingRight: "4px",
                  }
                : { borderLeft: "none", color: "#666666" }
            }
          >
            <FiHome size={36} />
          </button>
          <button
            disabled
            style={
              isLeaderBoard
                ? {
                    borderLeft: "4px solid #5965e0",
                    color: "#5965e0",
                    paddingRight: "4px",
                  }
                : { borderLeft: "none", color: "#666666" }
            }
          >
            <BiMedal size={36} />
          </button>
        </div>

        <div className={styles.logOut}>
          <button onClick={loginNavigation}>
            <FiLogOut size={32} color="#666666" />
          </button>
        </div>
      </div>
    </div>
  );
}
