import React from "react";
import PanelCards from "@/components/game/panel-cards";
import PanelGameControl from "@/components/game/panel-control";
import PanelUsers from "@/components/game/panel-users";
import PanelDealer from "@/components/game/panel-dealer";
import styles from '@/styles/game.module.scss';

const GamePage = () => {
  const title = 'Name room';

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1>{title}</h1>
        <div>
          <PanelDealer />
          <PanelGameControl />
        </div>
        <PanelCards />
      </div>
      <PanelUsers />
    </main>
  );

export default GamePage;
