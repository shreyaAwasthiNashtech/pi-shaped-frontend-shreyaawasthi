import React from 'react';

const LazySettings: React.FC = () => {
  return (
    <div
      style={{ margin: '30px', padding: '20px', border: '2px solid #ffe066', borderRadius: '16px' }}
    >
      <h2>Settings</h2>
      <p>This is the lazily loaded settings panel. Optimise your preferences here!</p>
    </div>
  );
};

export default React.memo(LazySettings);
