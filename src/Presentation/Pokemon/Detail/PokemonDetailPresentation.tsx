import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { pokemonApi } from "@/api/pokemon";
import type { PokemonDetailResponse } from "@/api/types";
import Navigation from "@/Component/Navigation/Navigation";
import PokemonProfile from "@/Component/PokemonProfile/PokemonProfile";
import styles from "./styles.module.scss";

const PokemonDetailPresentation = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<PokemonDetailResponse>({
    queryKey: ["pokemon", id],
    queryFn: () => pokemonApi.getDetail(id!),
  });

  return (
    <div className={styles.container}>
      <Navigation
        onBack={() => navigate("/pokemons")}
        detailName={data?.name}
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {!data ? (
            <div>Not found</div>
          ) : (
            <PokemonProfile
              name={data.name}
              image={data.sprites.front_default}
              types={data.types.map((t) => t.type.name)}
              height={data.height}
              weight={data.weight}
              stats={data.stats.map((s) => ({
                name: s.stat.name,
                value: s.base_stat,
              }))}
              abilities={data.abilities.map((a) => a.ability.name)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default PokemonDetailPresentation;
