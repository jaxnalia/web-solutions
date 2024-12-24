<script lang="ts">
  export let opacity = 0.05;
  export let size = 20;
  export let color = '#262626';
</script>

<div 
  class="absolute inset-0 z-10 pointer-events-none"
  style="
    opacity: {opacity};
    background-size: {size}px {size}px;
    background-image: linear-gradient(45deg, {color} 25%, transparent 25%),
                      linear-gradient(-45deg, {color} 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, {color} 75%),
                      linear-gradient(-45deg, transparent 75%, {color} 75%);
  "
></div>