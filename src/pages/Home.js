import React from 'react';

import HomeContainer from '../containers/HomeContainer';
import SinglePoll from './singlePoll';

export default function Home() {
  return (
    <>
      <h1>Home page!!</h1>
      <HomeContainer />
      <SinglePoll />
    </>
  );
}
