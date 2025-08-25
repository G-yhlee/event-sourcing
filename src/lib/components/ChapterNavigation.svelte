<script lang="ts">
  import { chapters } from '$lib/data/chapters';
  import type { Chapter } from '$lib/types/algebra';
  
  let { currentChapter }: { currentChapter: Chapter } = $props();
</script>

<nav class="mt-12 pt-8 border-t border-gray-300 flex justify-between">
  {#if currentChapter.number > 0}
    {@const prevChapter = chapters[currentChapter.number - 1]}
    <a
      href="/lectures/{prevChapter.id}"
      class="text-blue-600 hover:text-blue-800 transition-colors"
    >
      ← 이전: {prevChapter.title}
    </a>
  {/if}
  
  {#if currentChapter.number < chapters.length - 1}
    {@const nextChapter = chapters[currentChapter.number + 1]}
    <a
      href="/lectures/{nextChapter.id}"
      class="text-blue-600 hover:text-blue-800 ml-auto transition-colors"
    >
      다음: {nextChapter.title} →
    </a>
  {/if}
</nav>