<script>
    export let title = '';
    export let isOpen = true;
    export let durationMS = 300;
    import {slide} from 'svelte/transition';
</script>


<div class="submenu-accordion">
  <div class="submenu-bar" on:click={() => {isOpen = !isOpen}}>
    <p class="submenu-title">{title}</p>
    <div class="submenu-arrow"></div>
  {#if isOpen}
    <div class="submenu-contents" transition:slide|local="{{duration: durationMS}}">
      <slot/>
    </div>
  {/if}
  </div>
</div>

<style>
  .submenu-bar {
    background: #FFFFFF 0 0 no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    margin: 8px 0;
    font-size: 16px;
    padding: 10px;
  }

  .submenu-title {
    font-size: 23px;
    left: 21px;
    position: relative;
  }

</style>
