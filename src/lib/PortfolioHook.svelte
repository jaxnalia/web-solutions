<script lang="ts">
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      window.location.href = '#portfolio';
    }
  };
</script>

<section 
  id="portfolio"
  class="group w-full bg-dark-100 py-20 hover:bg-dark-200 transition-colors duration-300 cursor-pointer"
  on:click={() => window.location.href = '#portfolio'}
  on:keydown={handleKeyDown}
  role="link"
  tabindex="0"
>
  <div class="container mx-auto px-6">
    <div class="flex flex-col md:flex-row items-center justify-between gap-8">
      <div class="max-w-2xl text-center md:text-left">
        <h2 class="text-4xl font-bold text-white mb-4">Our Latest Work</h2>
        <p class="text-xl text-dark-700">
          Discover our portfolio of successful projects and see how we've helped businesses achieve their digital goals.
        </p>
      </div>
      <div class="flex items-center gap-2 text-primary font-bold">
        Explore
        <svg 
          class="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M13 7l5 5m0 0l-5 5m5-5H6" 
          />
        </svg>
      </div>
    </div>
  </div>
</section>