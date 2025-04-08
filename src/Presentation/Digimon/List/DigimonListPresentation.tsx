import styles from "./styles.module.scss";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { digimonApi } from "@/api/digimon";
import Pagination from "@/Component/Pagination/Pagination";
import Navigation from "@/Component/Navigation/Navigation";
import ListView from "@/Component/ListView/ListView";

const DigimonListPresentation = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["digimons", page],
    queryFn: () => digimonApi.getList(page),
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
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
          currentPage={page}
          totalPages={data.pageable.totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default DigimonListPresentation;
