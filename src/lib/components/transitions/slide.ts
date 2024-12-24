import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

export function slide(
  node: Element,
  {
    delay = 0,
    duration = 400,
    easing = cubicOut,
    y = 20
  } = {}
): TransitionConfig {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const transform = style.transform === 'none' ? '' : style.transform;

  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
      transform: ${transform} translateY(${u * y}px);
      opacity: ${t * opacity};
    `
  };
}