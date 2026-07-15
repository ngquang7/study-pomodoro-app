import React from "react";

interface Props {
  onClose: () => void;

    focusTime: number;
        setFocusTime: React.Dispatch<React.SetStateAction<number>>;

    shortBreak: number;
        setShortBreak: React.Dispatch<React.SetStateAction<number>>;

    setSecondsLeft: React.Dispatch<React.SetStateAction<number>>;
}

export default function SettingClock({ onClose, focusTime, setFocusTime, shortBreak, setShortBreak, setSecondsLeft }: Props) {


    const handleSave = () => {
        setSecondsLeft(focusTime * 60);
        setSecondsLeft(shortBreak * 60);
        onClose();
};

  return (
    <div className="overlay">
      <div className="modal">

        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>Pomodoro Settings</h2>

        {/* Focus */}
        <div className="setting-group">
          <div className="row">
            <label className="sub-setting">Focus Duration</label>
            <span>{focusTime} minutes</span>
          </div>

          <input
            type="range"
            min={5}
            max={60}
            value={focusTime}
            onChange={(e) => setFocusTime(Number(e.target.value))}
          />
        </div>

        {/* Short Break */}
        <div className="setting-group">
          <div className="row">
            <label className="sub-setting">Short Break</label>
            <span>{shortBreak} minutes</span>
          </div>

          <input
            type="range"
            min={1}
            max={20}
            value={shortBreak}
            onChange={(e) => setShortBreak(Number(e.target.value))}
          />
        </div>

        <div className="buttons">
          <button className="save-css" onClick={handleSave}>
            Confirm & Save
          </button>
        </div>
      </div>
    </div>
  );
}