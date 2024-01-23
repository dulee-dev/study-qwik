import { component$, useSignal } from '@builder.io/qwik';
import { Template } from './template';

export default component$(() => {
  const text = useSignal('');
  return <Template text={text} />;
});
