import { createThemeContract, createTheme } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    main: 'color-main',
    sub: 'color-sub',
  },
});

export const redMode = createTheme(vars, {
  color: {
    main: 'red',
    sub: 'pink',
  },
});

export const blueMode = createTheme(vars, {
  color: {
    main: 'blue',
    sub: 'skyblue',
  },
});
