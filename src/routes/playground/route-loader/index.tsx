import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

// server-side rendering
export const useData = routeLoader$(async () => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
  const result = (await response.json()) as {
    id: string;
    joke: string;
    status: number;
  };
  return result;
});

export default component$(() => {
  const {
    value: { id, joke, status },
  } = useData();
  return (
    <>
      <h1>routeLoader</h1>
      <p>{id}</p>
      <p>{joke}</p>
      <p>{status}</p>
    </>
  );
});
