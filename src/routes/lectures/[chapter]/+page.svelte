<!-- ...existing code... -->
<script lang="ts">
	import type { PageData } from './$types';
	import type { LectureAtom } from '$lib/types/algebra';
	import ChapterHeader from '$lib/components/ChapterHeader.svelte';
	import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
	import IntroContent from '$lib/components/IntroContent.svelte';
	import LectureElement from '$lib/components/atoms/LectureElement/index.svelte';
	import { getChapterAtoms, getChapterMetadata } from '$lib/data/index';

	// Svelte 5: export let data 로 받아 반응성 보장
	export let data: PageData;

	// 반응형으로 갱신되도록 선언
	let atoms: LectureAtom[] = [];
	let metadata: { title: string; subtitle: string } | null = null;

	$: atoms = getChapterAtoms(data.chapter.id);
	$: metadata = getChapterMetadata(data.chapter.id);
</script>

<!-- ...existing code... -->
<div class="rounded-lg bg-white p-8 shadow-sm">
	<ChapterHeader chapter={data.chapter} />

	{#if data.chapter.id === 'intro'}
		<!-- 강의 소개는 특별한 페이지 -->
		<IntroContent />
	{:else if atoms.length > 0}
		<!-- 일반적인 챕터는 atoms 데이터로 렌더링 -->
		<div class="space-y-8">
			{#each atoms as atom}
				<LectureElement {atom} />
			{/each}
		</div>
	{:else}
		<!-- 데이터가 없는 경우 -->
		<div class="py-12 text-center">
			<p class="text-lg text-amber-700">이 챕터의 내용은 준비 중입니다.</p>
		</div>
	{/if}

	<ChapterNavigation currentChapter={data.chapter} />
</div>
