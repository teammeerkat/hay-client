import React from 'react';
import PropTypes from 'prop-types';
import styles from './Poll.css';

export default function Poll({ question, options, onClick }) {
  const optionsList = options.map((option, i) => {
    return <li key={i} onClick={onClick}>{option.option}</li>;
  });
  return (
    <section className={styles.poll}>
      <h2>{question}</h2> 
      <ul>{optionsList}</ul>
      
    </section>
  );
}

Poll.propTypes = {
  question: PropTypes.string,
  options: PropTypes.array,
  onClick: PropTypes.func
};
