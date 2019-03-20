import React, { PureComponent } from 'react';
export default class PollForm extends PureComponent {
  state = {
    responses: ['sample reaponse1', 'sample 2'],
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
    // const list = document.getElementsByName('responses')[0];
    // const newResponse = this.makeResponse(inputField.value);
    console.log(this.makeResponse(inputField.value));




    // Reset the input field to empty
    inputField.value = '';
  };
  makeResponse = text => {
    const node = document.createElement('li');
    node.innerHTML = text;
    return node;
  }
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
            <ol>

            </ol>
            <fieldset>
              <legend>New Response</legend>
              <input type='text' name='newResponse'></input>
              <button type='button' onClick={this.handleAdd}>Add Response</button>
            </fieldset>
            <button type='submit'>Create Poll</button>
          </form>
        </main>
      </>
    );
  }
}
