import PokemonDetailContainer from '@/Container/Pokemon/Detail/PokemonDetailContainer';
import PokemonDetailPresentation from '@/Presentation/Pokemon/Detail/PokemonDetailPresentation';

export const PokemonDetailScene = () => {
  return (
    <PokemonDetailContainer>
      <PokemonDetailPresentation />
    </PokemonDetailContainer>
  );
};
