<script lang="ts">
	import { stack } from "../stores/stack";

	export let operand = "";

	function appendStack() {
		if ($stack.at(-1)?.match(/\d/)) {
			stack.update((p) => `${p}${operand}`);
		} else {
			const newStack = $stack.slice(0, $stack.length - 1);
			stack.update((p) => `${newStack}${operand}`);
		}
	}
</script>

<button on:click={appendStack} class="bg-orange-400 rounded">{operand}</button>
