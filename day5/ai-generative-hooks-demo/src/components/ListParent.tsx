import React, { useState, useCallback } from 'react';
import ListChild from './ListChild';
import type { ListItem } from '../types';

const ListParent: React.FC = () => {
  const [items, setItems] = useState<ListItem[]>([
    { id: 1, label: "First" }
  ]);

  // useCallback memoizes the add handler (will keep same reference unless items changes)
  const handleAdd = useCallback(
    (label: string) => {
      setItems(prev => [...prev, { id: prev.length + 1, label }]);
    },
    [setItems]
  );

  return (
    <div style={{ margin: '20px 0', background: '#fcf9fa', padding: 20, borderRadius: 8 }}>
      <ListChild items={items} onAdd={handleAdd} />
    </div>
  );
};

export default ListParent;
