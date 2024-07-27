import styled from 'styled-components';

export const FeedContainer = styled.div`
  background-color: #ffffff;
  color: #000000;
  flex: 1;
  box-sizing: border-box;
  //box로 내가 설정한 div크기 내에서 border와 margin과 paddding을 설정 
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 100%; 핸드폰 기준
  // height: auto;
  // max-width: 375px;
  width: 100%;
  height: auto;
  // @mida (min width:766px);
`;

export const FeedContent = styled.div`
  background-color: #fff;
  // width: 100%;
  width:100%;
  text-align: center;
  // @mida (min width:766px);
`;

export const FeedImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  // @media (min width:766px){
  
  // };
`;