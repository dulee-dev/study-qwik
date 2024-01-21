import {
  type QRL,
  type Signal,
  component$,
  useSignal,
  $,
} from '@builder.io/qwik';

export default component$(() => {
  console.log('render!');

  const textBinding = useSignal('');
  const checkboxBinding = useSignal(false);

  const onClickChangeCheckBox = $(() => {
    checkboxBinding.value = !checkboxBinding.value;
  });

  return (
    <Template
      textBinding={textBinding}
      checkboxBinding={checkboxBinding}
      onClickBtn={onClickChangeCheckBox}
    />
  );
});

interface TemplateProps {
  textBinding: Signal<string>;
  checkboxBinding: Signal<boolean>;
  onClickBtn: QRL<() => void>;
}

const Template = component$<TemplateProps>(
  ({ textBinding, checkboxBinding, onClickBtn }) => {
    return (
      <div>
        <input type="text" bind:value={textBinding} />
        <input type="checkbox" bind:checked={checkboxBinding} />
        <button onClick$={onClickBtn}>Change CheckBox</button>
        <span>{textBinding.value}</span>
        {checkboxBinding.value ? 'checked' : 'not checked'}
      </div>
    );
  }
);
