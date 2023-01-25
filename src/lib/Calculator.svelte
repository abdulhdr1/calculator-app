<script lang="ts">
	import Number from "$lib/Number.svelte";
	import { numbers, operands, possibleInputs, stack } from "../stores/stack";
	import Operand from "./Operand.svelte";

	function computeStack() {
		stack.update((p) => eval(p));
	}

	function handleKeyDown(e: KeyboardEvent) {
		if ($possibleInputs.includes(e.key)) {
			switch (e.key) {
				case "Enter":
					computeStack();
					return;
				case "Backspace":
					stack.update((p) => p.slice(0, p.length - 1));
					return;
				case "Escape":
					stack.set("");
					return;
				default:
					if (e.key.match(/\d/)) {
						// number
						stack.update((p) => `${p}${e.key}`);
						return;
					}

					if ($operands.includes($stack.at(-1) as string)) {
						const newStack = $stack.slice(0, $stack.length - 1);
						stack.update((p) => `${newStack}${e.key}`);
						return;
					} else {
						stack.update((p) => `${p}${e.key}`);
					}
			}
		}
	}
</script>

<svelte:window on:keydown={handleKeyDown} />
<div class="w-full">
	<input bind:value={$stack} class="w-full" disabled />
	<div class="flex gap-2 w-full mt-2">
		<div class="grid grid-cols-3 gap-2 w-3/4 h-full">
			{#each $numbers as number}
				<Number {number} />
			{/each}
			<button
				class="col-span-2 bg-slate-600 rounded"
				on:click={computeStack}
			>
				=
			</button>
		</div>
		<div class="grid gap-2 w-1/4">
			{#each $operands as operand}
				<Operand {operand} />
			{/each}
		</div>
	</div>
</div>
