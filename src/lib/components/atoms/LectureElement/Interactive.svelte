<script lang="ts">
	import type { InteractiveAtom } from '$lib/types/algebra';
	import Prism from 'prismjs';
	import 'prismjs/components/prism-typescript';
	import 'prismjs/themes/prism-tomorrow.css';

	let { atom }: { atom: InteractiveAtom } = $props();
	let playgroundCode = $state('');
	let playgroundPreviewElement = $state<HTMLElement>();

	// 인터랙티브 플레이그라운드 하이라이팅
	$effect(() => {
		if (playgroundPreviewElement && playgroundCode) {
			playgroundPreviewElement.innerHTML = Prism.highlight(
				playgroundCode,
				Prism.languages.typescript,
				'typescript'
			);
		}
	});

	// 초기 코드 설정
	$effect(() => {
		playgroundCode = atom.initialCode;
	});

	async function copyCode() {
		try {
			await navigator.clipboard.writeText(playgroundCode);
		} catch (err) {
			console.error('코드 복사 실패:', err);
		}
	}

	function resetPlayground() {
		playgroundCode = atom.initialCode;
	}
</script>

<div class="my-8 overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm">
	<div class="flex items-center justify-between border-b border-gray-300 bg-gray-100 px-4 py-3">
		<h3 class="font-bold text-gray-900">{atom.title}</h3>
		<div class="flex items-center gap-2">
			<button
				onclick={resetPlayground}
				class="rounded bg-gray-500 px-3 py-1 text-sm text-white hover:bg-gray-600"
			>
				초기화
			</button>
			<button
				onclick={copyCode}
				class="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
			>
				📋 복사
			</button>
		</div>
	</div>

	<div class="relative">
		<div class="h-80 overflow-auto rounded-lg bg-gray-900" style="pointer-events: auto;">
			<pre class="p-4 text-sm">
        <code bind:this={playgroundPreviewElement} class="language-typescript text-gray-100">
          {playgroundCode || '코드를 입력하면 여기에 하이라이팅된 미리보기가 표시됩니다...'}
        </code>
      </pre>
		</div>

		<textarea
			bind:value={playgroundCode}
			class="absolute inset-0 h-full w-full resize-none rounded-lg border-0 bg-transparent p-4 font-mono text-sm text-transparent caret-white focus:outline-none"
			placeholder=""
			spellcheck="false"
			style="pointer-events: none;"
			onpointerdown={(e) => (e.currentTarget.style.pointerEvents = 'auto')}
			onblur={(e) => (e.currentTarget.style.pointerEvents = 'none')}
		></textarea>
	</div>
</div>

<style>
	textarea {
		font-family: 'Fira Code', 'Consolas', monospace;
		resize: none;
	}

	pre {
		font-family: 'Fira Code', 'Consolas', monospace;
		white-space: pre-wrap;
		word-wrap: break-word;
	}
</style>
