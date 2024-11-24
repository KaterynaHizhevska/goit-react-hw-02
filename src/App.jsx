import { useState, useEffect } from 'react'
import './App.css'
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import Feedback from './components/Feedback/Feedback';

function App() {
  const [values, setValues] = useState(() => {
    const savedFeedback = window.localStorage.getItem('feedback');
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

   useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(values));
   }, [values]);
  
  const updateFeedback = feedbackValues => {
    setValues({
      ...values,
      [feedbackValues]: values[feedbackValues] + 1
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;
const positiveFeedback = totalFeedback > 0
  ? Math.round((values.good / totalFeedback) * 100)
  : 0;

  const resetAll = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
     <div className="container">
      <h1 className="title">Sip <span className="title-span">Happens</span> Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options updateValues={updateFeedback}
               total={totalFeedback}
               resetValues={resetAll}/>
      {totalFeedback > 0 ? 
      (<Feedback values={values}
                 total={totalFeedback}
                 percentage={positiveFeedback} />) :
      <Notification message={"No feedback yet"} />
      }
    </div>
  )
}

export default App