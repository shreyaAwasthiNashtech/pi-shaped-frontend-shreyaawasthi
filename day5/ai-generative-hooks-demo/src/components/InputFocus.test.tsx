import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import InputFocus from './InputFocus';

// Mock the AI util function
jest.mock('../utils/gemini', () => ({
  getGeminiExplanation: jest.fn(() => Promise.resolve("Validation suggestion mock")),
}));

describe('InputFocus Component with AI suggestions', () => {
  it('renders input and focus button', () => {
    render(<InputFocus />);
    expect(screen.getByPlaceholderText(/enter form field label/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /focus input/i })).toBeInTheDocument();
  });

  it('focuses input on button click', () => {
    render(<InputFocus />);
    const input = screen.getByPlaceholderText(/enter form field label/i);
    const button = screen.getByRole('button', { name: /focus input/i });
    fireEvent.click(button);
    expect(document.activeElement).toBe(input);
  });

  it('fetches AI suggestions when typing and displays them', async () => {
    render(<InputFocus />);
    const input = screen.getByPlaceholderText(/enter form field label/i);
    fireEvent.change(input, { target: { value: 'Email' } });

    expect(screen.getByText(/generating validation suggestions/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/validation suggestion mock/i)).toBeInTheDocument();
    });
  });

  it('displays error message on AI failure', async () => {
    const { getGeminiExplanation } = require('../utils/gemini');
    getGeminiExplanation.mockImplementationOnce(() => Promise.reject('AI error'));

    render(<InputFocus />);
    const input = screen.getByPlaceholderText(/enter form field label/i);
    fireEvent.change(input, { target: { value: 'Phone' } });

    await waitFor(() => {
      expect(screen.getByText(/ai suggestion generation failed/i)).toBeInTheDocument();
    });
  });
});
