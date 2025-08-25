<script lang="ts">
  import type { ProgDefinitionAtom } from '$lib/types/algebra';
  import CodeBlock from '$lib/components/common/CodeBlock.svelte';
  
  let { atom }: { atom: ProgDefinitionAtom } = $props();
</script>

<div class="mb-8">
  <h3 class="text-xl font-semibold text-green-700 mb-4">💻 프로그래밍 관점</h3>
  <div class="p-4 bg-green-50 border border-green-200 rounded-lg">
    <h4 class="font-bold text-green-900 mb-3">{atom.title}</h4>
    <div class="text-green-800">
      {@html atom.content}
      {#if atom.interface}
        <div class="mt-3">
          <CodeBlock 
            code={atom.interface}
            language="typescript"
            showCopy={false}
          />
        </div>
      {/if}
    </div>
  </div>
</div>

