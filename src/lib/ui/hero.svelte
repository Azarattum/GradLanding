<header
  class="min-h-[100svh] flex items-center flex-col bg-stone-700 overflow-hidden bg-hero from-cyan-700 via-cyan-900 to-neutral-900 bg-blend-overlay"
>
  <h1
    class="w-full items-center z-10 justify-center uppercase text-white font-bold text-4xl md:text-6xl lg:text-8xl flex-grow flex"
  >
    <div class="relative">
      <div
        class="absolute -top-4 h-1 w-1/3 bg-white animate-enter-slide origin-left"
      />
      <slot />
      <div
        class="absolute -bottom-6 right-0 h-1 w-1/3 bg-white animate-enter-slide origin-right"
      />
    </div>
  </h1>
  <slot name="nav" />
  <div class="absolute bottom-0 w-full bg-neutral-900 h-[4.5vw]" />
  <img src="./images/people.webp" class="z-10" alt="people seating" />
</header>
