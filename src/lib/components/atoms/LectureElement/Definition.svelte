<script lang="ts">
  import type { DefinitionAtom } from '$lib/types/algebra';
  import { mathLevelState } from '$lib/stores/mathLevel';
  import CodeBlock from '$lib/components/common/CodeBlock.svelte';
  
  let { atom }: { atom: DefinitionAtom } = $props();
</script>

<div class="mb-8">
  <div class="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 relative">
    <div class="absolute -top-3 left-4 bg-blue-50 px-3 py-1 text-sm font-bold text-blue-800 border border-blue-200 rounded">
      정의 (Definition)
    </div>
    
    <h3 class="text-xl font-bold text-blue-900 mb-4 mt-2">{atom.title}</h3>
    
    <div class="text-blue-800 mb-4">
      {@html atom.content[mathLevelState.level]}
    </div>
    
    <div class="bg-white border border-blue-200 rounded p-3 mb-4">
      <div class="text-sm font-semibold text-blue-700 mb-2">수학적 표기:</div>
      <div class="font-mono text-blue-900 text-center text-lg">{atom.formula[mathLevelState.level]}</div>
    </div>
    
    <div class="bg-white border border-blue-200 rounded p-3">
      <div class="text-sm font-semibold text-blue-700 mb-2">조건:</div>
      <ul class="list-disc list-inside text-blue-800 space-y-1">
        {#each atom.conditions[mathLevelState.level] as condition}
          <li>{condition}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>