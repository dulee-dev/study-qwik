import { component$, $ } from '@builder.io/qwik';
import { h1 } from './template.css';
import { blueMode, redMode } from './themes.css';
import { Button } from '~/components/button';

export default component$(() => {
  const onClickThemeBtn = $(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'blueMode') {
      document.documentElement.className = redMode;
      localStorage.setItem('theme', 'redMode');
    } else {
      document.documentElement.className = blueMode;
      localStorage.setItem('theme', 'blueMode');
    }
  });

  return (
    <div>
      <h1 class={h1}>Theme</h1>
      <button onClick$={onClickThemeBtn}>change Theme</button>
      <Button
        recipe={{
          rounded: true,
        }}
      />
    </div>
  );
});
