import { useRef } from 'react';
import grindAudio from '../assets/grind.mp3'; // Adjust this path to where your audio file actually lives

export default function HeaderCard() {
  // 1. Create a reference pointer directly to the audio element
  const audioRef = useRef<HTMLAudioElement>(null);

  // 2. Play / Pause Handler
  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  // 3. Reset Handler
  const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Rewind to start
      audioRef.current.play();          // Immediately playback
    }
  };

  return (
  // <div className="box-header">
    <div className="top-card">
      <div className="icon-box"></div>

      <div className="text-top-card">
        <div style={{ letterSpacing: '1px' }}>FOCUS SPACE</div>
        <div 
          style={{ 
            fontSize: '10px', 
            letterSpacing: '2px', 
            color: '#6C727F', 
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" 
          }}
        >
          LOCK IN
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '5px' }}>
          
          <audio ref={audioRef} src={grindAudio} preload="auto" />
          
          
          <button 
            className="motivation-button" 
            title="damn button"
            onClick={toggleAudio}
          >
            😈
          </button>
          
          <button
            className="btn-second" 
            title="Reset motivation audio"
            onClick={resetAudio}
          >
            ↻
          </button>
        </div>
      </div>
    </div>
  // </div>
  );
}