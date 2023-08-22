<script lang="ts">
  export let images: string[];
  export let gradient = "";
  export let href: string;
</script>

<a
  class="relative inline-block p-12 group m-2 max-w-max flex-shrink-0"
  {href}
  target="_blank"
>
  <div
    class="bg-gradient-to-r {gradient} inset-12 blur-3xl group-hover:scale-110 transition-transform absolute will-change-transform"
  />
  <img
    src={images[0]}
    alt="hero"
    draggable="false"
    class="w-96 max-w-full rounded-2xl relative z-10 inline-block transition-transform shadow-2xl group-hover:scale-90"
  />
  <img
    src={images[1]}
    alt="side"
    draggable="false"
    class="w-64 rounded-xl absolute -bottom-0 right-2 transition-transform shadow-2xl
    group-hover:translate-x-4 group-hover:translate-y-2"
  />
  <img
    src={images[2]}
    alt="side"
    draggable="false"
    class="w-44 rounded-xl absolute bottom-2 left-2 transition-transform shadow-2xl
    group-hover:-translate-x-4 group-hover:translate-y-4"
  />
  <img
    src={images[3]}
    alt="side"
    draggable="false"
    class="w-36 z-20 rounded-lg absolute top-4 left-4 transition-transform shadow-2xl
    group-hover:-translate-x-6 group-hover:-translate-y-6"
  />
  <img
    src={images[4]}
    alt="side"
    draggable="false"
    class="w-52 rounded-lg absolute top-6 right-8 transition-transform shadow-2xl
    group-hover:translate-x-10 group-hover:-translate-y-8"
  />
  <div class="absolute right-0 -bottom-4">
    <div
      class="bg-gradient-to-r {gradient} inset-2 blur-lg group-hover:scale-110 transition-transform absolute"
    />
    <button
      class="z-20 bg-gradient-to-r {gradient} py-2 px-8 text-gray-100 rounded-lg font-bold text-lg group-active:scale-90 transition-transform"
    >
      <div
        class="h-2 w-16 bg-current inline-block mb-1 rounded -mr-2 scale-x-50 group-hover:scale-100 transition-transform shadow-md"
      />
      <div
        class="rounded-sm border-y-8 border-y-transparent inline-block border-l-[16px] border-l-current -translate-x-5 group-hover:translate-x-0 transition-transform drop-shadow-md"
      />
    </button>
  </div>
</a>
