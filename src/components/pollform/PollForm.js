import React, { PureComponent } from 'react';

export default class PollForm extends PureComponent {
  state = {
    responses: [],
    question: ''
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleAdd = event => {
    const currentState = event.target.name;
    const inputField = document.getElementsByName('response');
    console.log(inputField[0].value);
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
