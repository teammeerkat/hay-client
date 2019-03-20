import React, { PureComponent } from 'react';
import styles from './Polls.css';

const polls = [
  { question:'Spiders or Snakes?', options:['spiders', 'snakes'] },
  { question:'Spiders or Snakes?', options:['spiders', 'snakes'] },
  { question:'Spiders or Snakes?', options:['spiders', 'snakes'] },
  { question:'Spiders or Snakes?', options:['spiders', 'snakes'] },
  { question:'Spiders or Snakes?', options:['spiders', 'snakes'] }
];

export default class Polls extends PureComponent {
  render() {
    const pollList = polls.map((poll, i) => {
      return <li key={i}>{poll.question}</li>;
    });
    return (
      <ul className={styles.polls}>
        {pollList}
      </ul>
 
    );
  }
}
