import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { digimonApi } from "@/api/digimon";
import type { DigimonDetailResponse } from "@/api/types";
import Navigation from "@/Component/Navigation/Navigation";
import DigimonProfile from "@/Component/DigimonProfile/DigimonProfile";
import styles from "./styles.module.scss";

const DigimonDetailPresentation = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<DigimonDetailResponse>({
    queryKey: ["digimon", id],
    queryFn: () => digimonApi.getDetail(id!),
  });

  return (
    <div className={styles.container}>
      <Navigation onBack={() => navigate(-1)} detailName={data?.name} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {!data ? (
            <div>Not found</div>
          ) : (
            <DigimonProfile
              name={data.name}
              image={data.images[0].href}
              types={data.types.map((type) => type.type)}
              attributes={data.attributes.map((attr) => attr.attribute)}
              levels={data.levels.map((level) => level.level)}
              skills={data.skills.slice(0, 6).map((skill) => ({
                skill: skill.skill,
                description: skill.description,
              }))}
              description={
                data.descriptions.find((d) => d.language === "en_us")
                  ?.description
              }
              releaseDate={data.releaseDate}
            />
          )}
        </>
      )}
    </div>
  );
};

export default DigimonDetailPresentation;
