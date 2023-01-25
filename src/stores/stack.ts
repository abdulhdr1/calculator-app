import { writable, readable, derived } from "svelte/store";

export const stack = writable("");

export const numbers = readable([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
export const operands = readable(["+", "-", "*", "/"]);
export const commands = readable(["Enter", "Backspace", "Clear"]);

export const possibleInputs = derived(
	[numbers, commands, operands],
	(stores) => {
		return stores
			.reduce((acc, curr) => {
				return new Array().concat(acc, curr);
			}, [])
			.map((item) => item.toString());
	}
);
