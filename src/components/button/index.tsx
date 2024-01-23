import { component$ } from '@builder.io/qwik';
import { type ButtonVariants, button } from './index.css';

interface Props {
  recipe?: ButtonVariants;
}

export const Button = component$<Props>(({ recipe }) => {
  return <button class={button(recipe)}>Button</button>;
});
