import { Slot, component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <h1>Slot</h1>
      <BasicSlot>slot is here</BasicSlot>
      <NamedSlot>
        <h2 q:slot="title">title</h2>
        <div q:slot="items">item1</div>
        <div q:slot="items">item2</div>
        <footer q:slot="footer">footer</footer>
        <div q:slot="items">item3</div>
        <div q:slot="items">item4</div>
      </NamedSlot>
      <HiddenSlot>hiddenSlot</HiddenSlot>
    </>
  );
});

const BasicSlot = component$(() => {
  return (
    <button>
      Content: <Slot />
    </button>
  );
});

const NamedSlot = component$(() => {
  return (
    <div>
      <Slot name="title" />
      <Slot name="items" />
      <Slot name="footer" />
    </div>
  );
});

const HiddenSlot = component$(() => {
  const isOpen = useSignal(false);
  return (
    <div>
      <h2
        onClick$={() => {
          isOpen.value = !isOpen.value;
        }}
      >
        Click to open
      </h2>
      {isOpen.value && <Slot />}
    </div>
  );
});
