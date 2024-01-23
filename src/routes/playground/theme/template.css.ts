import { style } from '@vanilla-extract/css';
import { sprinkles } from './sprinkles.css';

export const h1 = style([
  sprinkles({
    color: {
      mobile: 'main',
      desktop: 'blue200',
    },
    fontSize: '3.2rem',
  }),
]);
