import React from 'react';
import Poll from '../components/poll/Poll';
import Polls from '../components/Polls/Polls';

export default function Home() {
  return (
    <>
      <h1>Home page!!</h1>
      <Poll question={'Is this is it Cheif?'} options={['This aint it cheif', 'This is it Cheif']} /> 

      {/* //this will be the Polls page still need to link to its own page. */}
      <Polls />
    </>
  );
}
