import React from 'react';
import { FooterContainer } from '../style/Footer.styled';
import footer1 from '../image/footer1.png';
import footer2 from '../image/footer2.png';
import footer3 from '../image/footer3.png';
import footer4 from '../image/footer4.png';
import footer5 from '../image/fish.png';

const Footer = () => {
    return (
        <FooterContainer>
            <img src={footer1} alt='footer1' />
            <img src={footer2} alt='footer2' />
            <img src={footer3} alt='footer3' />
            <img src={footer4} alt='footer4' />
            <img src={footer5} alt='footer5' />
        </FooterContainer>
    )
}

export default Footer;