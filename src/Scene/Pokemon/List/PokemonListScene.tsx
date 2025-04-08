import PokemonListContainer from '@/Container/Pokemon/List/PokemonListContainer';
import PokemonListPresentation from '@/Presentation/Pokemon/List/PokemonListPresentation';

export const PokemonListScene = () => {
  return (
    <PokemonListContainer>
      <PokemonListPresentation />
    </PokemonListContainer>
  );
};
