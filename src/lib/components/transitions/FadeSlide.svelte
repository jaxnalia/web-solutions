<script lang="ts">
  import { fade } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  export let duration = 200;
</script>

<div
  in:fade|local={{ duration, easing: cubicOut }}
  out:fade|local={{ duration, easing: cubicOut }}
  class="contents"
>
  <slot />
</div>