import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export default component$(() => {
  const width = useSignal(0);
  const height = useSignal(0);
  const output = useSignal<Element>();

  useVisibleTask$(() => {
    if (output.value) {
      const rect = output.value.getBoundingClientRect();
      width.value = Math.round(rect.width);
      height.value = Math.round(rect.height);
    }
  });

  return (
    <>
      <article ref={output} style={{ border: '1px solid red', width: '100px' }}>
        a;lsdk jf;asda sd aasdsadasda asd asd a sdasdad asda dasdadasdsd
      </article>
    </>
  );
});
