<script lang="ts">
  import Modal from './components/Modal.svelte';
  import ServiceCard from './components/ServiceCard.svelte';
  import ServiceModal from './components/ServiceModal.svelte';
  import { services } from './data/services';
  import type { Service } from './types/service';
  
  let selectedService: Service | null = null;
  let isModalOpen = false;

  const openModal = (service: Service) => {
    selectedService = service;
    isModalOpen = true;
  };

  const closeModal = () => {
    isModalOpen = false;
    selectedService = null;
  };
</script>

<section id="services" class="py-20 bg-dark-50">
  <div class="container mx-auto px-6">
    <h2 class="text-4xl font-bold text-center text-white mb-12">Our Services</h2>
    
    <div class="grid md:grid-cols-3 gap-8">
      {#each services as service}
        <ServiceCard 
          title={service.title}
          description={service.description}
          icon={service.icon}
          color={service.color}
          onClick={() => openModal(service)}
        />
      {/each}
    </div>
  </div>
</section>

<Modal isOpen={isModalOpen} onClose={closeModal} color={selectedService?.color || 'indigo'}>
  {#if selectedService}
    <ServiceModal service={selectedService} onClose={closeModal} />
  {/if}
</Modal>