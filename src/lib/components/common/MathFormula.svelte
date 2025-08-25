<script lang="ts">
  import { onMount } from 'svelte';
  
  let { 
    formula, 
    display = false,
    className = ""
  }: { 
    formula: string; 
    display?: boolean;
    className?: string;
  } = $props();
  
  let mathElement = $state<HTMLElement>();
  
  onMount(async () => {
    if (mathElement) {
      // MathJax 또는 KaTeX를 사용할 수 있지만, 여기서는 기본 수식 표시
      // 실제로는 MathJax나 KaTeX를 설정해야 함
      mathElement.innerHTML = formula;
    }
  });
</script>

<span 
  bind:this={mathElement}
  class={`font-mono ${display ? 'block text-center text-lg my-2' : 'inline'} ${className}`}
>
  {formula}
</span>

<style>
  /* 수학 기호들을 위한 폰트 설정 */
  span {
    font-family: 'STIX Two Math', 'Times New Roman', serif;
  }
</style>