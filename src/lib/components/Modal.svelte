<script lang="ts">
  import { fade } from 'svelte/transition';
  import { slide } from './transitions/slide';
  
  export let isOpen: boolean;
  export let onClose: () => void;
  export let color: string = 'indigo';

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  };

  const colorClasses = {
    indigo: 'border-indigo-400 hover:border-indigo-300 bg-dark-100',
    emerald: 'border-emerald-400 hover:border-emerald-300 bg-dark-100',
    violet: 'border-violet-400 hover:border-violet-300 bg-dark-100'
  };
</script>

<svelte:window on:keydown={handleEscape}/>

{#if isOpen}
  <div 
    class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
    transition:fade|local={{ duration: 100 }}
  >
    <div 
      class="relative max-w-2xl w-full max-h-[calc(100vh-2rem)] flex flex-col rounded-lg border-2 shadow-lg transition-all duration-300 {colorClasses[color]}"
      transition:slide|local={{ duration: 200, y: 30 }}
    >
      <button 
        on:click={onClose}
        class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-dark-200 border-2 border-dark-300 text-dark-600 hover:text-dark-400 flex items-center justify-center transition-colors duration-300 hover:border-primary"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div class="overflow-y-auto">
        <div class="p-6">
          <slot />
        </div>
      </div>
    </div>
  </div>
{/if}