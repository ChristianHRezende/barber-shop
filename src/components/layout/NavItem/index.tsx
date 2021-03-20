import React, { ReactNode } from 'react';
import { StyledNavItem, StyledLink } from './styles';
import { NavItemType } from './types';

interface NavItemProps extends NavItemType {
  children?: ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ value, href = '#' }) => {
  return (
    <StyledNavItem>
      <StyledLink href={href}>{value}</StyledLink>
    </StyledNavItem>
  );
};

export default NavItem;
