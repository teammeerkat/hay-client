import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Polls.css';

// const polls = [
//   { question:'Spiders or Snakes?', options:['spiders', 'snakes'] },
//   { question:'Spiders or Snakes?', options:['spiders', 'snakes'] },
//   { question:'Spiders or Snakes?', options:['spiders', 'snakes'] },
//   { question:'Spiders or Snakes?', options:['spiders', 'snakes'] },
//   { question:'Spiders or Snakes?', options:['spiders', 'snakes'] }
// ];

export default class Polls extends PureComponent {
  static propTypes = {
    polls: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const pollList = this.props.polls.map((poll, i) => {
      return <li key={i}>{poll.question}</li>;
    });
    return (
      <ul className={styles.polls}>
        {pollList}
      </ul>
 
    );
  }
}
