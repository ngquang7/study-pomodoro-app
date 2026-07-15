interface TimerControlsProps {
  isActive: boolean;
  onToggle: () => void;
  onReset: () => void;
  skipSession: () => void;
}

export default function TimerControls({ isActive, onToggle, onReset, skipSession }: TimerControlsProps) {
  return (
    <div className="controls-container">
      {/* Play / Pause Button */}
      <button className={`btn-main ${isActive ? 'paused' : ''}`} onClick={onToggle}>
        {isActive ? (
          <span className="pause-icon">❚❚</span>) : (<span className="play-icon" style={{fontSize: '25px', marginBottom: '3px', marginLeft: '4px'}}>▶</span>)}
      </button>

      {/* Skip/Next Button */}
      <button className="btn-secondary" onClick={skipSession}>
        <span>⏭</span>
      </button>

      {/* Reset Button */}
      <button className="btn-secondary" onClick={onReset}>
        <span>⟳</span>
      </button>
    </div>
  );
}