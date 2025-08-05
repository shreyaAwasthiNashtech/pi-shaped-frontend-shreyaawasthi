import React, { useState, useMemo } from 'react';

const expensiveCalculation = (num: number) => {
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
    result += Math.sqrt(num + i);
  }
  return Math.floor(result % 1000);
};

interface CounterProps {
  initial?: number;
}

const Counter: React.FC<CounterProps> = React.memo(({ initial = 0 }) => {
  const [count, setCount] = useState<number>(initial);

  const expensiveValue = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  return (
    <div
      style={{
        margin: '30px',
        padding: '20px',
        border: '2px solid #a0abb8',
        borderRadius: '16px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: '#f7faff',
        boxShadow: '0 2px 12px #a0abb833'
      }}
    >
      <h2 style={{ color: '#277da1', marginTop: 0 }}>Counter</h2>
      <p>
        <b>Current:</b> {count}
      </p>
      <div style={{ display: 'flex', gap: '18px', justifyContent: 'center' }}>
        <button
          onClick={decrement}
          style={{
            padding: '9px 18px',
            background: 'linear-gradient(95deg,#ffb396 0%,#ff6363 100%)',
            border: 'none',
            borderRadius: '10px',
            color: '#fff',
            fontWeight: 700,
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px #ff636355',
            transition: 'background 0.2s,transform 0.15s'
          }}
          onMouseEnter={e =>
            (e.currentTarget.style.background =
              'linear-gradient(95deg,#ffa084 0%,#e05555 100%)')
          }
          onMouseLeave={e =>
            (e.currentTarget.style.background =
              'linear-gradient(95deg,#ffb396 0%,#ff6363 100%)')
          }
        >
          Decrement
        </button>
        <button
          onClick={increment}
          style={{
            padding: '9px 18px',
            background: 'linear-gradient(95deg,#4a90e2 0%, #53b3cb 100%)',
            border: 'none',
            borderRadius: '10px',
            color: '#fff',
            fontWeight: 700,
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px #53b3cb55',
            transition: 'background 0.2s,transform 0.15s'
          }}
          onMouseEnter={e =>
            (e.currentTarget.style.background =
              'linear-gradient(95deg,#3578c3 0%, #63bbd2 100%)')
          }
          onMouseLeave={e =>
            (e.currentTarget.style.background =
              'linear-gradient(95deg,#4a90e2 0%, #53b3cb 100%)')
          }
        >
          Increment
        </button>
      </div>
      <p style={{ marginTop: '12px', fontStyle: 'italic', color: '#7692ff' }}>
        Expensive calc: {expensiveValue}
      </p>
    </div>
  );
});

export default Counter;
