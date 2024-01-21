import { component$, useSignal, $, useVisibleTask$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <h1>Event</h1>
      <MultiHandler />
      <Event />
      <EventTarget />
      <DragEvent />
      <DragEvent2 />
    </>
  );
});

const MultiHandler = component$(() => {
  const count = useSignal(0);
  const print = $((ev: PointerEvent) => console.log('CLICKED!', ev));
  const increment = $(() => count.value++);

  // The button when clicked will print "CLICKED!" to the console, increment the count and send an event to Google Analytics.
  return (
    <button onClick$={[print, increment, $(() => {})]}>
      Count: {count.value}
    </button>
  );
});

const Event = component$(() => {
  const position = useSignal<{ x: number; y: number }>({ x: 0, y: 0 });
  return (
    <div
      onClick$={(event) => (position.value = { x: event.x, y: event.y })}
      style="height: 100vh"
    >
      <p>
        Clicked at: ({position.value.x}, {position.value.y})
      </p>
    </div>
  );
});

const EventTarget = component$(() => {
  const currentElm = useSignal<HTMLElement | null>(null);
  const targetElm = useSignal<HTMLElement | null>(null);

  return (
    <section
      onClick$={(event, currentTarget) => {
        currentElm.value = currentTarget;
        targetElm.value = event.target as HTMLElement;
      }}
    >
      Click on any text <code>target</code> and <code>currentElm</code> of the
      event.
      <hr />
      <p>
        Hello <b>World</b>!
      </p>
      <hr />
      <ul>
        <li>currentElm: {currentElm.value?.tagName}</li>
        <li>target: {targetElm.value?.tagName}</li>
      </ul>
    </section>
  );
});

const DragEvent = component$(() => {
  const draggableRef = useSignal<HTMLElement>();
  const dragStatus = useSignal('');

  useVisibleTask$(({ cleanup }) => {
    const dragstart = () => (dragStatus.value = 'dragstart');
    const dragend = () => (dragStatus.value = 'dragend');
    if (draggableRef.value) {
      // Use the DOM API to add an event listener.

      draggableRef.value.addEventListener('dragstart', dragstart);
      draggableRef.value.addEventListener('dragend', dragend);
    }
    cleanup(() => {
      if (draggableRef.value) {
        draggableRef.value.removeEventListener('dragstart', dragstart);
        draggableRef.value.removeEventListener('dragend', dragend);
      }
    });
  });

  return (
    <div>
      <div draggable ref={draggableRef}>
        Drag me!
      </div>
      <p>{dragStatus.value}</p>
    </div>
  );
});

const DragEvent2 = component$(() => {
  const dragStatus = useSignal('');

  const dragStart = $(() => {
    dragStatus.value = 'dragStart';
  });
  const dragEnd = $(() => {
    dragStatus.value = 'dragEnd';
  });

  return (
    <div>
      <div draggable onDragStart$={dragStart} onDragEnd$={dragEnd}>
        Drag me!
      </div>
      <p>{dragStatus.value}</p>
    </div>
  );
});
