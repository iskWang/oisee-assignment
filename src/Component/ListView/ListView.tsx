import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

interface DataItem {
  id: number;
  name: string;
  image: string;
}

interface ListViewProps {
  items: DataItem[] | undefined;
  isLoading: boolean;
  baseUrl: string;
}

const ListView = ({ items, isLoading, baseUrl }: ListViewProps) => {
  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loading}>Loading...</div>
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {items?.map((item) => (
        <Link
          key={item.id}
          to={`${baseUrl}/${item.id}`}
          className={styles.card}
        >
          <div className={styles.imageContainer}>
            <img
              src={item.image}
              loading="lazy"
              alt={item.name}
              className={styles.image}
            />
          </div>
          <h2 className={styles.name}>{item.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default ListView;
