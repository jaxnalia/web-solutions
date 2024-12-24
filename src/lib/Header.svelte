<script lang="ts">
  import NavLink from './components/NavLink.svelte';
  import Logo from './components/Logo.svelte';
  import MenuButton from './components/MenuButton.svelte';
  import { isMenuOpen, closeMenu } from './stores/navigation';
  
  const toggleMenu = () => isMenuOpen.update(value => !value);
  
  const links = [
    { href: '#services', text: 'Services' },
    { href: '#portfolio', text: 'Portfolio' },
    { href: '#contact', text: 'Contact' }
  ];
</script>

<header class="bg-dark-100 shadow-lg fixed w-full top-0 z-50 border-b border-dark-300">
  <nav class="container mx-auto px-6 py-4">
    <div class="flex justify-between items-center">
      <Logo />
      <MenuButton isMenuOpen={$isMenuOpen} {toggleMenu} />
      
      <div class="hidden md:flex items-center gap-4">
        {#each links as link}
          <NavLink href={link.href}>{link.text}</NavLink>
        {/each}
      </div>
    </div>
    
    {#if $isMenuOpen}
    <div class="md:hidden mt-4 space-y-4 pb-4">
      {#each links as link}
        <NavLink href={link.href} mobile onNavigate={closeMenu}>{link.text}</NavLink>
      {/each}
    </div>
    {/if}
  </nav>
</header>