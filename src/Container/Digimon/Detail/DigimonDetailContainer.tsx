import { ReactNode } from 'react';

interface DigimonDetailContainerProps {
  children: ReactNode;
}

const DigimonDetailContainer = ({ children }: DigimonDetailContainerProps) => {
  return <>{children}</>;
};

export default DigimonDetailContainer;
