import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <header>
      </header>
      <main class="flex flex-col items-center">
        <Slot />
      </main>
    </>
  );
});
