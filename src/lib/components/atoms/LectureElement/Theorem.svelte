<script lang="ts">
	import type { TheoremAtom } from '$lib/types/algebra';
	import { mathLevelState } from '$lib/stores/mathLevel.svelte';

	let { atom }: { atom: TheoremAtom } = $props();
	let showProof = $state(false);
</script>

<div class="mb-8">
	<div class="relative rounded-lg border-2 border-green-200 bg-green-50 p-6">
		<div
			class="absolute -top-3 left-4 rounded border border-green-200 bg-green-50 px-3 py-1 text-sm font-bold text-green-800"
		>
			정리 (Theorem)
		</div>

		<h3 class="mt-2 mb-4 text-xl font-bold text-green-900">{atom.title}</h3>

		<div class="mb-4 rounded border border-green-200 bg-white p-4">
			<div class="mb-2 text-sm font-semibold text-green-700">명제:</div>
			<div class="text-green-800">{@html atom.statement[mathLevelState.level]}</div>
		</div>

		{#if atom.proof}
			<div class="mb-4">
				<button
					onclick={() => (showProof = !showProof)}
					class="flex items-center gap-2 rounded bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
				>
					<span>{showProof ? '증명 숨기기' : '증명 보기'}</span>
					<span class="transform transition-transform {showProof ? 'rotate-180' : ''}">▼</span>
				</button>

				{#if showProof}
					<div class="mt-3 rounded border border-green-200 bg-white p-4">
						<div class="mb-2 text-sm font-semibold text-green-700">증명:</div>
						<div class="text-green-800">{@html atom.proof?.[mathLevelState.level] || ''}</div>
					</div>
				{/if}
			</div>
		{/if}

		{#if atom.corollary}
			<div class="rounded border border-green-300 bg-green-100 p-3">
				<div class="mb-2 text-sm font-semibold text-green-700">따름정리:</div>
				<div class="text-green-800">{@html atom.corollary[mathLevelState.level]}</div>
			</div>
		{/if}
	</div>
</div>
