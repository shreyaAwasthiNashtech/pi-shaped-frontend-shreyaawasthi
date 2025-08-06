import React from 'react';
import type { ListItem } from '../types';

// React.memo so it only re-renders when props or handler change
interface Props {
  items: ListItem[];
  onAdd: (label: string) => void;
}

const ListChild: React.FC<Props> = React.memo(({ items, onAdd }) => {
  const [input, setInput] = React.useState('');

  return (
    <div style={{ margin: '12px 0 0 0', background: '#f2fafa', padding: 20, borderRadius: 8 }}>
      <h4>List (memo + useCallback)</h4>
      <ul>
        {items.map(item => <li key={item.id}>{item.label}</li>)}
      </ul>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Add item"/>
      <button
        onClick={() => {
          if (input.trim()) { onAdd(input); setInput(''); }
        }}
        style={{ marginLeft: 8 }}
      >
        Add
      </button>
    </div>
  );
});

export default ListChild;
