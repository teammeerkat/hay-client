import React from 'react';
import Poll from '../components/poll/Poll';
import HomeContainer from '../containers/HomeContainer';


export default function Home() {
  return (
    <>

      <h1>Home page!!</h1>
      {/* //this will be the Polls page still need to link to its own page. */}
      <HomeContainer />
    </>
  );
}
