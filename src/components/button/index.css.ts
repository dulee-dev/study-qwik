import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { vars } from '~/routes/playground/theme/themes.css';

export const button = recipe({
  base: {
    fontSize: 16,
    background: vars.color.sub,
    borderRadius: 0,
  },
  variants: {
    color: {
      red: {
        background: 'red',
      },
      blue: {
        background: 'blue',
      },
    },
    rounded: {
      true: { borderRadius: '4px' },
    },
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
