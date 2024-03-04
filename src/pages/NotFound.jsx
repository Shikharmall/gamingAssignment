import React from "react";
import Error from "../image/notfound.png";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <div class="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div class="mx-auto max-w-2xl text-center flex flex-col space-y-8 items-center">
          <img src={Error} alt="404 image" class="w-1/2 rounded" />
          <h2 class="text-5xl font-bold leading-10 tracking-tight ">
            404 - Page Not Found
          </h2>
          <p class="mt-6 text-base leading-7 text-foreground">
            The page you are looking for does not exist or has been moved.
          </p>
          <a href="/">
            <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 mt-8 bg-[#1c1c1c] text-white">
              Go Home
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
