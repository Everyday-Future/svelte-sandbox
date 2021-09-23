<script>

	import { fade, draw, fly } from 'svelte/transition';
	export let target_svg;
	export let isDone = false;
	export const width = 300;
	export const speedeach = 30;
	export const typewriterspeed = 50;
	export const drawduration = 1000;

</script>

<style>
	svg {
		position: absolute;
			top: 0;
		left:0;
	}
	svg path {
		fill: none!important;
	}
	svg rect {
		fill: none!important;
	}
</style>

<svg  xmlns="http://www.w3.org/2000/svg" viewBox="{target_svg.viewbox}" transition:fade="{{duration: 200}}">
	{@html target_svg.styleUnfilled}
	{#each target_svg.lines as path, i}
		{#if path.type === 'path'}
		<path in:draw="{{ delay: i * speedeach, duration: drawduration }}" on:introend="{() => isDone = true}"
					d={path.d} style={path.style} class={path.class}/>
		{:else if path.type === 'line'}
		<line in:draw="{{ delay: i * speedeach, duration: drawduration }}" on:introend="{() => isDone = true}"
					class="{path.class}" style="{path.style}"
					x1="{path.x1}" y1="{path.y1}" x2="{path.x2}" y2="{path.y2}"/>
		{:else if path.type === 'rect'}
		<rect in:draw="{{ delay: i * speedeach, duration: drawduration }}" on:introend="{() => isDone = true}"
					class="{path.class}"  style="{path.style}"
					x="{path.x}" y="{path.y}" width="{path.width}" height="{path.height}" />
		{/if}
	{/each}
</svg>