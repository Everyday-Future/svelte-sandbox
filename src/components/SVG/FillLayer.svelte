<script>

	import {fade, draw, fly} from 'svelte/transition';

	export let target_svg;
	export const width = 300;
	export const speedeach = 30;
	export const typewriterspeed = 50;
	export const drawduration = 1000;

	function typewriter(node, {speed = typewriterspeed}) {
		const valid = (
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === Node.TEXT_NODE
		);
		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}
		const text = node.textContent;
		const duration = text.length * speed;
		return {
			duration,
			tick: t => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}

</script>

<style>
	svg {
		position: absolute;
		top: 0;
		left: 0;
	}
</style>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="{target_svg.viewbox}" transition:fade="{{duration: 500}}">
	{@html target_svg.style}
	{#each target_svg.lines as path, i}
		{#if path.type === 'path'}
			<path d={path.d} style={path.style} class={path.class}/>
		{:else if path.type === 'line'}
			<line class="{path.class}" style="{path.style}"
						x1="{path.x1}" y1="{path.y1}" x2="{path.x2}" y2="{path.y2}"/>
		{:else if path.type === 'rect'}
			<rect class="{path.class}" style="{path.style}"
						x="{path.x}" y="{path.y}" width="{path.width}" height="{path.height}"/>
		{/if}
	{/each}
	{#each target_svg.texts as path, i}
		<text in:typewriter
					class="{path.class}"
					transform="{path.transform}"
					style="font-family: 'Work Sans', sans-serif; {path.style}">{path.text}</text>
	{/each}
</svg>
