import React, { useRef, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { getGeminiExplanation } from '../utils/gemini';

const InputFocus: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fieldLabel, setFieldLabel] = useState('');
  const [aiSuggestions, setAiSuggestions] = useState('');
  const [loadingAI, setLoadingAI] = useState(false);
  const [errorAI, setErrorAI] = useState<string | null>(null);

  // Debounced AI call when fieldLabel changes
  const debouncedGetSuggestions = useDebounce((label: string) => {
    if (!label.trim()) {
      setAiSuggestions('');
      setErrorAI(null);
      return;
    }
    setLoadingAI(true);
    setAiSuggestions('');
    setErrorAI(null);

    const prompt = `Suggest validation rules, valid example inputs, and common pitfalls for a form field labeled "${label}". Provide a clear, concise list.`;

    // Call with ONLY custom prompt, ignoring factorial params
    getGeminiExplanation(-1, -1, prompt)
      .then((suggestions) => {
        setAiSuggestions(suggestions);
      })
      .catch(() => {
        setErrorAI('AI suggestion generation failed.');
      })
      .finally(() => {
        setLoadingAI(false);
      });
  }, 800);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFieldLabel(val);
    debouncedGetSuggestions(val);
  };

  return (
    <div style={{ padding: 20, margin: '20px 0', background: '#f8fcfa', borderRadius: 8 }}>
      <h3>Input Focus (useRef) + AI Validation Suggestions</h3>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter form field label"
        value={fieldLabel}
        onChange={handleInputChange}
        style={{ fontSize: 18, marginRight: 8, width: '60%' }}
      />
      <button onClick={() => inputRef.current?.focus()} style={{ padding: '6px 14px', fontSize: 16 }}>
        Focus Input
      </button>

      <div style={{ marginTop: 20 }}>
        <strong>AI Suggestions:</strong>
        {loadingAI && <p style={{ color: '#3367d6' }}>🤖 Generating validation suggestions...</p>}
        {errorAI && <p style={{ color: 'crimson' }}>{errorAI}</p>}
        {!loadingAI && !errorAI && aiSuggestions && (
          <pre
            style={{
              backgroundColor: '#fff',
              padding: 12,
              borderRadius: 8,
              border: '1px solid #ccc',
              whiteSpace: 'pre-wrap',
              fontSize: 14,
              lineHeight: 1.4,
              marginTop: 8,
              userSelect: 'text',
            }}
          >
            {aiSuggestions}
          </pre>
        )}
      </div>
    </div>
  );
};

export default InputFocus;
