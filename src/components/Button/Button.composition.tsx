import * as React from 'react';
import Button from './Button';

export const ButtonBase = () => {
  return <Button>Click Me!</Button>;
};

export const ButtonSecondary = () => {
  return <Button view="secondary">Click Me!</Button>;
};

export const ButtonDisabled = () => {
  return <Button disabled>Disabled</Button>
}