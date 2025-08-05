import { useEffect, useState } from 'react';

const CSRPage = () => {
  const [fruits, setFruits] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFruits = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/fruits');
      if (!res.ok) throw new Error('Failed to fetch fruits');
      const data = await res.json();
      setFruits(data);
    } catch (err) {
      setError((err as Error).message);
      setFruits([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <main
      style={{
        minHeight: '90vh',
        maxWidth: '600px',
        margin: '3rem auto',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: 'center',
        padding: '0 1rem',
      }}
    >
      <h1 style={{ color: '#277da1', fontWeight: 900, fontSize: '2.8rem', marginBottom: '0.2rem' }}>
        Client-Side Rendered Fruits
      </h1>
      <p style={{ color: '#4a90e2', marginBottom: '1.8rem', fontWeight: 600, textShadow:'0 1px 3px #cde7ff' }}>
        Data fetched on the client with React <code>useEffect</code>.
      </p>

      <button
        onClick={fetchFruits}
        disabled={loading}
        style={{
          cursor: loading ? 'not-allowed' : 'pointer',
          background: '#4a90e2',
          color: '#fff',
          border: 'none',
          padding: '10px 26px',
          borderRadius: '16px',
          fontSize: '1.1rem',
          fontWeight: '700',
          boxShadow: '0 6px 20px rgba(74, 144, 226, 0.3)',
          marginBottom: '2rem',
          transition: 'background-color 0.3s, box-shadow 0.3s',
          userSelect: 'none',
          outline: 'none',
        }}
        onMouseEnter={e => {
          if (!loading) {
            e.currentTarget.style.backgroundColor = '#3578c3';
            e.currentTarget.style.boxShadow = '0 8px 26px rgba(53, 120, 195, 0.45)';
          }
        }}
        onMouseLeave={e => {
          if (!loading) {
            e.currentTarget.style.backgroundColor = '#4a90e2';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(74, 144, 226, 0.3)';
          }
        }}
      >
        {loading ? 'Loading...' : 'Refresh Fruits'}
      </button>

      {error && (
        <p style={{ color: '#ce2246', marginBottom: '1rem', fontWeight: 600 }}>
          Error: {error}
        </p>
      )}

      {!loading && fruits.length === 0 && !error && <p>No fruits available.</p>}

      {loading && (
        <div style={{ margin: '3rem 0' }}>
          <div className="spinner" />
          <style jsx>{`
            .spinner {
              margin: 0 auto;
              width: 48px;
              height: 48px;
              border: 6px solid #bbe1fa;
              border-top-color: #4a90e2;
              border-radius: 50%;
              animation: spin 1.2s linear infinite;
            }
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

      {!loading && fruits.length > 0 && (
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            maxWidth: '320px',
            margin: '0 auto',
            textAlign: 'left',
            borderRadius: '14px',
            boxShadow: '0 0 14px #a3cdf87f',
          }}
        >
          {fruits.map((fruit) => (
            <li
              key={fruit}
              style={{
                background: '#eaf4fc',
                margin: '6px 0',
                padding: '12px 18px',
                borderRadius: '10px',
                color: '#205072',
                fontWeight: '600',
                cursor: 'default',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#cdf0fb')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#eaf4fc')}
              tabIndex={0}
            >
             {fruit}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default CSRPage;
