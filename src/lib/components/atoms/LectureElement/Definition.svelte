<script lang="ts">
	import type { DefinitionAtom } from '$lib/types/algebra';
	import { mathLevelState } from '$lib/stores/mathLevel.svelte';
	import CodeBlock from '$lib/components/common/CodeBlock.svelte';

	let { atom }: { atom: DefinitionAtom } = $props();
</script>

<div class="mb-8">
	<div class="relative rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
		<div
			class="absolute -top-3 left-4 rounded border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-bold text-blue-800"
		>
			정의 (Definition)
		</div>

		<h3 class="mt-2 mb-4 text-xl font-bold text-blue-900">{atom.title}</h3>

		<div class="mb-4 text-blue-800">
			{@html atom.content[mathLevelState.level]}
		</div>

		<div class="mb-4 rounded border border-blue-200 bg-white p-3">
			<div class="mb-2 text-sm font-semibold text-blue-700">수학적 표기:</div>
			<div class="text-center font-mono text-lg text-blue-900">
				{atom.formula[mathLevelState.level]}
			</div>
		</div>

		<div class="rounded border border-blue-200 bg-white p-3">
			<div class="mb-2 text-sm font-semibold text-blue-700">조건:</div>
			<ul class="list-inside list-disc space-y-1 text-blue-800">
				{#each atom.conditions[mathLevelState.level] as condition}
					<li>{condition}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
