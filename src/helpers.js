export async function fetchGet(url) {
	const res = await fetch(url)
	const response = await res.json()
	return response
}

export async function fetchPost(url, data) {
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify(data)
	})
	const response = await res.json()
	return response
}

export function configGraphQLSSR(data = undefined) {
	return {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: data ? JSON.stringify(data) : undefined
	}
}

// https://stackoverflow.com/questions/8579643/how-to-scroll-up-or-down-the-page-to-an-anchor-using-jquery
export function scrollToAnchor(aid) {
	var aTag = $("a[id='" + aid + "']")
	$('html,body').animate({ scrollTop: aTag.offset().top - 110 }, 'slow')
}

export function makeUniqueId() {
	// from https://gist.github.com/gordonbrander/2230317
	return '_' + Math.random().toString(36).substr(2, 9)
}

// Check if a variable is a number
export function isNumber(n) {
	return typeof n === 'number' && n === Number(n) && Number.isFinite(n)
}

// Check if a string is a number
export function isNumeric(str) {
	if (typeof str != 'string') return false // we only process strings!
	return (
		!isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
		!isNaN(parseFloat(str))
	) // ...and ensure strings of whitespace fail
}
