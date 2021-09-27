import { writable } from 'svelte/store'

export const cartcontents = writable([])

function cartIsOpen() {
	const { subscribe, set, update } = writable(false)

	return {
		subscribe,
		update,
		set,
		toggle: () => update((n) => !n),
		reset: () => set(0)
	}
}

export const cartopen = cartIsOpen()
export const products = writable([])
// Scrollspy for window except on customizers, where it scrolls on the picker window.
export const scroll_y = writable(0)
