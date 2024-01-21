import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

export const useData = routeLoader$(async ({ env }) => {
  const str = env.get('STR');
  return str;
});

export default component$(() => {
  const str = useData();

  console.log(import.meta.env.PUBLIC_STR);
  console.log(str.value);

  return <></>;
});
