import React, { PureComponent } from 'react';




const question = 'is this it?';

const options = [
  { option: 'this aint it', votes: 2, id: 1 },
  { option: 'this is it.', votes: 9, id: 2 },
  { option: 'this isnt it.', votes: 2, id: 3 }
];
export default class singlePoll extends PureComponent {


  // counter = (i) => {
  //   console.log(i.votes);
   
  // };
  
  render() {
    const optionList = options.map((option, i) => {
      return <li key={i} onClick={()=>this.counter(i)} >{option.option}</li>;
    });

    return (
      <section>
        <h2>{question}</h2>
        <ul>{optionList}</ul>
      </section>
    
    );
  }


}
