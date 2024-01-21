import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const param = useLocation().params.id;
  console.log(param);

  return <></>;
});
