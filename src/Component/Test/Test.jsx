import React, { useEffect, useState, useRef } from 'react';
import '../Test/style.css';
import { ButtonHome } from './ButtonHome/ButtonHome';

const Test = () => {
  const [buttonActive, setButtonActive] = useState(false);
  const [buttonDone, setButtonDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const buttonRef = useRef(null);
  const restartButtonRef = useRef(null);

  const handleClick = async (event) => {
    event.preventDefault();

    if (!buttonActive && !buttonDone) {
      setButtonActive(true);

      try {
        const totalSize = 100;
        let downloadedSize = 0;

        const interval = setInterval(() => {
          downloadedSize += 10;
          const newProgress = (downloadedSize / totalSize) * 100;

          setProgress(newProgress);

          if (newProgress >= 100) {
            clearInterval(interval);
            setButtonDone(true);
            setButtonActive(false);
          }
        }, 1000);
      } catch (error) {
        console.error('Download failed:', error);
        setButtonActive(false);
      }
    }
  };

  const handleRestart = () => {
    setButtonDone(false);
    setProgress(0);
  };

  useEffect(() => {
    const button = buttonRef.current;
    button?.addEventListener('click', handleClick);

    const restartButton = restartButtonRef.current;
    restartButton?.addEventListener('click', handleRestart);

    return () => {
      button?.removeEventListener('click', handleClick);
      restartButton?.removeEventListener('click', handleRestart);
    };
  }, []);

  return (
    <div>
      <a
        ref={buttonRef}
        className={`dl-button ${buttonActive ? 'active' : ''} ${buttonDone ? 'done' : ''}`}
        href="#"
        onClick={handleClick}
      >
        <div>
          <div className="icon">
            <div>
              <svg className="arrow" viewBox="0 0 20 18" fill="currentColor">
                <polygon points="8 0 12 0 12 9 15 9 10 14 5 9 8 9"></polygon>
              </svg>
              <svg className="shape" viewBox="0 0 20 18" fill="currentColor">
                <path d="M4.82668561,0 L15.1733144,0 C16.0590479,0 16.8392841,0.582583769 17.0909106,1.43182334 L19.7391982,10.369794 C19.9108349,10.9490677 19.9490212,11.5596963 19.8508905,12.1558403 L19.1646343,16.3248465 C19.0055906,17.2910371 18.1703851,18 17.191192,18 L2.80880804,18 C1.82961488,18 0.994409401,17.2910371 0.835365676,16.3248465 L0.149109507,12.1558403 C0.0509788145,11.5596963 0.0891651114,10.9490677 0.260801785,10.369794 L2.90908938,1.43182334 C3.16071592,0.582583769 3.94095214,0 4.82668561,0 Z"></path>
              </svg>
            </div>
            <span></span>
          </div>
          <div className="label">
            <div className={`show default ${buttonActive ? 'hide' : ''}`}>Tải xuống</div>
            <div className={`state ${buttonActive ? 'show' : ''}`}>
              <div className="counter">
                <ul>
                  <li style={{ display: 'block' }}>{progress}%</li>
                </ul>
              </div>
              <span>Hoàn thành</span>
            </div>
          </div>
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </a>
      {buttonDone && (
        <button ref={restartButtonRef} className="restart">
          Restart
        </button>
      )}
      <ButtonHome />
    </div>
  );
};

export default Test;