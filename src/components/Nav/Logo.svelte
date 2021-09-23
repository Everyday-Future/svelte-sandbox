<script>
	import { fade, draw, fly } from 'svelte/transition';
	import {luminary, handbook} from './logo.js';
	import { onMount } from 'svelte';
	
	let done = false;
	let visible = false;
	export let width = 300;
	
	onMount(() => {visible=true});
</script>


{#if visible}
<div style="width: {width}px" class="logo" class:done>
	<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.5 83">

		<rect width="100%" height="100%" fill="#D5695C"/>

		{#each luminary as path, i}
		<path in:draw="{{ delay: i * 300, duration: 2000 }}" on:introend="{() => done = true}" d={path}/>
		{/each}

		{#each handbook as path, i}
		<path in:draw="{{ delay: i * 300, duration: 2000 }}" on:introend="{() => done = true}" d={path}/>
		{/each}
	</svg>
</div>
{/if}

<style>
svg path {
  fill: transparent;
  stroke: #fff;
  stroke-width: 0.5pt;
  transition: fill 2s, stroke .7s 2s;
}
.done svg path {
  fill: #fff;
  stroke: transparent;
}
</style>