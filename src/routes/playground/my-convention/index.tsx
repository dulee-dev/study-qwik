import { component$, useComputed$, useSignal, $ } from '@builder.io/qwik';
import { Template } from './template';

const TEXT_MAX_LEN = 10;
const TEXT_EMAIL_PATTERN = '.+@gmail.com';

export default component$(() => {
  const show = useSignal<boolean>(false);
  const text = useSignal<string>('');
  const numStr = useSignal<string>('');
  const text2 = useSignal<string>('');

  const textLen = useComputed$(() => {
    return text.value.length;
  });

  const onClickSayHi = $(() => {
    text2.value = 'Say hi';
  });

  return (
    <>
      <Template
        title="title"
        show={show}
        text={{
          signal: text,
          len: textLen,
          maxLen: TEXT_MAX_LEN,
          pattern: TEXT_EMAIL_PATTERN,
        }}
        numStr={numStr}
      />
      <br />
      <br />
      <p>{text2.value}</p>
      <input type="text" bind:value={text2} />
      <button onClick$={onClickSayHi}>change to "Say hi"</button>
    </>
  );
});
