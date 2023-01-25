<script lang="ts">
	import { stack } from "../stores/stack";

	export let number = 1;
	function addToStack() {
		stack.update((p) => `${p}${number}`);
	}
</script>

<button class={""} on:click={addToStack}>{number}</button>
