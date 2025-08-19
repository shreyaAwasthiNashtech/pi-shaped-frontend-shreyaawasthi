import React, { useState } from 'react';

const getColor = (val: number) =>
  val > 0 ? 'green' : val < 0 ? 'crimson' : 'grey';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 20, marginBottom: 20, borderRadius: 8, background: '#f8f8fa', boxShadow: '0 1px 7px #ccd2' }}>
      <h3>Counter (useState)</h3>
      <span style={{ fontSize: 32, color: getColor(count), margin: '0 12px' }}>{count}</span>
      <div style={{ marginTop: 10 }}>
        <button onClick={() => setCount(c => c + 1)}>+</button>
        <button onClick={() => setCount(c => c - 1)} style={{ margin: '0 10px' }}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
