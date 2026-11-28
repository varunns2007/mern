import { useState } from 'react';
import './score.css';

function Score() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);

  const isAllOut = wickets >= 10;

  function addRuns(scoredRuns) {
    if (!isAllOut) {
      setRuns((currentRuns) => currentRuns + scoredRuns);
    }
  }

  function addWicket() {
    if (!isAllOut) {
      setWickets((currentWickets) => Math.min(currentWickets + 1, 10));
    }
  }

  function resetScore() {
    setRuns(0);
    setWickets(0);
  }

  return (
    <section className="scoreboard" aria-label="Cricket score">
      <header className="scoreboard-header">
        <p className="scoreboard-label">CURRENT SCORE</p>
        <h1>Cricket <span>Score</span></h1>
      </header>

      <div className="score-display" aria-live="polite">
        <div className="score-stat">
          <span className="score-stat-label">RUNS</span>
          <strong>{runs}</strong>
        </div>
        <div className="score-divider" aria-hidden="true">/</div>
        <div className="score-stat wickets-stat">
          <span className="score-stat-label">WICKETS</span>
          <strong>{wickets}<small> / 10</small></strong>
        </div>
      </div>

      {isAllOut ? (
        <p className="all-out-message">INNINGS COMPLETE <span>ALL OUT</span></p>
      ) : (
        <div className="score-actions" aria-label="Update score">
          {[1, 2, 3, 4, 6].map((scoredRuns) => (
            <button key={scoredRuns} onClick={() => addRuns(scoredRuns)}>
              +{scoredRuns}
            </button>
          ))}
          <button className="wicket-button" onClick={addWicket}>Wicket</button>
        </div>
      )}

      <button className="reset-button" onClick={resetScore}>Reset match</button>
    </section>
  );
}

export default Score;