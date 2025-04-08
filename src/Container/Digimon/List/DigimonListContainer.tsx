import { ReactNode } from 'react';

interface DigimonListContainerProps {
  children: ReactNode;
}

const DigimonListContainer = ({ children }: DigimonListContainerProps) => {
  return <>{children}</>;
};

export default DigimonListContainer;
