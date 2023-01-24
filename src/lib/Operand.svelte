<script>
	import { stack } from "../stores/stack";
	import { css } from "@emotion/css";

	export let operand = "";
	let stackValue = "";

	stack.subscribe((v) => (stackValue = v));

	function appendStack() {
		if (stackValue.at(-1)?.match(/\d/)) {
			stack.update((p) => `${p}${operand}`);
		} else {
			const newStack = stackValue.slice(0, stackValue.length - 1);
			stack.update((p) => `${p}${operand}`);
		}
	}
</script>

<button
	class={css`
		background-color: green;
		displat: block;
		width: 100%;
	`}
	on:click={appendStack}>{operand}</button
>
