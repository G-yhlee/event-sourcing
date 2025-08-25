<script lang="ts">
  import { onMount } from 'svelte';
  import Prism from 'prismjs';
  import 'prismjs/components/prism-typescript';
  import 'prismjs/themes/prism-tomorrow.css';
  
  let { 
    code, 
    language = 'typescript', 
    title, 
    showCopy = true,
    output 
  }: { 
    code: string; 
    language?: string; 
    title?: string; 
    showCopy?: boolean;
    output?: string;
  } = $props();
  
  let codeElement = $state<HTMLElement>();
  
  onMount(() => {
    if (codeElement) {
      Prism.highlightElement(codeElement);
    }
  });
  
  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
    } catch (err) {
      console.error('코드 복사 실패:', err);
    }
  }
</script>

{#if title}
  <div class="flex items-center justify-between mb-2">
    <h4 class="font-bold text-gray-900">{title}</h4>
    {#if showCopy}
      <button
        onclick={copyCode}
        class="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm flex items-center gap-1"
      >
        📋 복사
      </button>
    {/if}
  </div>
{/if}

<div class="relative bg-gray-900 rounded-lg overflow-hidden">
  <div class="absolute top-3 right-3 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
    {language}
  </div>
  
  <pre class="p-4 overflow-auto max-h-96">
    <code bind:this={codeElement} class="language-{language === 'typescript' ? 'typescript' : 'javascript'}">{code}</code>
  </pre>
</div>

{#if output}
  <div class="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
    <div class="text-sm font-bold text-green-800 mb-2">💡 예상 출력:</div>
    <pre class="text-sm text-green-700 overflow-auto max-h-32">{output}</pre>
  </div>
{/if}

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