import React, { ReactNode } from 'react';
import { StyledNav } from './styles';
import NavItem from '../NavItem';
import { NavItemType } from '../NavItem/types';

interface NavProps {
  navItemList: Array<NavItemType>;
  children?: ReactNode;
}

const Nav: React.FC<NavProps> = ({ navItemList = [] }) => {
  const renderItem = (item: NavItemType) => {
    const { value, href } = item;
    return <NavItem value={value} href={href} />;
  };

  return <StyledNav>{navItemList.map(item => renderItem(item))}</StyledNav>;
};

export default Nav;
