import React from 'react';
import { FeedContainer, FeedContent, FeedImage } from '../css/Feed.styled';
import img from '../assets/해바라기.jpeg';
const Feed = () => {
  return (
    <FeedContainer>
      <FeedContent>
        <h2>gg.h.m</h2>
        <FeedImage src={img} alt="feed" />
        <p>오리지널 오디오</p>
      </FeedContent>
    </FeedContainer>
  );
};

export default Feed;