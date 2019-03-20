import React from 'react';
import renderer from 'react-test-renderer';
import Poll from './Poll';
describe('Polls Test', () => {
  it('Renders list of polls', () => {

    const tree = renderer.create(
      <Poll question={'some Question'} options={['option1', 'option2']} /> 
    );
    expect(tree).toMatchSnapshot();
  });
});
