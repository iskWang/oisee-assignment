import { ReactNode } from 'react';

interface PokemonListContainerProps {
  children: ReactNode;
}

const PokemonListContainer = ({ children }: PokemonListContainerProps) => {
  return <>{children}</>;
};

export default PokemonListContainer;
