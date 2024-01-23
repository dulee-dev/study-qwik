import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { vars } from './themes.css';

const color = {
  blue50: '#eff6ff',
  blue100: '#dbeafe',
  blue200: '#bfdbfe',
  main: vars.color.main,
  // etc.
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
    default: {},
    hover: { selector: '&:hover' },
    focus: { selector: '&:focus' },
    disabled: { selector: '&:disabled' },
    active: { selector: '&:active' },
    checked: { selector: '&:checked' },
  },
  defaultCondition: 'mobile',
  properties: {
    color,
    fontSize: {
      '1.0rem': '1rem',
      '1.1rem': '1.1rem',
      '1.2rem': '1.2rem',
      '1.3rem': '1.3rem',
      '1.4rem': '1.4rem',
      '1.5rem': '1.5rem',
      '1.6rem': '1.6rem',
      '2.0rem': '2.0rem',
      '3.2rem': '3.2rem',
      '4.8rem': '4.8rem',
      '6.4rem': '6.4rem',
    },
  },
});

export const sprinkles = createSprinkles(responsiveProperties);
