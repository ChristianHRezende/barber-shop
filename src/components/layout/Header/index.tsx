import React, { ReactNode } from 'react';
import { IconHeaderImage } from '../../Image';
import Nav from '../Nav';
import imageBarberIcon from '../../../assets/img/logo.png';

import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderImageContainer,
} from './styles';

interface HeaderProps {
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({}) => {
  const navItemList = [
    {
      value: 'Home',
      href: '/',
    },
    {
      value: 'Products',
      href: '/products',
    },
    {
      value: 'Contact Us',
      href: '#',
    },
  ];

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledHeaderImageContainer>
          <IconHeaderImage src={imageBarberIcon} alt="Barber Icon" />
        </StyledHeaderImageContainer>
        <Nav navItemList={navItemList} />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
