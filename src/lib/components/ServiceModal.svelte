<script lang="ts">
  import type { Service } from '../types/service';
  
  export let service: Service;
  export let onClose: () => void;

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

  const buttonColorClasses = {
    indigo: 'bg-indigo-400 hover:bg-white hover:text-indigo-400 border-indigo-400',
    emerald: 'bg-emerald-400 hover:bg-white hover:text-emerald-400 border-emerald-400',
    violet: 'bg-violet-400 hover:bg-white hover:text-violet-400 border-violet-400'
  };

  $: iconWithColor = service.icon.replace('text-primary', iconColorClasses[service.color]);

  const handleGetStarted = () => {
    onClose();
  };
</script>

<div class="space-y-6">
  <div class="flex items-center gap-4 sticky top-0 bg-dark-100 py-2">
    <div class="w-12 h-12 {iconBgClasses[service.color]} rounded-lg flex items-center justify-center">
      {@html iconWithColor}
    </div>
    <h2 class="text-3xl font-bold text-white">{service.title}</h2>
  </div>
  
  <div class="space-y-4">
    <h3 class="text-xl font-semibold text-dark-900">Key Features</h3>
    <ul class="list-disc pl-5 space-y-2">
      {#each service.details.features as feature}
        <li class="text-dark-700">{feature}</li>
      {/each}
    </ul>
  </div>
  
  <div class="space-y-2">
    <h3 class="text-xl font-semibold text-dark-900">Our Process</h3>
    <p class="text-dark-700">{service.details.process}</p>
  </div>
  
  <div class="space-y-2">
    <h3 class="text-xl font-semibold text-dark-900">What You Get</h3>
    <p class="text-dark-700">{service.details.deliverables}</p>
  </div>
  
  <div class="pt-4">
    <a 
      href="#contact" 
      class="inline-block text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 border-2 {buttonColorClasses[service.color]}"
      on:click={handleGetStarted}
    >
      Get Started with {service.title}
    </a>
  </div>
</div>