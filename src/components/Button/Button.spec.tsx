/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { ButtonBase, ButtonSecondary, ButtonDisabled } from './Button.composition';

describe('Button', () => {
  describe('should be rendered correctly', () => {
    test('primary', () => {
      render(<ButtonBase />);
      
      const button = screen.getByRole('button');
      expect(button.classList.contains('button_view_primary')).toBeTruthy();
    });

    test('secondary', () => {
      render(<ButtonSecondary />);
      
      const button = screen.getByRole('button');
      expect(button.classList.contains('button_view_secondary')).toBeTruthy();
    });

    test('disabled', () => {
      render(<ButtonDisabled />);
      
      const button = screen.getByRole('button');
      expect(button.classList.contains('button_disabled')).toBeTruthy();

    });
  });
});
