import { Link, useLocation } from "react-router-dom";
import cx from "classnames";
import styles from "./styles.module.scss";

interface NavigationProps {
  onBack?: () => void;
  detailName?: string;
}

const Navigation = ({ onBack, detailName }: NavigationProps) => {
  const location = useLocation();

  // 如果是詳情頁面，顯示返回箭頭和名稱
  if (onBack && detailName) {
    return (
      <nav className={styles.nav}>
        <button onClick={onBack} className={styles.backButton}>
          <img
            src="https://cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/arrow-left.svg"
            alt="Back"
          />
          <span className={styles.detailName}>{detailName}</span>
        </button>
      </nav>
    );
  }

  // 如果是列表頁面，顯示導航
  return (
    <nav className={styles.nav}>
      <div className={styles.breadcrumbs}>
        <Link to="/" className={styles.homeLink}>
          <img
            src="https://cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg"
            alt="Home"
          />
        </Link>
        <div className={styles.menu}>
          <Link
            to="/pokemons"
            className={cx(styles.menuLink, {
              [styles.active]: location.pathname.startsWith("/pokemons"),
            })}
          >
            Pokemon
          </Link>
          <Link
            to="/digimons"
            className={cx(styles.menuLink, {
              [styles.active]: location.pathname.startsWith("/digimons"),
            })}
          >
            Digimon
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
