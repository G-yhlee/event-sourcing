<script lang="ts">
  import type { MathDefinitionAtom } from '$lib/types/algebra';
  
  let { atom }: { atom: MathDefinitionAtom } = $props();
</script>

<div class="mb-8">
  <h3 class="text-xl font-semibold text-blue-900 mb-4">🔵 수학적 관점</h3>
  <div class="definition-box">
    <h4 class="font-bold text-blue-900 mb-3">{atom.title}</h4>
    <div class="text-blue-800">
      {@html atom.content}
      {#if atom.formula}
        <div class="mt-3 p-2 bg-blue-100 rounded font-mono text-center">
          {atom.formula}
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  /* 정의 박스 */
  :global(.definition-box) {
    background-color: #eff6ff;
    border: 2px solid #3b82f6;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin: 1.5rem 0;
    position: relative;
  }

  :global(.definition-box::before) {
    content: "정의";
    position: absolute;
    top: -0.75rem;
    left: 1rem;
    background-color: #eff6ff;
    padding: 0 0.5rem;
    font-weight: bold;
    color: #1e40af;
  }
</style>