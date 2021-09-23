
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap" rel="stylesheet">
</svelte:head>

<script>
	import { fade, draw, fly } from 'svelte/transition';
	import {calendar, calls_orig, calls_path, muscle_soreness, muse_logo} from './shape.js';
	import { onMount } from 'svelte';

	let done = false;
	let visible = false;
	export let width = 300;
	export let speedeach = 30;
	export let typewriterspeed = 50;
	export let drawduration = 1000;
	let target_svg = muse_logo;

	function typewriter(node, { speed = typewriterspeed }) {
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

	onMount(() => {visible=true});
</script>


{#if visible}
<div class={$$props.class} class:done>
<svg  xmlns="http://www.w3.org/2000/svg" viewBox="{target_svg.viewbox}">

	{#if done}
		{@html target_svg.style}
	{:else}
		{@html target_svg.styleUnfilled}
	{/if}

	{#each target_svg.lines as path, i}
		{#if path.type === 'path'}
		<path in:draw="{{ delay: i * speedeach, duration: drawduration }}" on:introend="{() => done = true}"
					d={path.d} style={path.style} class={path.class}/>
		{:else if path.type === 'line'}
		<line in:draw="{{ delay: i * speedeach, duration: drawduration }}" on:introend="{() => done = true}"
					class="{path.class}" style="{path.style}"
					x1="{path.x1}" y1="{path.y1}" x2="{path.x2}" y2="{path.y2}"/>
		{:else if path.type === 'rect'}
		<rect in:draw="{{ delay: i * speedeach, duration: drawduration }}" on:introend="{() => done = true}"
					class="{path.class}"  style="{path.style}"
					x="{path.x}" y="{path.y}" width="{path.width}" height="{path.height}" />
		{/if}
	{/each}
	{#if done}
	{#each target_svg.texts as path, i}
		<text in:typewriter
     class="{path.class}"
     transform="{path.transform}"
     style="font-family: 'Work Sans', sans-serif; {path.style}">{path.text}</text>
	{/each}
	{/if}

</svg>
</div>
{/if}

<style>
svg path {
  stroke-width: 0.5pt;
  transition: fill 2s, stroke .7s 2s;
}
.done svg path {
  stroke: transparent;
}
</style>
