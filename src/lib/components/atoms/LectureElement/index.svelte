<script lang="ts">
  import type { Component } from 'svelte';
  import type { LectureAtom } from '$lib/types/algebra';
  import Definition from './Definition.svelte';
  import Theorem from './Theorem.svelte';
  import MathDefinition from './MathDefinition.svelte';
  import ProgDefinition from './ProgDefinition.svelte';
  import CodeExample from './CodeExample.svelte';
  import Summary from './Summary.svelte';
  import Important from './Important.svelte';

  interface Props {
    atom: LectureAtom;
  }
  let { atom }: Props = $props();

  const components: Record<string, Component<any>> = {
    'definition': Definition,
    'theorem': Theorem,
    'math-definition': MathDefinition,
    'prog-definition': ProgDefinition,
    'code-example': CodeExample,
    'summary': Summary,
    'important': Important
  };
</script>

{#if atom.type in components}
  {@const SvelteComponent = components[atom.type]}
  <SvelteComponent {atom} />
{/if}