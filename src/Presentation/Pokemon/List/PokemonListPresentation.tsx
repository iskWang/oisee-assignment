import styles from "./styles.module.scss";
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { pokemonApi } from '@/api/pokemon';

const PokemonListPresentation = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ['pokemons', page],
    queryFn: () => pokemonApi.getList(page)
  });

  if (isLoading) return <div>Loading...</div>;

  console.log('Pokemon data:', data);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pokemon List</h1>
      {/* Pokemon list content will be added here */}
    </div>
  );
};

export default PokemonListPresentation;
