import {
  component$,
  createContextId,
  useContext,
  useContextProvider,
  useStore,
} from '@builder.io/qwik';

interface CntStore {
  count: number;
}

const CTX_CNT_ID = createContextId<CntStore>('counter');
const CTX_OBJ_ID = createContextId<CntStore>('obj');

export default component$(() => {
  const cntStore = useStore<CntStore>({ count: 0 });
  useContextProvider(CTX_CNT_ID, cntStore);
  useContextProvider(CTX_OBJ_ID, cntStore);

  return (
    <>
      <Cnt />
      <Cnt />
      <Cnt />
      <CntObj />
    </>
  );
});

const Cnt = component$(() => {
  const cntStore = useContext(CTX_CNT_ID);
  return (
    <>
      <p>{cntStore.count}</p>
      <button onClick$={() => cntStore.count++}>increase</button>
    </>
  );
});

const CntObj = component$(() => {
  const cntStore = useContext(CTX_OBJ_ID);
  return (
    <>
      <p>{cntStore.count}</p>
      <button onClick$={() => cntStore.count++}>increase</button>
    </>
  );
});
