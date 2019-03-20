import React from 'react';
import PropTypes from 'prop-types';
import styles from './Poll.css';

export default function Poll({ question, options }) {
  const optionsList = options.map((option, i) => {
    return <li key={i}>{option}</li>;
  });
  return (
    <section className={styles.poll}>
      <h2>{question}</h2> 
      <ul>{optionsList}</ul>
      
    </section>
  );
}

Poll.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};
