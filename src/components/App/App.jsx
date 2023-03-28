import { SectionBox } from './App.styled';
import { useEffect, useRef, useState } from 'react';
import Section from './Section/section';
import React from 'react';
import Notification from './Notification/notification';
import FeedbackOptions from './FeedbackOptions/feedbackOptions';
import Statistics from './Statistics/statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);
  const a = useRef(true);
  const b = useRef(true);
  useEffect(() => {
    if (a.current) {
      a.current = false;
      return;
    }
    setTotal(prevState => prevState + 1);
  }, [good, neutral, bad]);

  useEffect(() => {
    if (b.current) {
      b.current = false;
      return;
    }
    setPositivePercentage((good / total) * 100);
  }, [good, total]);

  const handleChange = feedBack => {
    switch (feedBack) {
      case 'good':
        return setGood(prevState => prevState + 1);
      case 'neutral':
        return setNeutral(prevState => prevState + 1);
      case 'bad':
        return setBad(prevState => prevState + 1);
      default:
        throw new Error('oh no');
    }
  };

  return (
    <SectionBox>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleChange}
        />
      </Section>
      <Notification message="There is no feedback" state={total} />
      {total > 0 && (
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
