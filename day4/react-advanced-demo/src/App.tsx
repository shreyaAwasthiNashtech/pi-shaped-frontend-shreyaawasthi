import React, { useState, Suspense } from 'react';
import Counter from './components/Counter';

const LazySettings = React.lazy(() => import('./components/LazySettings'));

const App: React.FC = () => {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings((prev) => !prev);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #e0ecf7 0%, #b7e2f0 100%)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <main
        style={{
          maxWidth: '720px',
          width: '100%',
          border: '5px solid #4a90e2',
          borderRadius: '32px',
          background: '#fff',
          boxShadow: '0 8px 36px rgba(74, 144, 226, 0.22)',
          padding: '48px 32px 40px 32px',
          textAlign: 'center',
          transition: 'box-shadow 0.3s',
        }}
      >
        <h1
          style={{
            fontSize: '2.6rem',
            color: '#277da1',
            fontWeight: 900,
            textShadow: '2px 3px 20px #deedf7, 1px 1px 6px #20406016',
            marginBottom: 12,
            letterSpacing: '1px',
          }}
        >
          Advanced React Demo
        </h1>
        <p
          style={{
            fontSize: '1.15rem',
            color: '#3578c3',
            fontWeight: 600,
            marginBottom: 28,
            textShadow: '0 1.5px 9px #c3e8ef80',
          }}
        >
          Explore memoization, lazy loading, and interactive UI!
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Counter />

          <button
            onClick={toggleSettings}
            data-testid="settings-toggle"
            style={{
              marginTop: '30px',
              padding: '14px 36px',
              fontSize: '1.12rem',
              fontWeight: 700,
              color: '#fff',
              background:
                showSettings
                  ? 'linear-gradient(93deg,#ff7676 0%,#f79a7d 100%)'
                  : 'linear-gradient(93deg,#4a90e2 0%,#53b3cb 100%)',
              border: 'none',
              borderRadius: '16px',
              cursor: 'pointer',
              boxShadow: showSettings
                ? '0 6px 20px #ff767666'
                : '0 6px 20px #53b3cb88',
              transition:
                'background 0.3s, box-shadow 0.3s, transform 0.15s',
              outline: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = showSettings
                ? 'linear-gradient(93deg,#e55656 0%,#f79a7d 100%)'
                : 'linear-gradient(93deg,#3578c3 0%,#4eb1b7 100%)';
              e.currentTarget.style.transform = 'scale(1.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = showSettings
                ? 'linear-gradient(93deg,#ff7676 0%,#f79a7d 100%)'
                : 'linear-gradient(93deg,#4a90e2 0%,#53b3cb 100%)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            {showSettings ? 'Hide Settings' : 'Show Settings'}
          </button>

          <Suspense fallback={<div style={{ marginTop: '28px' }}>Loading Settings…</div>}>
            {showSettings && (
              <div style={{ marginTop: '40px' }}>
                <LazySettings />
              </div>
            )}
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default App;
