import React, { PureComponent } from 'react';

export default class PollForm extends PureComponent {
  state = {
    responses: [],
    question: ''
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleAdd = () => {
    const responses = this.state.responses;
    let inputField = document.getElementsByName('response')[0];
    responses.push(inputField.value);
    this.setState({ responses });
    inputField.value = '';
  };
  render() {
    return (
      <>
        <header>
          <h2>Poll Form</h2>
        </header>
        <main>
          <form>
            <label>Poll Question:
              <textarea onChange={this.handleChange} name='question'></textarea>
            </label>
            <fieldset>
              <legend>New Responses</legend>
              <input type='text' name='response'></input>
              <button type='button' onClick={this.handleAdd}>Add Response</button>
            </fieldset>
            <button type='submit'>Create Poll</button>
          </form>
        </main>
      </>
    );
  }
}
