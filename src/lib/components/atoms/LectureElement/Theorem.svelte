<script lang="ts">
  import type { TheoremAtom } from '$lib/types/algebra';
  import { mathLevelState } from '$lib/stores/mathLevel';
  
  let { atom }: { atom: TheoremAtom } = $props();
  let showProof = $state(false);
</script>

<div class="mb-8">
  <div class="bg-green-50 border-2 border-green-200 rounded-lg p-6 relative">
    <div class="absolute -top-3 left-4 bg-green-50 px-3 py-1 text-sm font-bold text-green-800 border border-green-200 rounded">
      정리 (Theorem)
    </div>
    
    <h3 class="text-xl font-bold text-green-900 mb-4 mt-2">{atom.title}</h3>
    
    <div class="bg-white border border-green-200 rounded p-4 mb-4">
      <div class="text-sm font-semibold text-green-700 mb-2">명제:</div>
      <div class="text-green-800">{@html atom.statement[mathLevelState.level]}</div>
    </div>
    
    {#if atom.proof}
      <div class="mb-4">
        <button
          onclick={() => showProof = !showProof}
          class="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
        >
          <span>{showProof ? '증명 숨기기' : '증명 보기'}</span>
          <span class="transform transition-transform {showProof ? 'rotate-180' : ''}">▼</span>
        </button>
        
        {#if showProof}
          <div class="mt-3 bg-white border border-green-200 rounded p-4">
            <div class="text-sm font-semibold text-green-700 mb-2">증명:</div>
            <div class="text-green-800">{@html atom.proof?.[mathLevelState.level] || ''}</div>
          </div>
        {/if}
      </div>
    {/if}
    
    {#if atom.corollary}
      <div class="bg-green-100 border border-green-300 rounded p-3">
        <div class="text-sm font-semibold text-green-700 mb-2">따름정리:</div>
        <div class="text-green-800">{@html atom.corollary[mathLevelState.level]}</div>
      </div>
    {/if}
  </div>
</div>