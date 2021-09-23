<script>
    import {fade} from 'svelte/transition';
    import ChevronIcon from "../Icons/ChevronIcon.svelte";

    export let pathwayOptions = {};
    export let targetPathway;
    export let defaultText = 'Tap To Select';
    export let description = '';
    export let isOpen = false;

</script>

<div class="btn-container unselectable" on:click="{() => {isOpen = !isOpen}}">
  <div class="main-button">
    {#if targetPathway != null}
      <img class='btn-icon' alt={targetPathway}
           src="https://blog.luminaryhandbook.com/{pathwayOptions[targetPathway].logo}">
      <p>{pathwayOptions[targetPathway].title}</p>
    {:else}
      <p>{defaultText}</p>
    {/if}
  </div>
  <div style="width: 20px; transform: rotate({isOpen * 180}deg); transition: 400ms">
    <ChevronIcon/>
  </div>
  {#if isOpen === true}
    <div id="backgroundOverlay" on:click={() => {isOpen = true}}></div>
    <div class="btn-menu">
      {#each Object.values(pathwayOptions) as btndata, i}
        <div class="main-button" in:fade="{{ delay: i * 20 }}"
             on:click="{() => {targetPathway=btndata.value;}}"
             on:mouseover="{() => {description=btndata.description}}"
             on:focus="{() => {description=btndata.description}}">
          <img class='btn-icon' alt={btndata.title}
               src="https://blog.luminaryhandbook.com/{btndata.logo}">
          <p>{btndata.title}</p>
        </div>
      {/each}
    </div>
  {/if}
</div>


<style>
  .btn-container {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .main-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 2px solid #ddd;
    margin: 2px;
    padding: 8px;
    background-color: white;
    width: 120px;
    height: 120px;
    text-align: center;
    cursor: pointer;
  }

  #backgroundOverlay {
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
  }

  .btn-menu {
    position: absolute;
    top: 80px;
    max-width: 400px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 3px 20px #00000029;
    padding: 30px 10px 10px 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .btn-icon {
    width: 54%;
    margin-bottom: 10%;
  }

  @media screen and (max-width: 600px) {
    .btn-menu {
      width: 160px;
      height: 86vw;
      padding-top: 130px;
      left: -12vw;
      overflow-y: auto;
      overflow-x: hidden;
      transform: rotate(-90deg) translateY(-130px);
      transform-origin: right top;
    }

    .btn-menu > .main-button {
      transform: rotate(90deg);
      transform-origin: right top;
    }
  }

</style>