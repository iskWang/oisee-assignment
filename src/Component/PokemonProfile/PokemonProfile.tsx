import type { PokemonProfileProps } from "./types";
import styles from "./styles.module.scss";

const PokemonProfile = ({
  name,
  image,
  types,
  height,
  weight,
  stats,
  abilities,
}: PokemonProfileProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.imageContainer}>
          <img src={image} alt={name} className={styles.image} />
        </div>
        <div className={styles.info}>
          <h1 className={styles.name}>{name}</h1>
          <div className={styles.metadata}>
            <div className={styles.section}>
              <h3>Types</h3>
              <div className={styles.tags}>
                {types.map((type) => (
                  <span key={type} className={styles.tag}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.section}>
              <h3>Physical</h3>
              <div className={styles.physicalInfo}>
                <div>
                  <span>Height:</span> {height / 10}m
                </div>
                <div>
                  <span>Weight:</span> {weight / 10}kg
                </div>
              </div>
            </div>
            <div className={styles.section}>
              <h3>Abilities</h3>
              <div className={styles.tags}>
                {abilities.map((ability) => (
                  <span key={ability} className={styles.tag}>
                    {ability}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.stats}>
        <h2>Base Stats</h2>
        <div className={styles.statsList}>
          {stats.map(({ name, value }) => (
            <div key={name} className={styles.statItem}>
              <div className={styles.statName}>{name}</div>
              <div className={styles.statBar}>
                <div
                  className={styles.statValue}
                  style={{ width: `${(value / 255) * 100}%` }}
                >
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonProfile;
