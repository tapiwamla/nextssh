import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ConnectionWidget from '../components/Widget';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('ConnectionWidget component', () => {
  test('Renders widget with correct information', () => {
    useRouter.mockReturnValue({
      push: jest.fn(),
    });

    const alias = 'Test Server';
    const host = '192.168.0.1';
    const username = 'testuser';
    const password = 'testpassword';
    const onRemove = jest.fn();

    const { getByText, getByRole } = render(
      <ConnectionWidget
        alias={alias}
        host={host}
        username={username}
        password={password}
        onRemove={onRemove}
      />
    );

    const findByTextContent = (content, options = {}) => {
      const { container } = options;
      const elements = [...(container || document.body).querySelectorAll('*')];
      return elements.find((element) => element.textContent === content);
    };

    expect(findByTextContent(`IP Address: ${host}`, { container: getByRole('button', { name: /Terminal/ }).parentNode.parentNode })).toBeInTheDocument();
    expect(findByTextContent(`User Name: ${username}`, { container: getByRole('button', { name: /Terminal/ }).parentNode.parentNode })).toBeInTheDocument();
    expect(getByRole('button', { name: /Remove/ })).toBeInTheDocument();
    expect(getByRole('button', { name: /Terminal/ })).toBeInTheDocument();
  });

  test('Clicking Remove button calls onRemove callback', () => {
    const onRemove = jest.fn();
    const { getByRole } = render(
      <ConnectionWidget
        alias="Test Server"
        host="192.168.0.1"
        username="testuser"
        password="testpassword"
        onRemove={onRemove}
      />
    );

    fireEvent.click(getByRole('button', { name: /Remove/ }));
    expect(onRemove).toHaveBeenCalled();
  });    
});
