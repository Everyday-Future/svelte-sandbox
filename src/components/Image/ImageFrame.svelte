<script>
    export let src;
    export let alt;
    export let mobile_src = src;

    import {onMount} from 'svelte';
    import MediaQuery from '../../MediaQuery.svelte';

    let loaded = false;
    let thisImage;

    onMount(() => {
        thisImage.onload = () => {
            loaded = true;
        }
        if (mobile_src === '' || mobile_src === null) {
            mobile_src = src;
        }
    })

</script>

<style>
  img {
    width: 100%;
    opacity: 0;
    transition: opacity 1200ms ease-out;
  }

  img.loaded {
    opacity: 1;
  }
</style>

<MediaQuery query="(max-width: 768px)" let:matches>
  {#if matches}
    <img src={mobile_src} {alt} class:loaded bind:this={thisImage} loading="lazy"/>
  {:else}
    <img {src} {alt} class:loaded bind:this={thisImage} loading="lazy"/>
  {/if}
</MediaQuery>