import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('Counter increments correctly', () => {
  render(<App />);
  const button = screen.getByText(/Increment/i);
  fireEvent.click(button);
  expect(screen.getByText(/Current: 1/i)).toBeInTheDocument();
});

test('Lazy-loaded component appears when button is clicked', async () => {
  render(<App />);
  fireEvent.click(screen.getByTestId('settings-toggle'));
  await waitFor(() => expect(screen.getByText(/Settings/i)).toBeInTheDocument());
});
