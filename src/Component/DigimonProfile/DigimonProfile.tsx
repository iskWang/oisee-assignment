import type { DigimonProfileProps } from "./types";
import styles from "./styles.module.scss";

const DigimonProfile = ({
  name,
  image,
  types,
  attributes,
  levels,
  skills,
  description,
  releaseDate,
}: DigimonProfileProps) => {
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
              <h3>Attributes</h3>
              <div className={styles.tags}>
                {attributes.map((attr) => (
                  <span key={attr} className={styles.tag}>
                    {attr}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.section}>
              <h3>Levels</h3>
              <div className={styles.tags}>
                {levels.map((level) => (
                  <span key={level} className={styles.tag}>
                    {level}
                  </span>
                ))}
              </div>
            </div>
            {releaseDate && (
              <div className={styles.section}>
                <h3>Release Date</h3>
                <span>{releaseDate}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {description && (
        <div className={styles.description}>
          <h2>Description</h2>
          <p>{description}</p>
        </div>
      )}
      <div className={styles.skills}>
        <h2>Skills</h2>
        <div className={styles.skillsList}>
          {skills.map((skill) => (
            <div key={skill.skill} className={styles.skillItem}>
              <h3>{skill.skill}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigimonProfile;
