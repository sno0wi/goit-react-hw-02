function Feedback({ feedback, totalFeedback, positiveFeedback }) {
  return (
    <>
      {Object.keys(feedback).map(key => {
        return (
          <p key={key}>
            {key}:{feedback[key]}
          </p>
        );
      })}
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback()}%</p>
    </>
  );
}

export default Feedback;
