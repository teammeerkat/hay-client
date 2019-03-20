import React from 'react';
import Poll from '../components/poll/Poll';

export default function Home() {
  return (
    <>
      <h1>Home page!!</h1>
      <Poll question={'Is this is it Cheif?'} options={['This aint it cheif', 'This is it Cheif']} /> 
    </>
  );
}
