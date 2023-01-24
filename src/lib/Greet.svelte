<script lang="ts">
	import { invoke } from "@tauri-apps/api/tauri";
	import Number from "$lib/Number.svelte";
	import type { MouseEventHandler } from "svelte/elements";
	import { stack } from "../stores/stack";
	import Operand from "./Operand.svelte";
	import { css } from "@emotion/css";

	let name = "";
	let greetMsg = "";
	let computed = 0;
	let stackValue = "";
	function handleClick() {
		computed++;
	}

	stack.subscribe((v) => (stackValue = v));

	function computeStack() {
		const result = eval(stackValue);
		computed = result;
		stack.set("");
	}

	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	const operands = ["+", "-", "*", "/"];
</script>

<div>
	<div class="row">
		<input
			id="greet-input"
			placeholder="Enter a name..."
			bind:value={name}
		/>
		<button on:click={handleClick}> Greet </button>
		{computed}
		{stackValue}
	</div>
	<div
		class={css`
			display: flex;
		`}
	>
		<div
			class={css`
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				width: 90%;
			`}
		>
			{#each numbers as number}
				<Number {number} />
			{/each}
		</div>
		<div>
			{#each operands as operand}
				<Operand {operand} />
			{/each}
		</div>
	</div>
	<button on:click={computeStack}> = </button>
</div>
