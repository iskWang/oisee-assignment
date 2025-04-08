import { ReactNode } from 'react';

interface PokemonDetailContainerProps {
  children: ReactNode;
}

const PokemonDetailContainer = ({ children }: PokemonDetailContainerProps) => {
  return <>{children}</>;
};

export default PokemonDetailContainer;
