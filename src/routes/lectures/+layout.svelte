<script lang="ts">
  import { page } from '$app/stores';
  import { chapters } from '$lib/data/chapters';
  import '../../app.css';
  
  let { children } = $props();

  let currentChapter = $derived($page.params.chapter);
</script>

<div class="h-screen bg-gray-50 flex flex-col overflow-hidden">
  <!-- 헤더 (고정) -->
  <header class="bg-white border-b border-gray-200 shadow-sm flex-shrink-0">
    <div class="max-w-7xl mx-auto px-4 py-4">
      <h1 class="text-3xl font-bold text-gray-900 font-serif">
        대수적 구조 강의노트
      </h1>
      <p class="text-gray-600 mt-1">with TypeScript</p>
    </div>
  </header>

  <div class="flex flex-1 max-w-7xl mx-auto w-full h-0">
    <!-- 사이드바 (데스크톱에서만 표시, 고정, 스크롤 가능) -->
    <aside class="hidden lg:block w-64 bg-white border-r border-gray-200 flex-shrink-0 h-full overflow-y-auto">
      <div class="p-4">
        <nav>
          <h2 class="font-bold text-gray-900 mb-4 text-lg sticky top-0 bg-white py-2 border-b border-gray-100">목차</h2>
          <ul class="space-y-2">
            {#each chapters as chapter}
              <li>
                <a
                  href="/lectures/{chapter.id}"
                  class="block p-3 rounded-lg transition-all duration-200 hover:bg-gray-100 {currentChapter === chapter.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''}"
                >
                  <div class="flex items-center gap-2">
                    <span class="text-gray-600 font-bold">{chapter.number}.</span>
                    <span class="text-gray-900 font-medium text-sm">{chapter.title}</span>
                  </div>
                  <div class="text-xs text-gray-600 mt-1">{chapter.subtitle}</div>
                  <div class="flex flex-wrap gap-1 mt-2">
                    {#each chapter.topics as topic}
                      <span class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                        {topic}
                      </span>
                    {/each}
                  </div>
                </a>
              </li>
            {/each}
          </ul>
        </nav>
      </div>
    </aside>

    <!-- 메인 콘텐츠 (스크롤 가능) -->
    <main class="flex-1 h-full overflow-y-auto">
      <div class="p-4 lg:p-8">
        <!-- 모바일에서만 표시되는 목차 드롭다운 -->
        <div class="lg:hidden mb-6 bg-white rounded-lg border border-gray-200 p-4">
          <details class="group">
            <summary class="cursor-pointer font-bold text-gray-900 text-lg flex items-center justify-between">
              📚 목차
              <span class="transition-transform group-open:rotate-180">▼</span>
            </summary>
            <div class="mt-4 space-y-2">
              {#each chapters as chapter}
                <a
                  href="/lectures/{chapter.id}"
                  class="block p-2 rounded transition-all duration-200 hover:bg-gray-100 {currentChapter === chapter.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''}"
                >
                  <div class="font-medium">{chapter.number}. {chapter.title}</div>
                  <div class="text-sm text-gray-600">{chapter.subtitle}</div>
                </a>
              {/each}
            </div>
          </details>
        </div>

        <div class="prose prose-amber max-w-none">
          {@render children()}
        </div>
      </div>
    </main>
  </div>
</div>

<style>
  /* 깔끔한 배경 */
  :global(.notebook-paper) {
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  /* 스크롤바 스타일링 */
  aside::-webkit-scrollbar, main::-webkit-scrollbar {
    width: 6px;
  }
  
  aside::-webkit-scrollbar-track, main::-webkit-scrollbar-track {
    background: #f1f5f9;
  }
  
  aside::-webkit-scrollbar-thumb, main::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }
  
  aside::-webkit-scrollbar-thumb:hover, main::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
  
  /* Firefox 스크롤바 */
  aside, main {
    scrollbar-width: thin;
    scrollbar-color: #cbd5e1 #f1f5f9;
  }

  /* 수학 필기 스타일 */
  :global(.math-note) {
    font-family: 'Courier New', monospace;
    background-color: #f3f4f6;
    border-left: 4px solid #3b82f6;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 0.25rem;
  }

  /* 정의 박스 */
  :global(.definition-box) {
    background-color: #eff6ff;
    border: 2px solid #3b82f6;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin: 1.5rem 0;
    position: relative;
  }

  :global(.definition-box::before) {
    content: "정의";
    position: absolute;
    top: -0.75rem;
    left: 1rem;
    background-color: #eff6ff;
    padding: 0 0.5rem;
    font-weight: bold;
    color: #1e40af;
  }

  /* 예제 박스 */
  :global(.example-box) {
    background-color: #ecfdf5;
    border: 2px solid #10b981;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin: 1.5rem 0;
    position: relative;
  }

  :global(.example-box::before) {
    content: "예제";
    position: absolute;
    top: -0.75rem;
    left: 1rem;
    background-color: #ecfdf5;
    padding: 0 0.5rem;
    font-weight: bold;
    color: #059669;
  }

  /* 중요 포인트 */
  :global(.important-point) {
    background-color: #fef2f2;
    border-left: 4px solid #ef4444;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 0.25rem;
  }

  /* 손글씨 느낌 */
  :global(.handwriting) {
    font-family: 'Kalam', cursive;
    color: #1e40af;
    font-size: 1.1rem;
  }
</style>