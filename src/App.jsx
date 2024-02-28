import { useEffect, useState } from 'react';
import './App.css';
import Description from './components/Description/Description.jsx';
import Options from './components/Options/Options.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import Notification from './components/Notification/Notification.jsx';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(initialState);
  const updateFeedback = feedbackType => {
    setFeedback(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
    saveToLocalStorage();
  };

  const resetFeedback = () => {
    setFeedback(initialState);
    localStorage.removeItem('feedback');
  };

  const isShowFeedback = Object.values(feedback).some(value => value > 0);
  const totalFeedback = Object.values(feedback).reduce(
    (acc, val) => acc + val,
    0
  );

  const positiveFeedback = () => {
    if (feedback && totalFeedback > 0) {
      return Math.round(
        ((feedback.good + feedback.neutral) / totalFeedback) * 100
      );
    }
    return 0;
  };

  const saveToLocalStorage = () => {
    try {
      localStorage.setItem('feedback', JSON.stringify(feedback));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  useEffect(() => {
    const savedFeedback = localStorage.getItem('feedback');

    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  return (
    <>
      <Description />
      <Options
        initialState={initialState}
        updateFeedback={updateFeedback}
        isShowFeedback={isShowFeedback}
        resetFeedback={resetFeedback}
      />
      {isShowFeedback ? (
        <>
          <Feedback
            feedback={feedback}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        </>
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
