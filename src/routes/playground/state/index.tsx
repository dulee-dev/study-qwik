import { $, component$, useSignal, useStore, type QRL } from '@builder.io/qwik';

interface CntStore {
  value: number;
  increase: QRL<(this: CntStore) => void>;
}

export default component$(() => {
  const cnt = useSignal(0);
  const cnt2 = useSignal({ cnt: 0 });
  const state = useStore(
    {
      cnt: 0,
      name: 'default-name',
      nested: {
        field1: { id: 1, name: 'dulee' },
        field2: { id: 2, name: 'ej' },
      },
    }
    // 최상위 속성만 추적
    // { deep: false }
  );
  const cnt3 = useStore<CntStore>({
    value: 0,
    increase: $(function (this: CntStore) {
      this.value++;
    }),
  });

  return (
    <>
      <h1>State</h1>
      <p>{cnt.value}</p>
      <button onClick$={() => cnt.value++}>increase</button>
      <p>{cnt2.value.cnt}</p>
      <button onClick$={() => cnt2.value.cnt++}>increase</button>
      <p>{state.cnt}</p>
      <button onClick$={() => state.cnt++}>increase</button>
      <p>{state.name}</p>
      <input
        value={state.name}
        onInput$={(_, el) => {
          state.name = el.value;
        }}
      />
      <p>
        {state.nested.field1.id} {state.nested.field1.name}
      </p>
      <p>{state.nested.field2.name}</p>
      <input
        value={state.nested.field1.name}
        onInput$={(_, el) => {
          state.nested.field1.name = el.value;
        }}
      />
      <p>{cnt3.value}</p>
      <button
        onClick$={() => {
          cnt3.increase();
        }}
      >
        increase
      </button>
    </>
  );
});
