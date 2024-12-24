<script lang="ts">
  import Button from './components/Button.svelte';
  import Input from './components/Input.svelte';
  import TextArea from './components/TextArea.svelte';

  let formData = {
    name: '',
    email: '',
    message: ''
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };
</script>

<section id="contact" class="py-20 bg-dark-50">
  <div class="container mx-auto px-6">
    <h2 class="text-4xl font-bold text-center text-white mb-12">Get In Touch</h2>
    
    <div class="max-w-lg mx-auto">
      <form on:submit|preventDefault={handleSubmit} class="space-y-6">
        <Input
          label="Name"
          type="text"
          id="name"
          bind:value={formData.name}
          required
        />
        
        <Input
          label="Email"
          type="email"
          id="email"
          bind:value={formData.email}
          required
        />
        
        <TextArea
          label="Message"
          id="message"
          bind:value={formData.message}
          required
        />
        
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  </div>
</section>