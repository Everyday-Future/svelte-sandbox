<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap" rel="stylesheet">
</svelte:head>

<script>
    import {fade, draw, fly} from 'svelte/transition';
    import {calendar, calls_orig, calls_path, muscle_soreness, muse_logo} from './shape.js';
    import {onMount} from 'svelte';
    import DrawLayer from './DrawLayer.svelte';
    import FillLayer from './FillLayer.svelte';

    export let isDone = false;
    let visible = false;
    export let debug = false;
    export let width = 300;
    export const speedeach = 30;
    export const typewriterspeed = 50;
    export const drawduration = 1000;
    export let target_svg_name = "calendar";
    export let target_svg = muse_logo;

    onMount(() => {
        switch (target_svg_name) {
            case 'calendar':
                target_svg = calendar;
                break;
            case 'calls_orig':
                target_svg = calls_orig;
                break;
            case 'calls_path':
                target_svg = calls_path;
                break;
            case 'muscle_soreness':
                target_svg = muscle_soreness;
                break;
            case 'muse_logo':
                target_svg = muse_logo;
                break;
            default:
                target_svg = muse_logo;
        }
        visible = true;
    });

    function reset() {
        if (visible === false) {
            isDone = false;
        }
    }
</script>


{#if debug === true}
  <div>
    <input id="debug" type=checkbox bind:checked={visible} on:change={reset} style="display: inline-block;">
    <label for="debug" style="display: inline-block;">debug toggle</label>
  </div>
{/if}

{#if visible}
  <div style="width: {width}px; position:relative" class="logo" class:isDone>
    {#if !isDone}
      <DrawLayer target_svg={target_svg} bind:isDone={isDone}/>
    {:else}
      <FillLayer target_svg={target_svg} isDone={isDone}/>
    {/if}
  </div>
{/if}

