<script lang="ts">
  export let href: string;
  export let mobile = false;
  export let onNavigate: (() => void) | undefined = undefined;

  const handleClick = () => {
    if (onNavigate) {
      onNavigate();
    }
  };
</script>

<a 
  {href} 
  on:click={handleClick}
  class="
    px-4 py-2 rounded-lg border-2 border-dark-300 
    hover:border-primary hover:text-primary 
    transition-all duration-300
    {mobile ? 'block w-full text-center' : ''}
  "
>
  <slot />
</a>