import React, { ReactNode } from 'react';
import {
  StyledFooter,
  StyledFooterContainer,
  StyleFooterDetailContainer,
  StyleFooterDetailText,
} from './styles';

interface FooterProps {
  children?: ReactNode;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer className="footer-container">
        <StyleFooterDetailContainer className="footer-detail-container">
          <StyleFooterDetailText>
            Rua ascascascacaca, n° 500.
          </StyleFooterDetailText>
          <StyleFooterDetailText>São Paulo - SP.</StyleFooterDetailText>
          <StyleFooterDetailText>©Copyright</StyleFooterDetailText>
        </StyleFooterDetailContainer>
      </StyledFooterContainer>
    </StyledFooter>
  );
};

export default Footer;
