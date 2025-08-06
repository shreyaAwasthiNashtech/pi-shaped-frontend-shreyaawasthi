import React, { useState } from 'react';
import Counter from './components/Counter';
import Timer from './components/Timer';
import InputFocus from './components/InputFocus';
import ExpensiveCalc from './components/ExpensiveCalc';
import ListParent from './components/ListParent';
import Dropdown from './components/Dropdown';
import { ThemeProvider, useTheme, type Theme } from './context/ThemeContext';
import type { RoleOption, UserRole } from './types';

const themeOptions: { label: string; value: Theme }[] = [
  { label: "Light", value: 'light' },
  { label: "Dark", value: 'dark' }
];

const roleOptions: RoleOption[] = [
  { label: 'Admin', value: 'Admin' },
  { label: 'User', value: 'User' },
  { label: 'Guest', value: 'Guest' }
];

const boxStyle: React.CSSProperties = {
  background: '#f7f8fc',
  borderRadius: 16,
  padding: 20,
  margin: 12,
  boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
  flex: '1 1 300px',
  maxWidth: 350,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'default',
  display: 'flex',
  flexDirection: 'column',
};

const boxHoverStyle: React.CSSProperties = {
  transform: 'scale(1.05)',
  boxShadow: '0 12px 36px rgba(0,0,0,0.12)',
  cursor: 'pointer',
};

function ThemedWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  const style =
    theme === 'light'
      ? {
          backgroundColor: '#f8fafc',
          color: '#232323',
          minHeight: '100vh',
          transition: 'background 0.3s, color 0.3s',
        }
      : {
          backgroundColor: '#222736',
          color: '#f7fafb',
          minHeight: '100vh',
          transition: 'background 0.3s, color 0.3s',
        };

  return <div style={style}>{children}</div>;
}

function ThemeSelector() {
  const { setTheme, theme } = useTheme();

  return (
    <div style={{ ...boxStyle, maxWidth: 300, cursor: 'default' }}>
      <label htmlFor="theme-dropdown" style={{ marginBottom: 8, fontWeight: 600 }}>
        Select Theme:
      </label>
      <Dropdown<Theme>
        options={themeOptions}
        onSelect={(opt) => setTheme(opt.value)}
        placeholder="Choose theme"
      />
      <p style={{ marginTop: 12, fontWeight: 600 }}>
        Current Theme: <b>{theme}</b>
      </p>
    </div>
  );
}

const AppContent: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<RoleOption | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const { theme } = useTheme();

  // Define colors that adapt to theme
  const boxBgColor = theme === 'light' ? '#f7f8fc' : '#2b2f44'; // lighter bg for light, darker for dark
  const boxTextColor = theme === 'light' ? '#232323' : '#ececf1'; // dark text for light, light text for dark

  const boxStyle: React.CSSProperties = {
    background: boxBgColor,
    color: boxTextColor,
    borderRadius: 16,
    padding: 20,
    margin: 12,
    boxShadow:
      theme === 'light'
        ? '0 8px 24px rgba(0,0,0,0.06)'
        : '0 8px 24px rgba(0,0,0,0.3)',
    flex: '1 1 300px',
    maxWidth: 350,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s, color 0.3s',
    cursor: 'default',
    display: 'flex',
    flexDirection: 'column',
  };

  const boxHoverStyle: React.CSSProperties = {
    transform: 'scale(1.05)',
    boxShadow: theme === 'light'
      ? '0 12px 36px rgba(0,0,0,0.12)'
      : '0 12px 36px rgba(0,0,0,0.45)',
    cursor: 'pointer',
  };

  const headingStyle: React.CSSProperties = {
    color: theme === 'light' ? '#277da1' : '#aad4ff',
    marginBottom: 12,
    userSelect: 'none',
  };


  const BoxWrapper: React.FC<{ index: number; children: React.ReactNode }> = ({ index, children }) => (
    <div
      style={{
        ...boxStyle,
        ...(hoverIndex === index ? boxHoverStyle : {}),
      }}
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(null)}
    >
      {children}
    </div>
  );

  return (
    <div style={{ padding: 24 }}>
      <h2
        style={{
          marginBottom: 36,
          textAlign: 'center',
          fontWeight: 700,
          color: theme === 'light' ? '#277da1' : '#aad4ff',
          userSelect: 'none',
        }}
      >
        React Hooks & Context Mini App (Day 3)
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          gap: '28px',
        }}
      >
        <BoxWrapper index={0}>
          <h3 style={headingStyle}>Counter</h3>
          <Counter />
        </BoxWrapper>

        <BoxWrapper index={1}>
          <h3 style={headingStyle}>Timer</h3>
          <Timer />
        </BoxWrapper>

        <BoxWrapper index={2}>
          <h3 style={headingStyle}>Input Focus</h3>
          <InputFocus />
        </BoxWrapper>

        <BoxWrapper index={3}>
          <h3 style={headingStyle}>ExpensiveCalc</h3>
          <ExpensiveCalc />
        </BoxWrapper>

        <BoxWrapper index={4}>
          <h3 style={headingStyle}>List Parent</h3>
          <ListParent />
        </BoxWrapper>

        <BoxWrapper index={5}>
          <h3 style={headingStyle}>Theme Selector</h3>
          <ThemeSelector />
        </BoxWrapper>
      </div>

      <h3 style={{ marginTop: 48, marginBottom: 20, 
        color: '#6182afff', 
        textAlign: 'center' }}>
        Dropdown (Generics)
      </h3>

      <div
        style={{
          display: 'flex',
          gap: 32,
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: 740,
          margin: '0 auto',
        }}
      >
        <div style={{ ...boxStyle, maxWidth: 320, cursor: 'default' }}>
          <label
            htmlFor="role-dropdown"
            style={{
              marginBottom: 8,
              fontWeight: 600,
              display: 'block',
              color: boxTextColor,
            }}
          >
            User Role:
          </label>
          <Dropdown<UserRole>
            options={roleOptions}
            onSelect={(opt) => {
              const found = roleOptions.find((r) => r.value === opt.value);
              if (found) setSelectedRole(found);
            }}
            placeholder="Select user role"
          />
          {selectedRole && (
            <p style={{ marginTop: 16, fontWeight: 600, color: theme === 'light' ? '#138a9f' : '#7cd4e0ff', }}>
              Selected Role: <b>{selectedRole.label}</b>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ThemedWrapper>
        <AppContent />
      </ThemedWrapper>
    </ThemeProvider>
  );
};

export default App;
