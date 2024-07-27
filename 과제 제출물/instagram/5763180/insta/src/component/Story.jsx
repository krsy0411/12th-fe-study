import React from 'react';
import { StoriesContainer, Story, StoryImage } from '../css/Story.styled';
import img1 from '../assets/내 스토리.jpeg';
import img2 from '../assets/친구.jpeg';
import img3 from '../assets/친한 친구1.jpeg';
import img4 from '../assets/친한 친구2.jpeg';

const storiesData = [
  { id: 1, name: '내 스토리', image: img1, borderColor: 'gray' },
  { id: 2, name: '친구 스토리 1', image: img2, borderColor: 'pink' },
  { id: 3, name: '친한 친구 스토리 1', image: img3, borderColor: 'lightgreen' },
  { id: 4, name: '친한 친구 스토리 2', image: img4, borderColor: 'lightgreen' },
];

const Stories = () => {
  return (
    <StoriesContainer>
      {storiesData.map((story) => (
        <Story key={story.id} borderColor={story.borderColor}>
          <StoryImage src={story.image} alt={story.name} />
        </Story>
      ))}
    </StoriesContainer>
  );
};

export default Stories;