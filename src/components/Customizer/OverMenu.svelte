<script>
    import {isMenuOpen} from './customizer';
    import {fly, fade} from 'svelte/transition';
    import Accordion from "./InsertAccordion.svelte";
    import ComponentBtn from "../Buttons/ComponentButton.svelte";

    export let isOpen = false;
    export let menuChoices = {};
    // The cell in the layout that will be changed by the selection
    export let targetCell;
    // The component selected in the menu as {"component_name": "preview_image_name"}
    let targetComponent;

    function menuAccept() {
        // TODO - change over to the new component
        $isMenuOpen = false;
    }

</script>

{#if ($isMenuOpen === true || isOpen)}
  <div id="menu-overlay" on:click|self={() => {$isMenuOpen = false}} transition:fade="{{ duration: 200 }}">
    <div id="menu-preview" transition:fly="{{ y: 100, duration: 300 }}">

    </div>
    <div id="menu-picker" transition:fly="{{ y: 100, duration: 300, delay: 100 }}">
      <div class="menu-accept-btn-bg"></div>
      <button id='menu-accept-btn' on:click|stopPropagation={menuAccept}>
        <svg viewBox="0 0 30 30" style="display: block">
          <g
            id="g841"
            transform="matrix(0.88381744,0,0,0.88381744,0.87066122,-29.429589)">
            <g
              id="g862"
              transform="translate(0.07071596,0.07071596)">
              <rect
                style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.5079999;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                id="rect820"
                width="4.0473218"
                height="6.6739531"
                x="-33.033924"
                y="39.84584"
                transform="rotate(-45)"/>
              <rect
                style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:4.72209311;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                id="rect820-3"
                width="3.9536729"
                height="22.723171"
                x="44.964901"
                y="12.328046"
                transform="rotate(42.489346)"/>
            </g>
          </g>
        </svg>
      </button>

      <p class="menu-select-preview">Select to preview...</p>
      <p class="menu-close-all">Close All</p>

      <div class="scroll-window">
        {#each Object.entries(menuChoices) as [submenu, buttons]}
          <Accordion title="{submenu}">
            {#each buttons as btn}
              <ComponentBtn {...btn}/>
            {/each}
          </Accordion>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  p {
    color: #6D7A83;
  }

  #menu-overlay {
    position: fixed;
    left: 0;
    top: 59px;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.74);
  }

  #menu-picker {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 53%;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0px 3px 20px #00000029;
  }

  #menu-preview {
    position: absolute;
    left: 20%;
    top: 20%;
    margin-top: -15%;
    width: 60%;
    height: 40vw;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0px 3px 20px #00000029;
  }

  #menu-accept-btn {
    background-color: #D5695C;
    border-radius: 50%;
    width: 15vw;
    height: 15vw;
    position: absolute;
    left: 78%;
    margin-left: -7.5vw;
    top: 0;
    margin-top: -7.5vw;
    border: none;

  }

  .menu-accept-btn-bg {
    background-color: white;
    border-radius: 50%;
    width: 18vw;
    height: 18vw;
    position: absolute;
    left: 78%;
    margin-left: -9vw;
    top: 0;
    margin-top: -9vw;
    border: none;
  }

  .menu-select-preview {
    font-size: 14px;
    left: 2vw;
    top: 5px;
    position: absolute;
  }

  .menu-close-all {
    font-size: 3.0vw;
    top: 10vw;
    left: 71%;
    position: absolute;
  }

  .scroll-window {
    left: 0;
    right: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    position: absolute;
    top: 50px;
    bottom: 50px;
    margin: 2vw 0;
  }

  @media only screen and (orientation: landscape) {
    #menu-picker {
      left: 27%;
      top: 20%;
      bottom: 20%;
      width: 40%;
      max-width: 500px;
      margin-left: -20%;
      height: unset;
    }

    #menu-preview {
      left: 70%;
      margin-left: -16%;
      top: 50%;
      margin-top: -20%;
      width: 40%;
      height: 40vw;
      background-color: #FFFFFF;
    }

    #menu-accept-btn {
      border-radius: 50%;
      width: 9vw;
      height: 9vw;
      left: 73%;
      margin-left: -4.5vw;
      margin-top: -4.5vw;

    }

    .menu-accept-btn-bg {
      left: 73%;
      width: 11vw;
      height: 11vw;
      margin-left: -5.5vw;
      margin-top: -5.5vw;
    }

    .menu-select-preview {
      font-size: 1.5vw;
    }

    .menu-close-all {
      font-size: 1.5vw;
      top: 5vw;
      left: 65%;
    }

    .scroll-window {
      bottom: 0;
    }
  }
</style>