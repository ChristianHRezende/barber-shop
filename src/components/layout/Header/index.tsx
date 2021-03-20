import React, { ReactNode } from 'react';
import { IconHeaderImage } from '../../Image';
import Nav from '../Nav';
import { NavItemType } from '../NavItem/types';
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderImageContainer,
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
          <IconHeaderImage src={image} alt="Barber Icon" />
        </StyledHeaderImageContainer>
        <Nav navItemList={options} />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
