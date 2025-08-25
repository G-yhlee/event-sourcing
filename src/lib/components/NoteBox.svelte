<script lang="ts">
  import type { Note } from '$lib/types/algebra';
  
  let { note }: { note: Note } = $props();
  
  const typeStyles = {
    definition: 'bg-blue-50 border-blue-500',
    theorem: 'bg-indigo-50 border-indigo-500',
    example: 'bg-green-50 border-green-500',
    warning: 'bg-red-50 border-red-500',
    tip: 'bg-purple-50 border-purple-500'
  };
  
  const typeLabels = {
    definition: '정의',
    theorem: '정리',
    example: '예제',
    warning: '주의',
    tip: '팁'
  };
</script>

<div class="relative my-6 p-6 rounded-lg border-2 {typeStyles[note.type]}">
  <div class="absolute -top-3 left-4 px-2 bg-white font-bold">
    {typeLabels[note.type]}
  </div>
  
  <h3 class="font-bold text-lg mb-2">{note.title}</h3>
  
  <div class="prose prose-amber max-w-none">
    {@html note.content}
  </div>
  
  {#if note.math}
    <div class="mt-4 p-4 bg-white bg-opacity-50 rounded font-mono text-sm">
      {note.math}
    </div>
  {/if}
</div>