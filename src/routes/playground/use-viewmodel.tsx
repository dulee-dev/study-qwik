import { $, useSignal } from '@builder.io/qwik';

export const useViewmodel = () => {
  const cnt = useSignal(1);

  const onClickIncrease = $(() => {
    cnt.value++;
  });
  const onClickDecrease = $(() => {
    cnt.value--;
  });

  return {
    value: {
      cnt,
    },
    event: {
      onClickIncrease,
      onClickDecrease,
    },
  };
};
