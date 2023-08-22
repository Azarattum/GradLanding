<script>
  import { Article, Collage, Hero } from "$lib";
  import articles from "$lib/data/articles.json";
</script>

<Hero>
  Выпуск<span class="text-cyan-400">&nbsp;2023</span>
  <nav
    slot="nav"
    class="grid w-full gap-4 sm:gap-8 grid-cols-[repeat(auto-fit,minmax(min(100%,12rem),1fr))] my-8 px-8 max-w-7xl"
  >
    {#each articles as { title }}
      <a
        class="px-8 py-3 rounded-lg bg-cyan-300/5 backdrop-blur-sm border-cyan-300 border-2 text-lg text-white uppercase font-bold
        hover:scale-95 transition-transform w-full text-center flex justify-center items-center animate-enter-fall"
        href="#{title}"
      >
        {title}
      </a>
    {/each}
  </nav>
</Hero>

<main class="max-w-7xl mx-auto">
  {#each articles as { title, text, href, images, gradient }, i}
    <div
      id={title}
      class="relative flex flex-col items-center gap-0 lg:gap-16 2xl:gap-32 min-h-screen pb-8"
      class:lg:flex-row={i % 2}
      class:lg:flex-row-reverse={!(i % 2)}
    >
      <div
        class="absolute w-1/3 h-1/2 left-1/3 pointer-events-none"
        style:transform="translate({Math.cos((Math.PI / 5) * i) * 50}%,
        {Math.sin((Math.PI / 5) * i) * 50}%)"
        class:bg-lines-left={i % 2}
        class:bg-lines-right={!(i % 2)}
      />
      <Article>
        <h2 class="max-w-max">
          {title}
          <div class="mt-2 bg-gradient-to-r {gradient} w-32 h-1" />
        </h2>

        {#each text.split("\n") as paragraph}
          <p>{paragraph}</p>
        {/each}
      </Article>
      <Collage {gradient} {href} {images} />
    </div>
  {/each}
</main>
