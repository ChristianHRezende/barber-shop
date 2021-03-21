import React, { ReactNode } from 'react';
import { StyledContainer } from './styles';

interface CardProps {
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Card;
