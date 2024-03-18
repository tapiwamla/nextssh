import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeToggle from '../components/ThemeToggle';

describe('ThemeToggle component', () => {
  beforeEach(() => {
    // Mocking document.body.classList
    Object.defineProperty(document.body, 'classList', {
      value: {
        add: jest.fn(),
        remove: jest.fn(),
      },
      writable: true,
    });
  });

  test('Renders in light mode by default', () => {
    const { getByText, getByRole } = render(<ThemeToggle />);
    expect(getByText('Dark Mode')).toBeInTheDocument();
    expect(getByRole('button')).toHaveClass('theme-button');
  });

  test('Toggles theme when clicked', () => {
    const { getByRole } = render(<ThemeToggle />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(document.body.classList.add).toHaveBeenCalledWith('dark-mode');
    fireEvent.click(button);
    expect(document.body.classList.remove).toHaveBeenCalledWith('dark-mode');
  });

  test('Changes button text based on theme', () => {
    const { getByRole } = render(<ThemeToggle />);
    const button = getByRole('button');
    expect(button).toHaveTextContent('Dark Mode');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Light Mode');
  });
});
