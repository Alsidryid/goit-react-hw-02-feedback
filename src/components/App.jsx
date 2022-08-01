import React from "react";
import { Statistics } from 'components/Statistics/Statistics';
import {FeedbackOptions} from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


class Counter extends React.Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  onLeaveFeedback = options => {
    this.setState({ [options]: this.state[options] + 1 });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () =>{
    const { good } = this.state;
    const percent =  Math.round(good/this.countTotalFeedback()*100) || 0
    console.log(percent)
    return percent
  }
  
  render(){
    return(
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {this.countTotalFeedback()<= 0 ? <Notification message="There is no feedback"/>  : 
        <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
       />}
        
    
      </Section>
      </>
    )
  }
 }

 export default Counter;