import React, { useState, useMemo, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { getGeminiExplanation } from '../utils/gemini';

function slowFactorial(n: number): number {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    const t = Date.now() + 15;
    while (Date.now() < t) {}
    result *= i;
  }
  return result;
}

const ExpensiveCalc: React.FC = () => {
  const [num, setNum] = useState(8);
  const [other, setOther] = useState(0);
  const [explanation, setExplanation] = useState('');
  const [loadingAI, setLoadingAI] = useState(false);

  const factorial = useMemo(() => slowFactorial(num), [num]);

  const debouncedExplain = useDebounce((n: number, fact: number) => {
    setLoadingAI(true);
    setExplanation('');
    getGeminiExplanation(n, fact)
      .then((exp) => setExplanation(exp))
      .finally(() => setLoadingAI(false));
  }, 800);

  useEffect(() => {
    debouncedExplain(num, factorial);
  }, [num, factorial, debouncedExplain]);

  return (
    <div style={{ padding: 20, background: '#f8f0fa', borderRadius: 8, margin: '20px 0' }}>
      <h3 style={{ color: '#4a90e2' }}>ExpensiveCalc (useMemo + Gemini AI explanation)</h3>

      <label>
        Number (0–15):&nbsp;
        <input
          type="number"
          value={num}
          min={0}
          max={15}
          onChange={(e) => setNum(Math.max(0, Math.min(15, Number(e.target.value))))}
          style={{ width: 60, fontSize: 18 }}
        />
      </label>

      <div style={{ margin: '10px 0' }}>
        Factorial:&nbsp;
        <span style={{ fontWeight: 600, color: '#d5008f', fontSize: 18 }}>{factorial}</span>
      </div>

      <button
        onClick={() => setOther((o) => o + 1)}
        style={{
          marginTop: '10px',
          background: '#e5e0fa',
          border: 0,
          borderRadius: 8,
          padding: '7px 18px',
          cursor: 'pointer',
        }}
      >
        Increment unrelated state: {other}
      </button>

      <div style={{ marginTop: 22 }}>
        <strong>AI Explanation:</strong>
        {loadingAI ? (
          <div style={{ color: '#4a90e2', marginTop: 6 }}>🤖 Generating explanation from Gemini AI...</div>
        ) : (
          <div
            style={{
              marginTop: 6,
              padding: '10px 14px',
              borderRadius: 8,
              background: '#fffbe9',
              color: '#1c1818',
              boxShadow: '0 2px 8px #fecb3680',
              fontSize: 14,
              whiteSpace: 'pre-line',
            }}
          >
            {explanation}
          </div>
        )}
      </div>

      <p style={{ marginTop: 12, color: '#6c5eb6', fontStyle: 'italic', fontSize: 13 }}>
        Gemini AI explains how the factorial was calculated, step by step.
      </p>
    </div>
  );
};

export default ExpensiveCalc;
