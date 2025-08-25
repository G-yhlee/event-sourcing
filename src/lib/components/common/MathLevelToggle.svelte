<script lang="ts">
  import { mathLevelState } from '$lib/stores/mathLevel';
</script>

<div class="flex items-center gap-2 mb-4">
  <span class="text-sm font-medium text-gray-700">수학 레벨:</span>
  <button
    onclick={() => mathLevelState.toggle()}
    class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 {mathLevelState.level === 'graduate' ? 'bg-blue-600' : 'bg-gray-200'}"
  >
    <span class="sr-only">수학 레벨 변경</span>
    <span
      class="inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out {mathLevelState.level === 'graduate' ? 'translate-x-6' : 'translate-x-1'}"
    ></span>
  </button>
  <div class="flex gap-2 text-sm">
    <span class="{mathLevelState.level === 'undergraduate' ? 'text-blue-600 font-semibold' : 'text-gray-500'}">
      대학
    </span>
    <span class="text-gray-300">|</span>
    <span class="{mathLevelState.level === 'graduate' ? 'text-blue-600 font-semibold' : 'text-gray-500'}">
      대학원
    </span>
  </div>
</div>