import { SectionBox } from './App.styled';
import Section from './Section/section'
import React from 'react';
import Notification from './Notification/notification';
import FeedbackOptions from './FeedbackOptions/feedbackOptions';
import Statistics from './Statistics/statistics';
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  countFeedback = e => {
    this.setState(prevState => {
      return {
        [e]: prevState[e] + 1,
        
      };
    });
  };
  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.total + 1,
      };
    });
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {

      return {
        positivePercentage: (prevState.good / prevState.total) * 100,
      };
    });
  };
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <SectionBox>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.countFeedback}
            onTotalCount={this.countTotalFeedback}
            onTotalPercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
        <Notification message="There is no feedback" state={this.state.total} />
        {this.state.total > 0 && (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </SectionBox>
    );
  }
}
export default App;
