<script>
	import { stack } from "../stores/stack";
	import { css } from "@emotion/css";

	export let number = 1;
	function addToStack() {
		stack.update((p) => `${p}${number}`);
	}
	document.addEventListener("keypress", (e) => {
		// @ts-ignore
		if (e.key == number) {
			addToStack();
		}
	});
</script>

<button
	class={css`
		transition: background-color 200ms;
		background-color: #343a40;
		color: #f8f9fa;
		&:hover {
			background-color: #adb5bd;
		}

		max-width: 64px;
		max-height: 64px;

		font-size: 24px;
		font-weight: 700;
		display: flex;
		justify-content: center;
		align-items: center;
		&:active {
			background-color: #495057;
			color: white;
		}
	`}
	on:click={addToStack}>{number}</button
>
