import React from 'react';
import ProfileCard from './components/ProfileCard';

const App: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to bottom right, #f7ebff 0%, #ffe9f4 100%)'
      }}
    >
      <main
        style={{
          border: '5px solid #9485acff',
          borderRadius: '32px',
          boxShadow: '0 12px 36px #53b3cb22',
          backgroundColor: '#fff',
          padding: '50px 32px',
          margin: '36px auto',
          maxWidth: '820px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <header style={{ textAlign: 'center', marginBottom: '36px', width: '100%' }}>
          <h1
            style={{
              fontSize: '2.6rem',
              color: '#525558ff',
              fontWeight: 900,
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              textShadow: '2px 2px 8px #eadcffb3, 1px 4px 16px #903cff22',
              margin: 0,
            }}
          >
            Mini Profile Card App
          </h1>
          <p
            style={{
              margin: '12px 0 0 0',
              fontSize: '1.18rem',
              color: '#0e1011ff',
              fontWeight: 600,
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              textShadow: '0 1.5px 4px #ddd8fc70',
              letterSpacing: '0.02em',
            }}
          >
            Fundamental Implementation of React and TypeScript.
          </p>
        </header>

        <section
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '35px',
            width: '100%',
          }}
        >
          <ProfileCard name="Neha Mehrotra" age={29} email="neha.mehrotra@test.com">
            Neha is a frontend developer with a passion for React and user-centric design.
          </ProfileCard>
          <ProfileCard name="Srishthi Dubey" age={36} email="srishthi.dubey@test.com">
            Srishthi is a software engineer specialised in backend systems and cloud services.
          </ProfileCard>
          <ProfileCard name="Tripti Mishra" age={24} email="tripti.mishra@test.com">
            Tripti is a UI/UX designer who loves creating clean, intuitive interfaces.
          </ProfileCard>
        </section>
      </main>
    </div>
  );
};

export default App;
