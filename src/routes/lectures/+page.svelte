<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		// 메인 강의 페이지에 접속하면 자동으로 intro 페이지로 리다이렉트
		goto('/lectures/introduction');
	});
</script>

<div class="flex min-h-96 items-center justify-center">
	<p class="text-gray-700">강의 소개 페이지로 이동 중...</p>
</div>
