import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './SectionTitle';
import {Notification} from './Notification'

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const total = good + neutral + bad;
  const percentag = (good / total * 100).toFixed(0);
  const handleUpdate = (e) => {
    const { name } = e.currentTarget;
    switch (name) {
      case "good":
        setGood(good + 1)
        break;

      case "neutral":
        setNeutral(neutral + 1)
            break;
        case "bad":
            setBad(bad + 1)
            break;
      default:
        throw new Error("Name doesn't exist");
    }
  }
  return (<>
    <Section title='Please leave feedback'>
      <FeedbackOptions
        onClick={handleUpdate} />
      </Section>
      <Section
      title = 'Statistics'>
         {total ?<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentag={percentag}
        /> : <Notification
          message = 'There is no feedback'
        />}
    </Section>
    </>)
}


