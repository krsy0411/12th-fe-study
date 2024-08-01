import React from 'react';
import { BottomContainer, Left, Img, Text, Contents, Right, Top, Bottom} from '../style/Bottom.styled';
import icon from '../image/fish.png';
import elon from '../image/elon.jpg';


const Footer = () => {
    return (
        <BottomContainer>
            <Top>
                <Left>
                    <Img>
                        <img src={icon} alt="icon" style={{height: '100%'}} />
                    </Img>
                    <Text>
                        제목
                        <Contents>내용</Contents>
                    </Text>
                </Left>
                <Right>
                    <p>. . .</p>
                </Right>
            </Top>
            <Bottom>
                <img src={elon} alt="elon" style={{height: '100%', width: '100%'}} />
            </Bottom>
        </BottomContainer>
    );
}

export default Footer;