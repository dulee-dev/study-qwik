import { type Signal, component$ } from '@builder.io/qwik';

export interface TemplateProps {
  title: string;
  show: Signal<boolean>;
  text: {
    signal: Signal<string>;
    len: Signal<number>;
    maxLen: number;
    pattern: string;
  };
  numStr: Signal<string>;
}

export const Template = component$<TemplateProps>(
  ({ title, show, text, numStr }) => {
    return (
      <>
        <h1>{title}</h1>
        <h2>use bool</h2>
        <p>{show.value && 'show'}</p>
        <input type="checkbox" bind:checked={show} />
        <h2>use text</h2>
        <p>
          text: {text.signal.value} [{text.len.value}]
        </p>
        <input
          type="email"
          bind:value={text.signal}
          maxLength={text.maxLen}
          pattern={text.pattern}
        />
        <br />
        <input type="number" bind:value={numStr} />
      </>
    );
  }
);
