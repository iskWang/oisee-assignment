import styles from "./styles.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams, useNavigate } from "react-router-dom";
import { digimonApi } from "@/api/digimon";
import Pagination from "@/Component/Pagination/Pagination";
import Navigation from "@/Component/Navigation/Navigation";
import ListView from "@/Component/ListView/ListView";

const DigimonListPresentation = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentPage = Number(searchParams.get("page")) || 1;

  const { data, isLoading } = useQuery({
    queryKey: ["digimons", currentPage],
    queryFn: () => digimonApi.getList(currentPage),
  });

  const handlePageChange = (newPage: number) => {
    navigate(`/digimons?page=${newPage}`);
  };

  return (
    <div className={styles.container}>
      <Navigation />
      <ListView
        items={data?.content}
        isLoading={isLoading}
        baseUrl="/digimon"
      />
      {data?.pageable && (
        <Pagination
          currentPage={currentPage}
          totalPages={data.pageable.totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default DigimonListPresentation;
