import { useEffect } from 'react';

interface TimerDisplayProps {
  secondsLeft: number;
  mode: "focus" | "shortBreak";

}

export default function TimerDisplay({ secondsLeft, mode }: TimerDisplayProps) {
  // Format seconds into MM:SS
  const minutes = Math.floor(secondsLeft / 60);
  const remainingSeconds = secondsLeft % 60;

  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

  // Extra feature: Update the browser tab title with the clock time
  useEffect(() => {
    document.title = `${formattedTime} - Pomodoro`;
  }, [formattedTime]);

  return (
    <div className="timer-circle">
      <div className="status-badge">{mode === "focus" ? "🎯 Focus" : "☕ Break"}</div>
      <h1 className="time-text">{formattedTime}</h1>
      <div className="dots-container">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <p className="block-text">BLOCK 1</p>
    </div>
  );
}