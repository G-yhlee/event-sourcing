<script lang="ts">
  import type { PageData } from './$types';
  import ChapterHeader from '$lib/components/ChapterHeader.svelte';
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  import IntroContent from '$lib/components/IntroContent.svelte';
  import LectureElement from '$lib/components/atoms/LectureElement/index.svelte';
  import { getChapterAtoms, getChapterMetadata } from '$lib/data/index';
  
  let { data }: { data: PageData } = $props();
  
  // 현재 챕터의 atoms 데이터와 메타데이터 가져오기
  const atoms = getChapterAtoms(data.chapter.id);
  const metadata = getChapterMetadata(data.chapter.id);
</script>

<div class="bg-white rounded-lg shadow-sm p-8">
  <ChapterHeader chapter={data.chapter} />
  
  {#if data.chapter.id === 'intro'}
    <!-- 강의 소개는 특별한 페이지 -->
    <IntroContent />
  {:else if atoms.length > 0}
    <!-- 일반적인 챕터는 atoms 데이터로 렌더링 -->
    <div class="space-y-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{metadata?.title}</h1>
        <p class="text-lg text-gray-600">{metadata?.subtitle}</p>
      </div>

      {#each atoms as atom}
        <LectureElement {atom} />
      {/each}
    </div>
  {:else}
    <!-- 데이터가 없는 경우 -->
    <div class="text-center py-12">
      <p class="text-amber-700 text-lg">
        이 챕터의 내용은 준비 중입니다.
      </p>
    </div>
  {/if}
  
  <ChapterNavigation currentChapter={data.chapter} />
</div>