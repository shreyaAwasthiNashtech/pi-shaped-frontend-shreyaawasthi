import React, { useRef } from 'react';

const InputFocus: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div style={{ padding: 20, margin: '20px 0', background: '#f8fcfa', borderRadius: 8 }}>
      <h3>Input Focus (useRef)</h3>
      <input ref={inputRef} type="text" placeholder="Click button to focus" style={{ fontSize: 18, marginRight: 8 }} />
      <button onClick={() => inputRef.current?.focus()}>Focus Input</button>
    </div>
  );
};

export default InputFocus;
