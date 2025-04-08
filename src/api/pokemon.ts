import type { PokemonDetailResponse } from "./types";

interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    name: string;
    url: string;
  }>;
}

export const pokemonApi = {
  getList: async (page: number) => {
    const limit = 20;
    const offset = (page - 1) * limit;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    return response.json() as Promise<PokemonListResponse>;
  },
  
  getDetail: async (id: string) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    return response.json() as Promise<PokemonDetailResponse>;
  }
};
