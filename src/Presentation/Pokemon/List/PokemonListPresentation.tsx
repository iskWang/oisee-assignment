import styles from "./styles.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams, useNavigate } from "react-router-dom";
import { pokemonApi } from "@/api/pokemon";
import Navigation from "@/Component/Navigation/Navigation";
import ListView from "@/Component/ListView/ListView";
import Pagination from "@/Component/Pagination/Pagination";

const PokemonListPresentation = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentPage = Number(searchParams.get("page")) || 1;

  const { data, isLoading } = useQuery({
    queryKey: ["pokemons", currentPage],
    queryFn: () => pokemonApi.getList(currentPage),
  });

  const handlePageChange = (newPage: number) => {
    navigate(`/pokemons?page=${newPage}`);
  };

  const formattedData = data?.results?.map((pokemon) => ({
    id: Number(pokemon.url.split("/")[6]),
    name: pokemon.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      pokemon.url.split("/")[6]
    }.png`,
  }));

  return (
    <div className={styles.container}>
      <Navigation />
      <ListView
        items={formattedData}
        isLoading={isLoading}
        baseUrl="/pokemon"
      />
      {data && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(data.count / 20)}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default PokemonListPresentation;
