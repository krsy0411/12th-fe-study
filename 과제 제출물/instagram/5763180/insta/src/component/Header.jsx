import React from 'react';
import { Head, Logo, IconContainer, Icon } from '../css/Header.styled';
import { FaHeart, FaPaperPlane } from 'react-icons/fa';

const Header = () => {
  return (
    <Head>
      <Logo>Instagram</Logo>
      <IconContainer>
        <Icon>
          <FaHeart />
        </Icon>
        <Icon>
          <FaPaperPlane />
        </Icon>
      </IconContainer>
    </Head>
  );
};

export default Header;