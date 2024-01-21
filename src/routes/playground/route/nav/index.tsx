import { $, component$ } from '@builder.io/qwik';
import { Link, useNavigate } from '@builder.io/qwik-city';

export default component$(() => {
  const nav = useNavigate();

  const onClickLinkBtn = $(() => {
    nav('/playground/my-convention');
  });
  const onClickLinkReloadBtn = $(() => {
    nav();
  });

  return (
    <>
      <h1>Navigation</h1>
      <h2>link</h2>
      <Link href="/playground/my-convention">my-convention</Link>
      <br />
      <h2>link - reload</h2>
      <Link reload>reload</Link>
      <h2>nav</h2>
      <button onClick$={onClickLinkBtn}>link</button>
      <h2>nav - reload</h2>
      <button onClick$={onClickLinkReloadBtn}>reload</button>
    </>
  );
});
