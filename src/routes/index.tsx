import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="md:container md:max-w-3/4">
        <ul class="list bg-base-100 rounded-box shadow-md">
          <li class="p-4 pb-2 text-xs tracking-wide opacity-60">
            Most played songs this week
          </li>

          <li class="list-row">
            <div class="text-4xl font-thin tabular-nums opacity-30">01</div>
            <div>
              <img
                class="rounded-box size-10"
                src="https://img.daisyui.com/images/profile/demo/1@94.webp"
              />
            </div>
            <div class="list-col-grow">
              <div>Dio Lupa</div>
              <div class="text-xs font-semibold uppercase opacity-60">
                Remaining Reason
              </div>
            </div>
            <button class="btn btn-square btn-ghost">
              <svg
                class="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 3L20 12 6 21 6 3z"></path>
                </g>
              </svg>
            </button>
          </li>

          <li class="list-row">
            <div class="text-4xl font-thin tabular-nums opacity-30">02</div>
            <div>
              <img
                class="rounded-box size-10"
                src="https://img.daisyui.com/images/profile/demo/4@94.webp"
              />
            </div>
            <div class="list-col-grow">
              <div>Ellie Beilish</div>
              <div class="text-xs font-semibold uppercase opacity-60">
                Bears of a fever
              </div>
            </div>
            <button class="btn btn-square btn-ghost">
              <svg
                class="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 3L20 12 6 21 6 3z"></path>
                </g>
              </svg>
            </button>
          </li>

          <li class="list-row">
            <div class="text-4xl font-thin tabular-nums opacity-30">03</div>
            <div>
              <img
                class="rounded-box size-10"
                src="https://img.daisyui.com/images/profile/demo/3@94.webp"
              />
            </div>
            <div class="list-col-grow">
              <div>Sabrino Gardener</div>
              <div class="text-xs font-semibold uppercase opacity-60">
                Cappuccino
              </div>
            </div>
            <button class="btn btn-square btn-ghost">
              <svg
                class="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 3L20 12 6 21 6 3z"></path>
                </g>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
