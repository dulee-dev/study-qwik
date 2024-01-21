import {
  Resource,
  component$,
  useResource$,
  useSignal,
} from '@builder.io/qwik';

interface Res {
  title: string;
}

interface Joke {
  value: string;
}

export default component$(() => {
  const prNum = useSignal('3333');
  const prTitle = useResource$<Res>(async ({ track }) => {
    track(() => prNum.value);
    const response = await fetch(
      `https://api.github.com/repos/BuilderIO/qwik/pulls/${prNum.value}`
    );
    const data = await response.json();
    const res = {
      title: data.message as string,
    };
    return res;
  });

  const query = useSignal('');
  const jokes = useResource$<Joke[]>(async ({ track, cleanup }) => {
    track(() => query.value);
    const controller = new AbortController();
    cleanup(() => controller.abort());

    if (query.value.length < 3) return [];

    const url = new URL('https://api.chucknorris.io/jokes/search');
    url.searchParams.set('query', query.value);

    const resp = await fetch(url, { signal: controller.signal });
    const { result } = (await resp.json()) as { result: Joke[] };
    return result;
  });

  return (
    <>
      <input type="text" bind:value={prNum} />
      <p>{prNum.value}</p>
      <Resource
        value={prTitle}
        onPending={() => <p>Loading...</p>}
        onResolved={({ title }) => <h3>{title}</h3>}
      />

      <input bind:value={query} />
      <Resource
        value={jokes}
        onPending={() => <>loading...</>}
        onResolved={(jokes) => (
          <ul>
            {jokes.map((joke, i) => (
              <li key={i}>{joke.value}</li>
            ))}
          </ul>
        )}
      />
    </>
  );
});
