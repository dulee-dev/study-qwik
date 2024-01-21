import { component$ } from '@builder.io/qwik';
import { useViewmodel } from './use-viewmodel';

export default component$(() => {
  const { value, event } = useViewmodel();
  return (
    <>
      <p>Hello World</p>
      <p>cnt {value.cnt}</p>
      <button onClick$={event.onClickIncrease}>increase</button>
      <button onClick$={event.onClickDecrease}>decrease</button>
      <ChildComponent title="AtitleA" />
    </>
  );
});

interface ChildProps {
  title: string;
}

const ChildComponent = component$<ChildProps>(({ title }) => {
  return <p>ChildComponent {title}</p>;
});
