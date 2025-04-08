import DigimonListContainer from '@/Container/Digimon/List/DigimonListContainer';
import DigimonListPresentation from '@/Presentation/Digimon/List/DigimonListPresentation';

export const DigimonListScene = () => {
  return (
    <DigimonListContainer>
      <DigimonListPresentation />
    </DigimonListContainer>
  );
};
