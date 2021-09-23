<script>
    import {isMenuOpen} from '../Customizer/customizer';
    import {scale} from 'svelte/transition';

    export let component_id;
    export let isVisible = true;
    export let backgroundColor = '#fff';
    export let strokeColor = '#6d7a83';
    export let transitionMS = 800;
</script>

{#if isVisible}
  <button id="open-menu-{component_id}" class="open-menu-btn"
          style="background-color: {backgroundColor}; transition: {transitionMS}ms"
          transition:scale={{duration: 200}}>
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.36 19.46"
         on:click={() => {$isMenuOpen = true}} class="open-menu-btn-image">
      <g id="Group_4375" data-name="Group 4375"
         style="stroke: {strokeColor}; stroke-miterlimit: 10; stroke-width: 1.75px; fill: none;">
        <path id="Path_5302" data-name="Path 5302" class="cls-1"
              d="M10.4,1.59H3.15A2.27,2.27,0,0,0,.88,3.86h0V16.3a2.26,2.26,0,0,0,2.27,2.26H15.58a2.25,2.25,0,0,0,2.27-2.26h0V9"/>
        <path id="Path_5303" data-name="Path 5303" class="cls-1"
              d="M18.07,1.32h0a1.52,1.52,0,0,0-2.16,0h0L8.58,8.65l-.74,2.57a.29.29,0,0,0,.23.34h.11l2.57-.75,7.32-7.32A1.66,1.66,0,0,0,18.07,1.32Z"/>
        <line id="Line_2399" data-name="Line 2399" class="cls-1" x1="14.95" y1="2.27" x2="17" y2="4.32"/>
      </g>
    </svg>
  </button>
{/if}


<style>
  .open-menu-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -2vw;
    margin-top: -2vw;
    border-radius: 50%;
    padding: 1.3vw;
    border: none;
    box-shadow: 0px 3px 20px #00000029;
  }

  .open-menu-btn:hover {
    box-shadow: 0px 3px 20px #00000040;
  }

  .open-menu-btn-image {
    width: 4vw;
    height: 4vw;
    display: block;
  }


</style>
