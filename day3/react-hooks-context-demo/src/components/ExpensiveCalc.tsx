import React, { useState, useMemo } from 'react';
import { slowFactorial } from '../utils/factorial';

const ExpensiveCalc: React.FC = () => {
  const [num, setNum] = useState(8);    
  const [count, setCount] = useState(0);

  const factorial = useMemo(() => {
    return slowFactorial(num);
  }, [num]);

  return (
    <div style={{ padding: 20, margin: '20px 0', background: '#f8f0fa', borderRadius: 8, boxShadow: '0 1px 7px #ccd2' }}>
      <h3>ExpensiveCalc (useMemo demo)</h3>
      <p>
        Enter a number (0–15):&nbsp;
        <input
          type="number"
          value={num}
          onChange={e => setNum(Math.max(0, Math.min(15, Number(e.target.value))))}
          min={0}
          max={15}
          style={{ width: 60, fontSize: 18 }}
        />
      </p>
      <p>
        <b>Factorial:</b>{' '}
        <span style={{ fontWeight: 600, color: '#336281ff', fontSize: 18 }}>{factorial}</span>
      </p>

      <button
        onClick={() => setCount(c => c + 1)}
        style={{ marginTop: '10px', background: '#e5e0fa', border: 0, borderRadius: 8, padding: '7px 18px', cursor: 'pointer' }}>
        Increment unrelated count: {count}
      </button>

    </div>
  );
};

export default ExpensiveCalc;
