<script>
  export let src
  export let alt
  export let mobile_src = src;
  export let caption = '';
  export let captionColor = '#6D7A83';

  let imgWidth;
  let imgHeight;
  
  import { onMount } from 'svelte'
  import IntersectionObserver from './IntersectionObserver.svelte'
  import Image from './ImageFrame.svelte'

  let nativeLoading = false

  // Determine whether to bypass our intersecting check
  // onMount(() => {
  //   if ('loading' in HTMLImageElement.prototype) {
  //     nativeLoading = true
  //   }
  // })
  
</script>
<IntersectionObserver once={true} let:intersecting={intersecting}>
  {#if intersecting || nativeLoading}
    <div id="image-container" style="position: relative"
         bind:clientWidth={imgWidth} bind:clientHeight={imgHeight}>
      <Image {alt} {src} {mobile_src} />
      <div class="caption-container" style="bottom: {imgHeight / 20}px">
        <p class="caption" style="color: {captionColor}; font-size: {imgWidth / 20}px">{caption}</p>
      </div>
    </div>
  {/if}
</IntersectionObserver>

<style>
  .caption-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    user-select: none;
    position: absolute;
  }
</style>
