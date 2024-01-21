import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <></>;
});

export const head: DocumentHead = ({ params }) => {
  return {
    title: `child`,
    meta: [
      {
        name: 'description',
        content: `params ${params.id ? params.id : ''}`,
      },
    ],
  };
};
