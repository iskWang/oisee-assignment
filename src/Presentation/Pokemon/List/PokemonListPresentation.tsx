import styles from "./styles.module.scss";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { pokemonApi } from "@/api/pokemon";
import Navigation from "@/Component/Navigation/Navigation";
import DataList from "@/Component/DataList/DataList";
import Pagination from "@/Component/Pagination/Pagination";

const PokemonListPresentation = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["pokemons", page],
    queryFn: () => pokemonApi.getList(page),
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const formattedData = data?.results?.map((pokemon) => ({
    id: Number(pokemon.url.split("/")[6]),
    name: pokemon.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`,
  }));

  return (
    <div className={styles.container}>
      <Navigation />
      <DataList
        items={formattedData}
        isLoading={isLoading}
        baseUrl="/pokemon"
      />
      {data && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(data.count / 20)}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default PokemonListPresentation;
