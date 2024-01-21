import { component$, useSignal, $, type QRL, useStore } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <h1>Rendering Test</h1>
      <InlineQrl />
      <HookQrl />
      <LayerQrl />
      <InLineRenderingTest />
    </>
  );
});

const InlineQrl = component$(() => {
  console.log('inline');
  const cnt = useSignal(0);
  const onClick = $(() => {
    cnt.value++;
  });

  return (
    <>
      <h2>Inline</h2>
      <p>{cnt}</p>
      <button onClick$={onClick}>+</button>
      <button
        onClick$={() => {
          cnt.value++;
        }}
      >
        +2
      </button>
    </>
  );
});

const HookQrl = component$(() => {
  console.log('hook');
  const cntStore = useCnt();

  return (
    <>
      <h2>hook</h2>
      <p>{cntStore.cnt}</p>
      <button onClick$={() => cntStore.onClick()}></button>
    </>
  );
});

// custom-hook
interface CntStore {
  cnt: number;
  onClick: QRL<(this: CntStore) => void>;
}

const useCnt = () => {
  const store = useStore<CntStore>(
    {
      cnt: 0,
      onClick: $(function (this: CntStore) {
        this.cnt++;
      }),
    },
    {
      deep: false,
    }
  );
  return store;
};

// -> 거꾸로 하자. template이라는 녀석에 value, event를 넣는 식으로
const LayerQrl = component$(() => {
  console.log('hook');
  const { value, event } = useLayer();

  return (
    <>
      <h2>layer</h2>
      <p>{value.cnt}</p>
      <button onClick$={event.onClick}></button>
    </>
  );
});

const useLayer = () => {
  const value = useStore({ cnt: 0 });

  const onClick = $(() => {
    value.cnt++;
  });

  return {
    value,
    event: {
      onClick,
    },
  };
};

// 컴포넌트가 생성,소멸될때는 무조건 랜더링, 텍스트만 바꿀거면 인라인시 랜더링 안됨
export const InLineRenderingTest = component$(() => {
  const onOff = useSignal(false);
  console.log('rendering!');
  // rendered if this exist
  // const showText = !!onOff.value;
  return (
    <>
      <h2>Inline Rendering Test</h2>
      <button
        onClick$={() => {
          onOff.value = !onOff.value;
        }}
      >
        on/off
      </button>
      <div>{onOff.value ? 'on' : 'off'}</div>
    </>
  );
});
