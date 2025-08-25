<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  
  onMount(() => {
    // 메인 페이지에 접속하면 자동으로 강의 페이지로 리다이렉트
    goto('/lectures');
  });
</script>

<svelte:head>
  <title>대수적 구조 강의노트</title>
  <meta name="description" content="TypeScript로 배우는 추상 대수학" />
</svelte:head>

<div class="flex items-center justify-center min-h-screen">
  <p class="text-amber-700">강의 페이지로 이동 중...</p>
</div>