<script lang="ts">
  export let label: string;
  export let id: string;
  export let value: string;
  export let required = false;
</script>

<div>
  <label for={id} class="block text-sm font-medium text-dark-700 mb-1">
    {label}
  </label>
  <textarea
    {id}
    {required}
    bind:value
    rows="4"
    class="w-full px-4 py-2 rounded-lg bg-dark-200 border border-dark-300 text-white placeholder-dark-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300"
  ></textarea>
</div>