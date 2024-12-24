import { writable } from 'svelte/store';

export const isMenuOpen = writable(false);

export const closeMenu = () => {
  isMenuOpen.set(false);
};