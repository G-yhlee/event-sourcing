<script lang="ts">
  import type { CodeExampleAtom } from '$lib/types/algebra';
  import CodeBlock from '$lib/components/common/CodeBlock.svelte';
  
  let { atom }: { atom: CodeExampleAtom } = $props();
</script>

<div class="my-6">
  <CodeBlock 
    code={atom.code}
    language={atom.language}
    title={atom.title}
    output={atom.output}
  />
</div>

