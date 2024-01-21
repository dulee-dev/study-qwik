import { component$, useComputed$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const name = useSignal('Qwik');
  const capitalizedName = useComputed$(() => {
    return name.value.toUpperCase();
  });
  return (
    <>
      <input type="text" bind:value={name} />
      <p>{capitalizedName.value}</p>
    </>
  );
});
