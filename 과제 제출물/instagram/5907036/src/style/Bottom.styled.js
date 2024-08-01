import styled from 'styled-components';

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
`;

export const Img = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.div`
    margin-left: 10px;

    p {
        margin: 0;
        line-height: 1.2;
    }
`;

export const Contents = styled.div`
    maring-left: 10px;
    font-size: 12px;
`;

export const Right = styled.div`
    font-size: 12px;
    font-weight: bold;
    padding-right: 30px;
`;

export const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BottomContainer = styled.div`
`;