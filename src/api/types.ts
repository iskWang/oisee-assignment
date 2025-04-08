// Digimon types
export interface DigimonType {
  type: string;
}

export interface DigimonAttribute {
  attribute: string;
}

export interface DigimonLevel {
  level: string;
}

export interface DigimonSkill {
  skill: string;
  description: string;
}

export interface DigimonDescription {
  language: string;
  description: string;
}

export interface DigimonImage {
  href: string;
}

export interface DigimonDetailResponse {
  name: string;
  images: DigimonImage[];
  types: DigimonType[];
  attributes: DigimonAttribute[];
  levels: DigimonLevel[];
  skills: DigimonSkill[];
  descriptions: DigimonDescription[];
  releaseDate: string;
}

// Pokemon types
export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
  };
}

export interface PokemonSprites {
  front_default: string;
}

export interface PokemonDetailResponse {
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  stats: PokemonStat[];
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
}
