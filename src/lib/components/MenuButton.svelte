<script lang="ts">
  export let isMenuOpen: boolean;
  export let toggleMenu: () => void;
</script>

<button 
  class="md:hidden text-dark-700 hover:text-primary transition-colors duration-300 p-2" 
  on:click={toggleMenu}
>
  <div class="w-6 h-6 relative">
    <span 
      class="absolute h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out"
      style="top: {isMenuOpen ? '50%' : '25%'}; transform: translateY(-50%) {isMenuOpen ? 'rotate(45deg)' : ''}"
    ></span>
    <span 
      class="absolute h-0.5 w-full bg-current top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out"
      style="opacity: {isMenuOpen ? '0' : '1'}"
    ></span>
    <span 
      class="absolute h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out"
      style="bottom: {isMenuOpen ? '50%' : '25%'}; transform: translateY(50%) {isMenuOpen ? 'rotate(-45deg)' : ''}"
    ></span>
  </div>
</button>