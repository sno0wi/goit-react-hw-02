import ResetBtn from '../ResetBtn/ResetBtn.jsx';

function Options({
  initialState,
  updateFeedback,
  isShowFeedback,
  resetFeedback,
}) {
  return (
    <>
      {Object.keys(initialState).map(key => {
        return (
          <button
            key={key}
            type="button"
            onClick={() => {
              updateFeedback(key);
            }}
          >
            {key}
          </button>
        );
      })}
      {isShowFeedback && <ResetBtn resetFeedback={resetFeedback} />}
    </>
  );
}

export default Options;
