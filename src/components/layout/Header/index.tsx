import React, { ReactNode } from 'react';
import Nav from '../Nav';
import { NavItemType } from '../NavItem/types';
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderImageContainer,
  StyledImageHeader,
} from './styles';

interface HeaderProps {
  children?: ReactNode;
  options: Array<NavItemType>;
  image: string;
}

const Header: React.FC<HeaderProps> = ({ image, options }) => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledHeaderImageContainer>
          <StyledImageHeader src={image} alt="Barber Icon" />
        </StyledHeaderImageContainer>
        <Nav navItemList={options} />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
