import { useStore, type QRL, $ } from '@builder.io/qwik';

interface UseBoolStore {
  value: boolean;
  invert: QRL<() => void>;
}

export const useBool = (init: boolean) => {
  const store = useStore<UseBoolStore>(
    {
      value: init,
      invert: $(function (this: UseBoolStore) {
        this.value = !this.value;
      }),
    },
    { deep: false }
  );
  return store;
};

interface UseTextStore {
  value: string;
  bind: QRL<() => (text: string) => void>;
}

export const useText = (init: string, max: number) => {
  const store = useStore<UseTextStore>({
    value: init,
    bind: $(function (this: UseTextStore) {
      const func = (text: string) => {
        console.log(text);
        if (text.length > max) return;
        else this.value = text;
      };
      return func;
    }),
  });
  return store;
};
