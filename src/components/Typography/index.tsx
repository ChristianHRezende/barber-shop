import React, { ReactNode } from 'react';
import {
  StyledTitle,
  StyledSubTitle,
  StyledParagraphy,
  StyledParagraphyInline,
} from './styles';

interface TypographyProps {
  children: ReactNode;
  type?: 'h1' | 'h2' | 'p' | 'p-inline';
}

const Typography: React.FC<TypographyProps> = ({ type = 'p', children }) => {
  return {
    h1: <StyledTitle>{children}</StyledTitle>,
    h2: <StyledSubTitle>{children}</StyledSubTitle>,
    p: <StyledParagraphy>{children}</StyledParagraphy>,
    'p-inline': <StyledParagraphyInline>{children}</StyledParagraphyInline>,
  }[type];
};

export default Typography;
