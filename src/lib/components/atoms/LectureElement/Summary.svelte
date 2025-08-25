<script lang="ts">
  import type { SummaryAtom } from '$lib/types/algebra';
  
  let { atom }: { atom: SummaryAtom } = $props();
</script>

<div class="mt-8 p-6 {atom.bgColor || 'bg-gray-50 border-gray-200'} rounded-lg border">
  <h3 class="font-bold text-gray-900 mb-3">{atom.title}</h3>
  <ul class="list-disc list-inside text-gray-700 space-y-2">
    {#each atom.points as point}
      <li>{@html point}</li>
    {/each}
  </ul>
</div>