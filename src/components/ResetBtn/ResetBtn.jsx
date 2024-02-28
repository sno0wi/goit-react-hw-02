function ResetBtn({ resetFeedback }) {
  return (
    <>
      <button type="button" className="btnReset" onClick={resetFeedback}>
        Reset
      </button>
    </>
  );
}

export default ResetBtn;
