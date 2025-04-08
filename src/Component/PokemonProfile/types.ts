export interface Stat {
  name: string;
  value: number;
}

export interface PokemonProfileProps {
  name: string;
  image: string;
  types: string[];
  height: number;
  weight: number;
  stats: Stat[];
  abilities: string[];
}
