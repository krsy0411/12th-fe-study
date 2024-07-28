import styled from 'styled-components';

export const StoriesContainer = styled.div`
  background-color: #ffffff;
  color: #000000;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

export const Story = styled.div`
  width: 70px;
  height: 70px;
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