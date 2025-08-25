<script lang="ts">
  import type { CodeExample } from '$lib/types/algebra';
  import { onMount } from 'svelte';
  import Prism from 'prismjs';
  import 'prismjs/components/prism-typescript';
  import 'prismjs/themes/prism-tomorrow.css';
  
  let { example }: { example: CodeExample } = $props();
  let codeElement: HTMLElement;
  
  onMount(() => {
    if (codeElement) {
      Prism.highlightElement(codeElement);
    }
  });
  
  // 코드를 복사하는 함수
  async function copyCode() {
    try {
      await navigator.clipboard.writeText(example.code);
    } catch (err) {
      console.error('코드 복사 실패:', err);
    }
  }
</script>

<div class="my-6">
  <div class="flex items-center justify-between mb-2">
    <h4 class="font-bold text-gray-900">{example.title}</h4>
    <button
      on:click={copyCode}
      class="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm flex items-center gap-1"
    >
      📋 복사
    </button>
  </div>
  
  <div class="relative bg-gray-900 rounded-lg overflow-hidden">
    <div class="absolute top-3 right-3 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
      {example.language}
    </div>
    
    <pre class="p-4 overflow-x-auto">
      <code bind:this={codeElement} class="language-{example.language === 'typescript' ? 'typescript' : 'javascript'}">{example.code}</code>
    </pre>
  </div>
  
  {#if example.output}
    <div class="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
      <div class="text-sm font-bold text-green-800 mb-2">💡 예상 출력:</div>
      <pre class="text-sm text-green-700">{example.output}</pre>
    </div>
  {/if}
</div>

<style>
  pre {
    font-family: 'Fira Code', 'Consolas', monospace;
    font-size: 0.875rem;
    line-height: 1.5;
  }
  
  code {
    font-family: inherit;
  }
</style>