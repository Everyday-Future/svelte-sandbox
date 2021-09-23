import { get, writable } from 'svelte/store';
// store a history of store value snapshots

export default function undoRedo(store) {
	const history = [get(store)];
	const historyStore = writable(history);
	let historyIndex = 0;

	const updateStore = () => store.set(history[historyIndex]);

	return {
		subscribe: store.subscribe,
		history: historyStore,
		set(newValue) {
			historyIndex ++;
			history[historyIndex] = newValue;
			historyStore.set(history);
			while(historyIndex < history.length - 1) {
				history.pop();
			}
			updateStore();
		},
		undo() {
			if (historyIndex > 0) {
				historyIndex--;
				updateStore();
			}
		},
		redo() {
			if (historyIndex < history.length - 1) {
				historyIndex++;
				updateStore();
			}
		},
	}
}

export const isMenuOpen = writable(false);
export const isEditing = writable(false);