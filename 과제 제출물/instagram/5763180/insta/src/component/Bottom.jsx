import React from 'react';
import { BottomNavContainer, NavItem } from '../css/Bottom.styled';

const BottomNav = () => {
  return (
    <BottomNavContainer>
      <NavItem>Home</NavItem>
      <NavItem>Search</NavItem>
      <NavItem>AddFeed</NavItem>
      <NavItem>Reels</NavItem>
      <NavItem>Profile</NavItem>
    </BottomNavContainer>
  );
};

export default BottomNav;