import React from 'react';
import { HeaderContainer, Logo, Icons } from '../style/Header.styled';
import logo from '../image/instagram_logo.png';
import heart from '../image/heart.png';
import send from '../image/send.png';

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>
                <img src={logo} alt="Instagram Logo" style={{ height: '30px' }} />
            </Logo>
            <Icons>
                <img src={heart} alt="Heart Icon" style={{ height: '20px' }} />
                <img src={send} alt="Send Icon" style={{ height: '20px', marginLeft: '17px' }} />
            </Icons>
        </HeaderContainer>
    );
}

export default Header;
