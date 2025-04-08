interface DigimonListResponse {
  pageable: {
    currentPage: number;
    elementsOnPage: number;
    totalElements: number;
    totalPages: number;
  };
  content: Array<{
    id: number;
    name: string;
    image: string;
  }>;
}

interface DigimonDetailResponse {
  id: number;
  name: string;
  images: Array<{
    href: string;
  }>;
}

export const digimonApi = {
  getList: async (page: number) => {
    const response = await fetch(
      `https://digi-api.com/api/v1/digimon?page=${page}`
    );
    return response.json() as Promise<DigimonListResponse>;
  },
  
  getDetail: async (id: string) => {
    const response = await fetch(
      `https://digi-api.com/api/v1/digimon/${id}`
    );
    return response.json() as Promise<DigimonDetailResponse>;
  }
};
