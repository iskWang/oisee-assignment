import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const HomePresentation = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Pokemon x Digimon</h1>
      <div className={styles.grid}>
        <Link to="/pokemons" className={styles.card}>
          <h2 className={styles.cardTitle}>Pokemon</h2>
          <p className={styles.cardDescription}>Explore the world of Pokemon</p>
        </Link>
        <Link to="/digimons" className={styles.card}>
          <h2 className={styles.cardTitle}>Digimon</h2>
          <p className={styles.cardDescription}>Discover Digital Monsters</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePresentation;
