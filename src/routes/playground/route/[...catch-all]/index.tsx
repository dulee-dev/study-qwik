import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const param = useLocation().params['catch-all'];
  console.log(param);

  return <></>;
});
