import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="app">
      <div className="counter-card">
        <h1>React Counter</h1>
        <p className="subtitle">Simple Counter Application</p>

        <div className="count">{count}</div>

        <div className="buttons">
          <button className="decrease" onClick={decrease}>
            − Decrease
          </button>

          <button className="reset" onClick={reset}>
            Reset
          </button>

          <button className="increase" onClick={increase}>
            + Increase
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
