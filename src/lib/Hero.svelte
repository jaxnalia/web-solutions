<script lang="ts">
  import Button from './components/Button.svelte';
  import CheckeredPattern from './components/patterns/CheckeredPattern.svelte';
</script>

<section class="relative min-h-[600px] flex items-center mt-16">
  <!-- Background image with overlay -->
  <div class="absolute inset-0 z-0">
    <div class="absolute inset-0 bg-gradient-to-br from-dark-50/95 to-dark-200/95"></div>
    <img 
      src="https://bigjax.s3.eu-west-2.amazonaws.com/mural.png" 
      alt="" 
      class="w-full h-full object-cover"
      loading="eager"
    />
    <CheckeredPattern opacity={0.03} size={30} />
  </div>

  <!-- Content -->
  <div class="container mx-auto px-6 relative z-10 py-32">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-5xl font-bold text-white mb-6">
        Professional Web Solutions for Your Business
      </h1>
      <p class="text-xl text-dark-700 mb-8">
        Expert web design, development, and SEO services to help your business grow online
      </p>
      <Button href="#contact">Contact Us</Button>
      <a href="/#portfolio">
        <button class="inline-block bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
        Portfolio
        </button>
      </a>
      
    </div>
  </div>
</section>