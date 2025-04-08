export interface Skill {
  skill: string;
  description: string;
}

export interface DigimonProfileProps {
  name: string;
  image: string;
  types: string[];
  attributes: string[];
  levels: string[];
  skills: Skill[];
  description?: string;
  releaseDate: string;
}
