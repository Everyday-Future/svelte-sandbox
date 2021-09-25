<script lang="ts">
    import {onMount} from 'svelte';
    import {fly, fade} from 'svelte/transition';
    import ImageLoader from '../Image/Image.svelte';
    import 'focus-visible';

    export let animateInterval = 3000;
    let scrollY;
    let imgWidth;
    let imgHeight;
    let preview;
    let previewPrev;
    let preview_imgs = [
        ['notebook-sheetmusic-preview-left.png', 'notebook-tab-preview-right.png'],
        ['notebook-recipe-preview-left.png', 'notebook-recipe-preview-right.png'],
        ['notebook-todo-preview-left.png', 'notebook-todo-preview-right.png'],
        ['notebook-sheetmusic-preview-left.png', 'notebook-tab-preview-right.png'],
        ['notebook-recipe-preview-left.png', 'notebook-recipe-preview-right.png'],
        ['notebook-todo-preview-left.png', 'notebook-todo-preview-right.png']
    ];
    $: options = [
        {'text': 'Find Silver Linings', 'color': '#cce5ed', 'element': '.journal'},
        {'text': 'Capture Inspiration', 'color': '#dacec0', 'element': '.notebook'},
        {'text': 'Get Organized', 'color': '#9dbecf', 'element': '.planner'},
        {'text': 'Get Creative', 'color': '#e3b93c', 'element': '#muse'},
        {'text': 'Break Records', 'color': '#f79e99', 'element': '#trainer'},
        {'text': 'Make My Day', 'color': '#ffffff', 'element': '#lineup'}
    ];
    $: target_option = 0;


    onMount(() => {
        const interval = setInterval(() => {
            target_option = (target_option + 1) % options.length;
        }, animateInterval);

        return () => {
            clearInterval(interval);
        };
    });

    function handleScroll() {
        if ((preview !== previewPrev) && (preview !== ' ')) {
            animateScroll.scrollTo({element: preview});
        }
        previewPrev = preview;
    }

</script>

<svelte:window bind:scrollY={scrollY}/>

<div id="top-banner" style="position: relative"
     bind:clientWidth={imgWidth} bind:clientHeight={imgHeight}>
  <ImageLoader src="https://blog.luminaryhandbook.com/desk-banner-d-1000.jpg"
               mobile_src="https://blog.luminaryhandbook.com/desk-banner-m-1000.jpg"
               alt="Our Handbooks"/>
  <div class="banner-cta"
       style="top: {imgWidth < 768 ? imgHeight * 0.23 : imgHeight * 0.5}px;
       left: {imgWidth < 768 ? imgWidth * 0.04 : imgWidth * 0.05}px;
       font-size: {imgWidth < 768 ? imgWidth * 0.05 : imgWidth * 0.03}px">
    <p id="banner-headline">I want to</p>

    {#if (target_option % 2 === 0) & (preview === ' ')}
      <p class="banner-preview-text m-0" style="color: {options[target_option]['color']}"
         in:fly="{{ y: 40, duration: 1000 }}" out:fly="{{ y: -40, duration: 1000 }}">
        {options[target_option]['text']}
      </p>
    {/if}
    {#if target_option % 2 === 1 & (preview === ' ')}
      <p class="banner-preview-text m-0" style="color: {options[target_option]['color']}"
         in:fly="{{ y: 40, duration: 1000 }}" out:fly="{{ y: -40, duration: 1000 }}">
        {options[target_option]['text']}
      </p>
    {/if}

    <select id="banner-select" name="select" bind:value={preview} on:click={() => handleScroll()}>
      <option value=" "></option>
      {#each options as option }
        <option value="{option.element}">{option.text}</option>
      {/each}
    </select>

  </div>
  {#if target_option % 2 === 0}
    <div>
      <img transition:fade="{{ duration: 400 }}" class="left-page-preview"
           src="http://blog.luminaryhandbook.com/{preview_imgs[target_option][0]}" alt="page preview"
           style="top: {imgWidth < 768 ? imgHeight * 0.378 : imgHeight * 0.435}px;
           left: {imgWidth < 768 ? imgWidth * 0.23 : imgWidth * 0.538}px;
           width: {imgWidth < 768 ? imgWidth * 0.33 : imgWidth * 0.14}px">
    </div>
    <div>
      <img transition:fade="{{ duration: 400 }}" class="right-page-preview"
           src="http://blog.luminaryhandbook.com/{preview_imgs[target_option][1]}" alt="page preview"
           style="top: {imgWidth < 768 ? imgHeight * 0.33 : imgHeight * 0.37}px;
           left: {imgWidth < 768 ? imgWidth * 0.62 : imgWidth * 0.703}px;
           width: {imgWidth < 768 ? imgWidth * 0.305 : imgWidth * 0.14}px">
    </div>
  {/if}
  {#if target_option % 2 === 1}
    <div>
      <img transition:fade="{{ duration: 400 }}" class="left-page-preview"
           src="http://blog.luminaryhandbook.com/{preview_imgs[target_option][0]}" alt="page preview"
           style="top: {imgWidth < 768 ? imgHeight * 0.378 : imgHeight * 0.435}px;
           left: {imgWidth < 768 ? imgWidth * 0.23 : imgWidth * 0.538}px;
           width: {imgWidth < 768 ? imgWidth * 0.33 : imgWidth * 0.14}px">
    </div>
    <div>
      <img transition:fade="{{ duration: 400 }}" class="right-page-preview"
           src="http://blog.luminaryhandbook.com/{preview_imgs[target_option][1]}" alt="page preview"
           style="top: {imgWidth < 768 ? imgHeight * 0.33 : imgHeight * 0.37}px;
           left: {imgWidth < 768 ? imgWidth * 0.62 : imgWidth * 0.703}px;
           width: {imgWidth < 768 ? imgWidth * 0.305 : imgWidth * 0.14}px">
    </div>
  {/if}
</div>


<style>

  .banner-cta {
    position: absolute;
    color: white;
    font-size: 3vw;
    margin: 0;
  }

  #banner-headline {
    display: inline;
    color: white;
  }

  #banner-select {
    display: inline;
  }

  .banner-input {
    background-color: transparent !important;
  }

  #banner-select {
    background-color: transparent;
    background-image: none;
    border: none;
    border-bottom: 3.5px solid #ffffff;
    border-radius: 0;
    font-size: 2.5vw;
    padding: 0;
    font-weight: 600;
    width: 32vw;
    color: #aebec4;
    font-family: 'Permanent Marker', cursive !important;
    z-index: 200;
    position: relative;
  }

  .banner-preview-text {
    left: 15vw;
    top: 0;
    font-weight: 500;
    z-index: 100;
    position: absolute;
    font-family: 'Permanent Marker', cursive !important;
  }

  .left-page-preview {
    position: absolute;
    transform: scale(1, 1.1) rotate(-9.1deg);
  }

  .right-page-preview {
    position: absolute;
    transform: scale(1, 1.1) rotate(-9.1deg);
  }

  @media screen and (max-width: 768px) {
    .banner-cta {
      top: 23vw;
      left: 3vw;
      font-size: 5vw;
    }

    #banner-select {
      width: 52vw;
    }

    .banner-preview-text {
      left: 24vw;
    }

    .left-page-preview {
      transform: scale(1, 1.05) rotate(-8.5deg);
    }

    .right-page-preview {
      transform: scale(1, 1.13) rotate(-9.5deg);
    }
  }

</style>

