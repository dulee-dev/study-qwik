import { type Signal, component$ } from '@builder.io/qwik';
import styles from './template.module.scss';

interface Props {
  text: Signal<string>;
}

export const Template = component$<Props>(({ text }) => {
  return (
    <div>
      <input type="text" name="text" id="text" bind:value={text} />
      <div class={styles.div}>aa</div>
    </div>
  );
});
