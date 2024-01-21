import { component$, useStore } from '@builder.io/qwik';

interface UserData {
  name: string;
  email: string;
  age: number;
}

export default component$(() => {
  const userData = useStore<UserData>({
    name: 'dulee',
    email: 'dulee@gmail.com',
    age: 33,
  });
  return (
    <>
      <Child name={userData.name} age={userData.age} />
      <Child {...userData} />
      <button
        onClick$={() => {
          userData.age++;
        }}
      ></button>
    </>
  );
});

interface ChildProps {
  name: string;
  age: number;
}

export const Child = component$<ChildProps>(({ name, age }) => {
  return (
    <>
      <p>name: {name}</p>
      <p>age: {age}</p>
    </>
  );
});
