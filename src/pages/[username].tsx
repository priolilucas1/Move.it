import Head from "next/head";
import styles from "../styles/Pages/Home.module.css";

import { GetServerSideProps } from "next";

import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import ChallengeBox from "../components/ChallengeBox";

import { CountdownProvider } from "../contexts/CoutdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface UserGithub {
  name: string;
  avatar_url: string;
}

interface HomeProps {
  user: UserGithub;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const { user } = props;
  return (
    <ChallengesProvider
      level={props.level}
      currentXp={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.homeContainer}>
        <Head>
          <title>{user.name} | Move.it</title>
        </Head>

        <div className={styles.content}>
          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile {...user} />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { username } = ctx.params;
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user = await response.json();

  const { level, currentXp, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      user,
      level: Number(level),
      currentExperience: Number(currentXp),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
