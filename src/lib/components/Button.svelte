<script lang="ts">
  export let href: string | undefined = undefined;
  export let type: "button" | "submit" = "button";
  export let onClick: (() => void) | undefined = undefined;
</script>

{#if href}
  <a
    {href}
    class="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
  >
    <slot />
  </a>
{:else}
  <button
    {type}
    on:click={onClick}
    class="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
  >
    <slot />
  </button>
{/if}