import React from "react";

export default function GameItem({ image, title, description, isNew }) {
  return (
    <div
      class="group col-span-1 flex flex-col items-start justify-start gap-2 bg-secondary rounded-xl bg-[#f1f5f9]"
      style={{ opacity: 1, transform: "none" }}
    >
      <div class="rounded-t-xl aspect-[16/9] relative overflow-clip">
        {isNew ? (
          <div class="absolute top-2 right-2 z-10">
            <div class="bg-rose-500 py-1 px-2 rounded-full shadow-2xl">
              <p class="text-sm text-white font-bold">New!</p>
            </div>
          </div>
        ) : null}
        <img
          alt="Blox Fruits"
          loading="lazy"
          width="1600"
          height="900"
          decoding="async"
          data-nimg="1"
          class="h-full w-full object-cover group-hover:scale-125 group-hover:-rotate-2 transition-all duration-300 ease-in-out rounded-t-xl"
          style={{ color: "transparent" }}
          src={image}
        />
        <div class="absolute -bottom-8 -left-1 w-[300%] h-[35%] bg-secondary -rotate-2"></div>
      </div>
      <h1 class="text-xl font-bold mx-4">{title}</h1>
      <p class="text-foreground text-sm mx-4 mb-2">{description}</p>
      <div class="flex flex-col gap-y-4 mt-auto w-full pt-2 m-4">
        <a
          rel="noreferrer"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 w-[85%] lg:w-[90%] !py-2 hover:scale-x-105 transition-all duration-200 ease-in-out  bg-[#1c1c1c] text-white"
          href="/"
        >
          <div class="flex items-center !py-8 justify-center whitespace-nowrap">
            <p>See listings</p>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-2 h-5 w-5"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </div>
        </a>
        <a
          rel="noreferrer"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 w-[85%] lg:w-[90%] !py-2 hover:scale-x-105 transition-all duration-200 ease-in-out"
          href="/"
        >
          <div class="flex items-center justify-center whitespace-nowrap">
            <p>View items</p>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-2 h-5 w-5"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
