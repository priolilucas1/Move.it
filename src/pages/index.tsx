import Head from "next/head";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaGithub, FaArrowRight } from "react-icons/fa";

import styles from "../styles/Pages/Login.module.css";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [toogleColorBtt, setToogleColorBtt] = useState(false);

  function submit(e: any) {
    e.preventDefault();
    if (username) {
      router.push(`/${username}`);
    }
  }

  useEffect(() => {
    if (username.length >= 4) {
      setToogleColorBtt(true);
    }

    if (username.length < 4) {
      setToogleColorBtt(false);
    }
  }, [username]);

  return (
    <div className={styles.loginContainer}>
      <Head>
        <title>Home | Move.it</title>
      </Head>

      <div className={styles.content}>
        <img src="logoLogin.png" alt="Logo" />

        <div className={styles.gitHubContainer}>
          <div>
            <strong>Bem-vindo</strong>
          </div>
          <div className={styles.gitHubIconText}>
            <FaGithub size={40} />
            <div className={styles.text}>
              Faça login com seu Github <br />
              para começar
            </div>
          </div>
          <div className={styles.inputLogin}>
            <div className={styles.input}>
              <input
                type="text"
                placeholder="Digite seu username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className={styles.button}
              onClick={submit}
              style={
                toogleColorBtt
                  ? { background: "#4cd62b" }
                  : { background: "#4953b8" }
              }
            >
              <FaArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
