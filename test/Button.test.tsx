import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../src';

const TEXT = 'Button';

describe('Button', () => {
  describe('should be rendered correctly', () => {
    test('primary', () => {
      render(<Button>{TEXT}</Button>);
      
      const button = screen.getByText(TEXT);
      expect(button.classList.contains('button_view_primary')).toBeTruthy();
    });

    test('secondary', () => {
      render(<Button view="secondary">{TEXT}</Button>);
      
      const button = screen.getByText(TEXT);
      expect(button.classList.contains('button_view_secondary')).toBeTruthy();
    });
  });

  describe('should call actions correctly', () => {
    test('should be clickable', () => {
      const mockOnClick = jest.fn();

      render(<Button onClick={mockOnClick}>{TEXT}</Button>);
      
      const button = screen.getByText(TEXT);
      fireEvent.click(button);

      expect(mockOnClick).toBeCalledTimes(1);
    });

    test('should not be clickable if disabled', () => {
      const mockOnClick = jest.fn();

      render(<Button onClick={mockOnClick} disabled>{TEXT}</Button>);
      
      const button = screen.getByText(TEXT);
      fireEvent.click(button);

      expect(mockOnClick).not.toBeCalled();
    });
  });
});
