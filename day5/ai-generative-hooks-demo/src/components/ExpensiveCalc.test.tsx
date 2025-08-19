import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ExpensiveCalc from './ExpensiveCalc';

// Mock the AI util function
jest.mock('../utils/gemini', () => ({
  getGeminiExplanation: jest.fn(() => Promise.resolve("Factorial explanation mock")),
}));

describe('ExpensiveCalc Component', () => {
  it('renders initial factorial correctly', () => {
    render(<ExpensiveCalc />);
    expect(screen.getByText(/Factorial:/i)).toBeInTheDocument();
    expect(screen.getByText('40320')).toBeInTheDocument(); // factorial of default 8
  });

  it('fetches and displays AI explanation on load', async () => {
    render(<ExpensiveCalc />);
    expect(screen.getByText(/generating explanation/i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText(/generating explanation/i)).not.toBeInTheDocument();
      expect(screen.getByText(/factorial explanation mock/i)).toBeInTheDocument();
    });
  });

  it('updates explanation when input changes', async () => {
    render(<ExpensiveCalc />);
    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '5' } });
    expect(screen.getByText(/generating explanation/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/factorial explanation mock/i)).toBeInTheDocument();
    });
  });
});
