import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { TexBox } from '../src';

const VALUE = 'Input';

describe('TextBox', () => {
  describe('should be rendered correctly', () => {
    test('primary', () => {
      render(<TexBox value={VALUE} />);

      const textBox = screen.getByDisplayValue(VALUE);
      expect(textBox.classList.contains('textBox_view_primary')).toBeTruthy();
    });

    test('secondary', () => {
      render(<TexBox value={VALUE} view="secondary" />);

      const textBox = screen.getByDisplayValue(VALUE);
      expect(textBox.classList.contains('textBox_view_secondary')).toBeTruthy();
    });
  });

  describe('should call actions correctly', () => {
    const value = 'new value';

    test('should change value', () => {
      const mockOnChange = jest.fn();

      render(<TexBox onChange={mockOnChange} value={VALUE} />);

      const textBox = screen.getByDisplayValue(VALUE);
      fireEvent.change(textBox, { target: { value } });

      expect(mockOnChange).toBeCalledWith(value);
    });

    test('should not change value if disabled', () => {
      const mockOnChange = jest.fn();

      render(<TexBox onChange={mockOnChange} value={VALUE} disabled />);

      const textBox = screen.getByDisplayValue(VALUE);
      fireEvent.change(textBox, { target: { value } });

      expect(mockOnChange).not.toBeCalled();
    });
  });
});
