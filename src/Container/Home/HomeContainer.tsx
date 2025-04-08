import { ReactNode } from 'react';

interface HomeContainerProps {
  children: ReactNode;
}

const HomeContainer = ({ children }: HomeContainerProps) => {
  return <>{children}</>;
};

export default HomeContainer;
