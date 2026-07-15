import { useState, useEffect } from 'react';
import './index.css';
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';
import Header from './components/Header';
import SettingClock from './components/SettingClock';
import {ImageUpload} from './components/Custom';

export default function App() {
  const [mode, setMode] = useState<"focus" | "shortBreak">("focus");
  const [focusTime, setFocusTime] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [secondsLeft, setSecondsLeft] = useState(focusTime * 60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState(false);

  // Core countdown logic using useEffect
  useEffect(() => {
    let interval: number | undefined;

    if (isActive && secondsLeft > 0) {
      interval = window.setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsActive(false); // Stop when it hits 00:00
      alert("Time's up! Take a break.");
    }

    // Cleanup interval when component unmounts or state changes
    return () => clearInterval(interval);
  }, [isActive, secondsLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  
  const resetTimer = () => {
    setIsActive(false);
    /* this is WRONG*/ 
    // setSecondsLeft(focusTime * 60);
    setSecondsLeft(mode === 'focus' ? focusTime * 60 : shortBreak * 60);
  };

  const skipSession = () => {
  setIsActive(false);

  if (mode === "focus") {
    setMode("shortBreak");
    setSecondsLeft(shortBreak * 60);
  } else {
    setMode("focus");
    setSecondsLeft(focusTime * 60);
  }
};
  


  return (

    <div className="app-wrapper">
      <Header/> 
      
      <TimerDisplay secondsLeft={secondsLeft} mode={mode} />
      <TimerControls 
        isActive={isActive} 
        onToggle={toggleTimer} 
        onReset={resetTimer} 
        skipSession={skipSession}
      />
        <button  className="setting-css" onClick={() => setShowSettings(true)}>
          ⚙️ Settings
        </button>
      <div>
        {showSettings && (
          <SettingClock
          onClose={() => setShowSettings(false)}
          focusTime={focusTime}
          setFocusTime={setFocusTime}
          shortBreak={shortBreak}
          setShortBreak={setShortBreak}
          setSecondsLeft={setSecondsLeft}
          />
        )}
      </div>
        
      <ImageUpload/>

    </div>
  );
}