import React, { ReactNode } from 'react';
import { StyledMain } from './styles';

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
