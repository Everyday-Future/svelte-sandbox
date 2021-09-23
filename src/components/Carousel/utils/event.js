// resize event
export function addResizeEventListener(cb) {
	typeof window !== 'undefined' && window.addEventListener('resize', cb)
}
export function removeResizeEventListener(cb) {
	typeof window !== 'undefined' && window.removeEventListener('resize', cb)
}

export function createDispatcher(source) {
	return function (event, data) {
		source.dispatchEvent(
			new CustomEvent(event, {
				detail: data
			})
		)
	}
}
