<script lang="ts">
  import type { ImportantAtom } from '$lib/types/algebra';
  
  let { atom }: { atom: ImportantAtom } = $props();
</script>

<div class="important-point">
  {@html atom.content}
</div>

<style>
  /* 중요 포인트 */
  :global(.important-point) {
    background-color: #fef2f2;
    border-left: 4px solid #ef4444;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 0.25rem;
  }
</style>