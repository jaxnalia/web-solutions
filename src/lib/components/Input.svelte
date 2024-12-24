<script lang="ts">
  import type { InputProps, InputType } from '../types/form';

  export let label: string;
  export let type: InputType;
  export let id: string;
  export let value: string;
  export let required = false;
</script>

<div>
  <label for={id} class="block text-sm font-medium text-dark-700 mb-1">
    {label}
  </label>
  {#if type === 'email'}
    <input
      type="email"
      {id}
      {required}
      bind:value
      class="w-full px-4 py-2 rounded-lg bg-dark-200 border border-dark-300 text-white placeholder-dark-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300"
    />
  {:else if type === 'password'}
    <input
      type="password"
      {id}
      {required}
      bind:value
      class="w-full px-4 py-2 rounded-lg bg-dark-200 border border-dark-300 text-white placeholder-dark-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300"
    />
  {:else}
    <input
      type="text"
      {id}
      {required}
      bind:value
      class="w-full px-4 py-2 rounded-lg bg-dark-200 border border-dark-300 text-white placeholder-dark-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300"
    />
  {/if}
</div>