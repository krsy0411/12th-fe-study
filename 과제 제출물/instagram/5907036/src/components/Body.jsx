import React from 'react';
import { BodyContainer, ImageStyle, StoryWrapper, Story, StoryImage, StoryText } from '../style/Body.styled';
import img from '../image/user.png';

const storiesData = [
  { name: '내 스토리', image: img, isFriend: false },
  { name: '친구 1', image: img, isFriend: true },
  { name: '모르는 사람', image: img, isFriend: false },
  { name: '친구 2', image: img, isFriend: true },
];

const Body = () => {
  return (
    <BodyContainer>
      <ImageStyle>
        {storiesData.map((story, index) => (
          <StoryWrapper key={index}>
            <Story borderColor={story.isFriend ? 'green' : 'gray'}>
              <StoryImage src={story.image} alt={story.name} />
            </Story>
            <StoryText>{story.name}</StoryText>
          </StoryWrapper>
        ))}
      </ImageStyle>
    </BodyContainer>
  );
};

export default Body;
