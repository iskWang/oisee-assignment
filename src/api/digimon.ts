import type { DigimonDetailResponse } from "./types";

interface DigimonListResponse {
  pageable: {
    pageNumber: number;
    totalPages: number;
  };
  content: Array<{
    id: number;
    name: string;
    image: string;
  }>;
}

export const digimonApi = {
  getList: async (page: number) => {
    const response = await fetch(
      `https://digi-api.com/api/v1/digimon?page=${page}&pageSize=20`
    );
    return response.json() as Promise<DigimonListResponse>;
  },

  getDetail: async (id: string) => {
    const response = await fetch(`https://digi-api.com/api/v1/digimon/${id}`);
    return response.json() as Promise<DigimonDetailResponse>;
  },
};
