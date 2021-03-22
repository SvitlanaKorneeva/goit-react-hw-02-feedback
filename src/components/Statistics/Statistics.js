import React, { Component } from "react";
import s from "./Statistics.module.css";

class Statistics extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  };
  
  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good +1,

    }))
  };
  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral +1,

    }))
  };
  
  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad +1,

    }))
  };

  render() {
  console.log(this.state)
  return (
    
  <div>
      <h2>Please leave feedback</h2>
      <div className={s.buttons}>
        <button type="button" onClick={this.handleGood }>Good</button>
        <button type="button" onClick={this.handleNeutral}>Neutral</button>
        <button type="button" onClick={this.handleBad }>Bad</button>
      </div>
      <h2>Statistics</h2>
      <div>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}  </p>
        <p>Bad: {this.state.bad} </p>
      </div>
    </div>
  );
  
}
}
  
export default Statistics;