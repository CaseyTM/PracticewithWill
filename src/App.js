import React, { Component } from 'react';
import './App.css';
import {Survey} from './Components/Survey';
class App extends Component {

  constructor(props) {
    super(props);
    
    this.handleInputChange = this.handleInputChange.bind(this);
    
    this.state = {
      arrayOfQuestions:[  
        "This is the first question of the survey.  How do you like it?",
        "What do you think of my webpage?",
        "Who do you think will win the SuperBowl?",
        "What will the score be?"
      ],
      inputText: ""
    }

  }

  handleInputChange(event) {

   this.setState = {
      inputText: event.target.value
    }
  }

  render() {
    return (
      <div className="App">
        <form>
          <input type="text" id="new-question" onChange={ this.handleInputChange } />
        </form>
        <Survey questions={this.state.arrayOfQuestions} />
      </div>
    );
  }
}

export default App;
 