import React, { useState, useEffect, useRef } from 'react';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);
  const intervalId = useRef<number | null>(null);

  useEffect(() => {
    if (running) {
      intervalId.current = setInterval(() => setSeconds(s => s + 1), 1000);
    }
    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [running]);

  return (
    <div style={{ padding: 20, borderRadius: 8, background: '#f8f8fa', boxShadow: '0 1px 7px #ccd2' }}>
      <h3>Timer (useEffect)</h3>
      <span style={{ fontSize: 28, color: '#276' }}>{seconds}s</span>
      <div style={{ marginTop: 10 }}>
        <button onClick={() => setRunning(r => !r)}>
          {running ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  );
};

export default Timer;
