import { component$ } from '@builder.io/qwik';
import { type DocumentHead, routeLoader$ } from '@builder.io/qwik-city';

export const useServerTime = routeLoader$(async () => {
  const date = new Date();
  return date.toISOString();
});

export default component$(() => {
  return <></>;
});

export const head: DocumentHead = ({ head, resolveValue, params }) => {
  const serverTime = resolveValue(useServerTime);

  return {
    title: `server Time ${serverTime}`,
    meta: [
      {
        name: 'description',
        content: `head: ${head.title} ${params.id ? params.id : ''}`,
      },
    ],
  };
};
