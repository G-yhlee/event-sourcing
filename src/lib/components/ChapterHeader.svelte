<script lang="ts">
  import type { Chapter } from '$lib/types/algebra';
  
  let { chapter }: { chapter: Chapter } = $props();
</script>

<header class="mb-8">
  <div class="text-blue-600 text-sm font-bold">
    Chapter {chapter.number}
  </div>
  <h1 class="text-4xl font-bold text-gray-900 mt-2">
    {chapter.title}
  </h1>
  <p class="text-xl text-gray-700 mt-2">
    {chapter.subtitle}
  </p>
</header>