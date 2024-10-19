import { useState } from "react";
import { useCountdown } from "react-smart-utils";
import "./App.css";

function App() {
  const [endTime, setEndTime] = useState<number | null>(null);

  const countdown = useCountdown(endTime, {
    interval: 1000,
    format: 'mm:ss',
    onTick: () => {
      console.log(`Time remaining: ${countdown} seconds`);
    },
    onComplete: () => {
      console.log("Countdown completed!");
    },
  });

  const startCountdown = () => {
    const futureTime = Date.now() + 120 * 5000; 
    setEndTime(futureTime);
  };

  return (
    <>
      <div>
        <h1>Countdown Timer</h1>
        {countdown !== null ? (
          <p>Time remaining: {countdown} seconds</p>
        ) : (
          <p>Countdown is not active.</p>
        )}
        <button onClick={startCountdown}>Start Countdown</button>
      </div>
    </>
  );
}

export default App;
