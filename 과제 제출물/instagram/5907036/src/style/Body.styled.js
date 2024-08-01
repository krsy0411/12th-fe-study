import styled from 'styled-components';

// 회색 테두리 추가
export const BodyContainer = styled.div`
  border-bottom: 1px solid #ddd;
`;

// 이미지 균등하게 배열
export const ImageStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
`;

//
export const StoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 이미지 크기, props로 스타일 결정
export const Story = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid ${({ borderColor }) => borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #fff;
`;

export const StoryImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const StoryText = styled.div`
  margin-top: 5px;
  text-align: center;
  font-size: 9px;
`;