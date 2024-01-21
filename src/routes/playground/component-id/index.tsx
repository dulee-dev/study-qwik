import { component$, useId } from '@builder.io/qwik';

export default component$(() => {
  const id = useId();
  return (
    <>
      <h1>{id}</h1>
      <Component />
    </>
  );
});

const Component = () => {
  return (
    <>
      <h2>Component</h2>
    </>
  );
};
