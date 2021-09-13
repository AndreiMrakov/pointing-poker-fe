import React from "react";
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <main className={styles.home}>
      <article className={styles.wrapper}>
        <h3 className={styles.title}>Choose a name and a voting system for your game.</h3>
        <form className={styles.form}>
          <input type="text" />

          <select name="cardsValue" id="cardsValue">
            <option value="Fibonacci">Fibonacci</option>
            <option value="Powers of 2">Powers of 2</option>
          </select>

          <select name="cardsValue" id="cardsValue">
            <option value="Only me">Only me</option>
            <option value="Everyone">Everyone</option>
          </select>

          <button className={styles.form_btn} type="submit">Create game</button>
        </form>
      </article>
    </main>
  )
}
