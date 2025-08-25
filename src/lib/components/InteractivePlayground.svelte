<script lang="ts">
  import { onMount } from 'svelte';
  import Prism from 'prismjs';
  import 'prismjs/components/prism-typescript';
  
  let { initialCode = '', title = '실습 공간' } = $props();
  
  let code = $state(initialCode);
  let codePreviewElement: HTMLElement;
  
  // 코드가 변경될 때마다 하이라이팅 업데이트
  $effect(() => {
    if (codePreviewElement && code) {
      codePreviewElement.innerHTML = Prism.highlight(code, Prism.languages.typescript, 'typescript');
    }
  });
  
  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
    } catch (err) {
      console.error('코드 복사 실패:', err);
    }
  }
  
  function resetCode() {
    code = initialCode;
  }
</script>

<div class="my-8 border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
  <div class="bg-gray-100 px-4 py-3 flex items-center justify-between border-b border-gray-300">
    <h3 class="font-bold text-gray-900">{title}</h3>
    <div class="flex items-center gap-2">
      <button
        on:click={resetCode}
        class="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
      >
        초기화
      </button>
      <button
        on:click={copyCode}
        class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
      >
        📋 복사
      </button>
    </div>
  </div>
  
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div class="border-r border-gray-200">
      <div class="p-3 bg-gray-50 text-sm font-bold text-gray-700">코드 편집</div>
      <textarea
        bind:value={code}
        class="w-full h-80 p-4 font-mono text-sm bg-white border-0 resize-none focus:outline-none"
        placeholder="여기에 TypeScript 코드를 작성하세요..."
      />
    </div>
    
    <div>
      <div class="p-3 bg-gray-50 text-sm font-bold text-gray-700">미리보기 (문법 하이라이팅)</div>
      <div class="h-80 p-4 bg-gray-900 overflow-auto">
        <pre class="text-sm">
          <code bind:this={codePreviewElement} class="language-typescript text-gray-100">
            {code || '코드를 입력하면 여기에 하이라이팅된 미리보기가 표시됩니다...'}
          </code>
        </pre>
      </div>
    </div>
  </div>
  
  <div class="p-3 bg-yellow-50 border-t border-yellow-200 text-sm text-yellow-800">
    💡 <strong>실습 팁:</strong> 왼쪽에 코드를 작성하면 오른쪽에 문법 하이라이팅된 미리보기가 표시됩니다. 
    실제 실행은 VS Code 등의 개발 환경에서 해보세요!
  </div>
</div>

<style>
  textarea {
    font-family: 'Fira Code', 'Consolas', monospace;
    resize: none;
  }
  
  pre {
    font-family: 'Fira Code', 'Consolas', monospace;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
</style>