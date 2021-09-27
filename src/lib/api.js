import envVars from "./variables";
const { apiURL, apiVersion } = envVars;


/**
 * Adds required headers for authenticated calls
 * @param token
 * @return {Headers}
 */
function createAuthHeaders(token) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${token}`);
  return headers;
}

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


export function getProducts({ token }) {
  return fetch(`${apiURL}/products`, {
    method: "POST",
    headers: {...(token) ? createAuthHeaders(token) : {}},
    body: JSON.stringify({
      search_string: term,
      search_mode: mode,
      version: apiVersion,
    }),
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

export function getBlogs() {
  return fetch(`${apiURL}/blog`)
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

export function getBlog(blogLink) {
  return fetch(`${apiURL}/blog/${blogLink}`)
    .then((response) => response.json())
    .catch((err) => console.error(err));
}
