import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;

    img {
        height: 20px;
        width: 20px;
    }
    
    img:last-child {
        border-radius: 50%;
    }
`;
