<script lang="ts">
  import { page } from '$app/stores';
  import { chapters } from '$lib/data/chapters';
  import NoteBox from '$lib/components/NoteBox.svelte';
  import CodeExample from '$lib/components/CodeExample.svelte';
  import InteractivePlayground from '$lib/components/InteractivePlayground.svelte';
  import type { PageData } from './$types';
  
  let { data }: { data: PageData } = $props();
  
  // 각 챕터별 컨텐츠를 동적으로 가져오기
  import IntroContent from './intro.svelte';
  import IntroductionContent from './introduction.svelte';
  import MagmaContent from './magma.svelte';
  import SemigroupContent from './semigroup.svelte';
  import MonoidContent from './monoid.svelte';
  
  const chapterComponents: Record<string, any> = {
    intro: IntroContent,
    introduction: IntroductionContent,
    magma: MagmaContent,
    semigroup: SemigroupContent,
    monoid: MonoidContent
  };
  
  let ChapterComponent = $derived(chapterComponents[data.chapter.id]);
</script>

<div class="bg-white rounded-lg shadow-sm p-8">
  <header class="mb-8">
    <div class="text-blue-600 text-sm font-bold">
      Chapter {data.chapter.number}
    </div>
    <h1 class="text-4xl font-bold text-gray-900 mt-2">
      {data.chapter.title}
    </h1>
    <p class="text-xl text-gray-700 mt-2">
      {data.chapter.subtitle}
    </p>
  </header>
  
  {#if ChapterComponent}
    <svelte:component this={ChapterComponent} />
  {:else}
    <div class="text-center py-12">
      <p class="text-amber-700 text-lg">
        이 챕터의 내용은 준비 중입니다.
      </p>
    </div>
  {/if}
  
  <nav class="mt-12 pt-8 border-t border-gray-300 flex justify-between">
    {#each data.chapter.number > 0 ? [chapters[data.chapter.number - 1]] : [] as prevChapter}
      <a
        href="/lectures/{prevChapter.id}"
        class="text-blue-600 hover:text-blue-800"
      >
        ← 이전: {prevChapter.title}
      </a>
    {/each}
    
    {#each data.chapter.number < chapters.length - 1 ? [chapters[data.chapter.number + 1]] : [] as nextChapter}
      <a
        href="/lectures/{nextChapter.id}"
        class="text-blue-600 hover:text-blue-800 ml-auto"
      >
        다음: {nextChapter.title} →
      </a>
    {/each}
  </nav>
</div>