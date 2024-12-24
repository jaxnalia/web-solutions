<script lang="ts">
  export let title: string;
  export let description: string;
  export let icon: string;
  export let color: string;
  export let onClick: () => void;

  const colorClasses = {
    indigo: 'border-indigo-400 hover:border-indigo-300 bg-dark-100 hover:shadow-[0_0_60px_rgba(99,102,241,0.4)]',
    emerald: 'border-emerald-400 hover:border-emerald-300 bg-dark-100 hover:shadow-[0_0_60px_rgba(52,211,153,0.4)]',
    violet: 'border-violet-400 hover:border-violet-300 bg-dark-100 hover:shadow-[0_0_60px_rgba(167,139,250,0.4)]'
  };

  const buttonColorClasses = {
    indigo: 'text-indigo-400 border-indigo-400 group-hover:bg-indigo-400',
    emerald: 'text-emerald-400 border-emerald-400 group-hover:bg-emerald-400',
    violet: 'text-violet-400 border-violet-400 group-hover:bg-violet-400'
  };

  const iconColorClasses = {
    indigo: 'text-indigo-400',
    emerald: 'text-emerald-400',
    violet: 'text-violet-400'
  };

  const iconBgClasses = {
    indigo: 'bg-dark-200',
    emerald: 'bg-dark-200',
    violet: 'bg-dark-200'
  };

  $: iconWithColor = icon.replace('text-primary', iconColorClasses[color]);

  const handleButtonClick = (e: MouseEvent) => {
    e.stopPropagation();
    onClick();
  };
</script>

<div 
  class="group p-6 bg-dark-100 rounded-lg cursor-pointer transition-all duration-300 border-2 {colorClasses[color]} hover:scale-[1.02] flex flex-col" 
  on:click={onClick}
  role="button"
  tabindex="0"
  on:keydown={(e) => e.key === 'Enter' && onClick()}
>
  <div class="w-12 h-12 {iconBgClasses[color]} rounded-lg flex items-center justify-center mb-4">
    {@html iconWithColor}
  </div>
  <h3 class="text-xl font-semibold mb-2 text-white">{title}</h3>
  <p class="text-dark-700 mb-6">{description}</p>
  <div class="mt-auto">
    <button
      class="w-full px-4 py-2 rounded-lg border-2 {buttonColorClasses[color]} group-hover:text-white transition-all duration-300"
      on:click={handleButtonClick}
    >
      Read More
    </button>
  </div>
</div>