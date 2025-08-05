import { GetServerSideProps } from 'next';

interface SSRPageProps {
  fruits: string[];
}

const SSRPage = ({ fruits }: SSRPageProps) => {
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
        Server-Side Rendered Fruits
      </h1>
      <p style={{ color: '#4a90e2', marginBottom: '1.8rem', fontWeight: 600, textShadow:'0 1px 3px #cde7ff' }}>
        Data fetched on the server using <code>getServerSideProps</code>.
      </p>

      {fruits.length === 0 ? (
        <p>No fruits available.</p>
      ) : (
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
                background: '#e0f7fa',
                margin: '6px 0',
                padding: '12px 18px',
                borderRadius: '10px',
                color: '#006064',
                fontWeight: '600',
                cursor: 'default',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#b2ebf2')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#e0f7fa')}
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers.host;
  const res = await fetch(`${protocol}://${host}/api/fruits`);
  const fruits: string[] = await res.json();

  return {
    props: { fruits },
  };
};

export default SSRPage;
