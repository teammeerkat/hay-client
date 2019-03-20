import React, { PureComponent } from 'react';
import styles from './PollForm.css';
export default class PollForm extends PureComponent {
  state = {
    responses: [],
    question: ''
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleAdd = () => {
    // Update state in this component
    const responses = this.state.responses;
    const inputField = document.getElementsByName('newResponse')[0];
    responses.push(inputField.value);
    this.setState({ responses });

    // Add new response to list
    const li = this.makeResponse(inputField.value);
    const list = document.getElementsByName('list')[0];
    list.appendChild(li);

    // Reset the input field to empty
    inputField.value = '';
  };
  clearResponses = () => {
    this.setState({ responses: [] });
    
    // Remove all list items from the list
    const list = document.getElementsByName('list')[0];
    while(list.hasChildNodes()) {
      list.removeChild(list.childNodes[0]);
    }
  }
  makeResponse = text => {
    const node = document.createElement('li');
    node.innerHTML = text;
    return node;
  }
  render() {
    return (
      <>
        <header>
          <h2 className={styles.h2}>Make a New Poll</h2>
        </header>
        <main>
          <form >
            <label className={styles.questionLabel}>Poll Question:
              <input className={styles.questionInput} type='text' onChange={this.handleChange} name='question'  autoFocus></input>
            </label>
            <ol name='list'></ol>
            <fieldset>
              <legend>New Response</legend>
              <input type='text' name='newResponse'></input>
              <button type='button' onClick={this.handleAdd}>Add Response</button>
              <button type='button' onClick={this.clearResponses}>Clear Responses</button>
            </fieldset>
            <button type='submit'>Create Poll</button>
          </form>
        </main>
      </>
    );
  }
}
