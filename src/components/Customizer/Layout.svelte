<script>
    import './patch.js';
    import {produce} from 'immer';
    import {fly, fade} from 'svelte/transition';
    import {template_a, template_b} from './templates';
    import {writable} from 'svelte/store';
    import undoRedo, {isEditing} from './customizer';
    import Cell from './Cell.svelte';
    import OverMenu from './OverMenu.svelte';

    const store = writable(template_a);
    const undoRedoStore = undoRedo(store);
    const history = undoRedoStore.history;
    const templateList = [template_a, template_b];
    let templateIndex = 0;

    function template_update(component_idx, component_dict) {
        $undoRedoStore = produce(
            $undoRedoStore, draft => {
                draft[component_idx] = component_dict
            }
        )
    }

    function template_substitute(new_template) {
        $undoRedoStore = produce(
            $undoRedoStore,
            () => {
                return new_template
            }
        );
    }

    function template_plus() {
        templateIndex = (templateIndex + 1) % templateList.length;
        template_substitute(templateList[templateIndex]);
    }

    function template_minus() {
        templateIndex = (templateIndex === 0) ? templateList.length - 1 : templateIndex - 1;
        template_substitute(templateList[templateIndex]);
    }

    function layoutAccept() {
        $isEditing = false;
    }
</script>

<!--<button on:click={() => { undoRedoStore.undo(); }}>Undo</button>-->
<!--<button on:click={() => { undoRedoStore.redo(); }}>Redo</button>-->
<!--<button on:click={() => { template_minus(); }}>T-</button>-->
<!--<button on:click={() => { template_plus(); }}>T+</button>-->
<!--<button on:click={layoutAccept}>Accept</button>-->
<br/>
<div id="layout-ui-container" style="position: relative; width: 100%">
  <div id="layout-container" style="position: absolute; width: 83%; left: 0; right: 0; margin: auto;">
    <div id="undo-redo-spacer"></div>
    <div class="undo-redo-landscape">
      <div class="redo-btn" on:click={() => { undoRedoStore.redo(); }}>
        <svg id="Layer_1" class="undo-redo-svg" viewBox="0 0 25.98 22.41" width="30">
          <path style="fill:#6d7a83"
                d="M5,13A4.43,4.43,0,0,1,9.42,8.57H19.91v3.58L26,6.07,19.91,0V3.57H9.42a9.42,9.42,0,0,0,0,18.84H20.07v-5H9.42A4.42,4.42,0,0,1,5,13Z"/>
        </svg>
        <p class="undo-redo-txt">REDO</p>
      </div>
      <div class="undo-btn" on:click={() => { undoRedoStore.undo(); }}>
        <p class="undo-redo-txt">UNDO</p>
        <svg viewBox="0 0 25.98 22.41" class="undo-redo-svg" width="30">
          <path style="fill:#6d7a83"
                d="M 21,13 A 4.43,4.43 0 0 0 16.58,8.57 H 6.09 v 3.58 L 0,6.07 6.09,0 v 3.57 h 10.49 a 9.42,9.42 0 0 1 0,18.84 H 5.93 v -5 H 16.58 A 4.42,4.42 0 0 0 21,13 Z"/>
        </svg>
      </div>
    </div>

    <div id="layout-preview-book" style="position: relative">
      <img id="background-image" src="https://blog.luminaryhandbook.com/layout-open_blank_blue-spiral.jpg"
           alt="background book for designing your layout">
      {#each Object.entries($undoRedoStore) as [id, cell]}
        <div
          class="cell x-{cell.position_x + (cell.page * 2)} y-{cell.position_y} w-{cell.position_w} h-{cell.position_h} ">
          <Cell {...cell} component_id={id}/>
        </div>
      {/each}
    </div>

    <div class="undo-redo-portrait">
      <div class="redo-btn" on:click={() => { undoRedoStore.redo(); }}>
        <svg id="Layer_1" class="undo-redo-svg" viewBox="0 0 25.98 22.41" width="30">
          <path style="fill:#6d7a83"
                d="M5,13A4.43,4.43,0,0,1,9.42,8.57H19.91v3.58L26,6.07,19.91,0V3.57H9.42a9.42,9.42,0,0,0,0,18.84H20.07v-5H9.42A4.42,4.42,0,0,1,5,13Z"/>
        </svg>
        <p class="undo-redo-txt">REDO</p>
      </div>
      <div class="undo-btn" on:click={() => { undoRedoStore.undo(); }}>
        <p class="undo-redo-txt">UNDO</p>
        <svg viewBox="0 0 25.98 22.41" class="undo-redo-svg" width="30">
          <path style="fill:#6d7a83"
                d="M 21,13 A 4.43,4.43 0 0 0 16.58,8.57 H 6.09 v 3.58 L 0,6.07 6.09,0 v 3.57 h 10.49 a 9.42,9.42 0 0 1 0,18.84 H 5.93 v -5 H 16.58 A 4.42,4.42 0 0 0 21,13 Z"/>
        </svg>
      </div>

    </div>
    {#if $isEditing}
      <div id="layout-accept-block" on:click={layoutAccept} transition:fly="{{ y: 50, duration: 200 }}">
        <button id='layout-accept-btn'>
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
        <p class="undo-redo-txt layout-accept-txt">COMPLETE</p>
      </div>
      {:else}
      <button class="red-btn edit-template" on:click={() => {$isEditing = true}} transition:fly="{{ y: 50, duration: 200 }}">
        Edit Template
      </button>
      <button class="red-btn prev-template" on:click={() => { template_minus(); }} transition:fly="{{ x: -50, duration: 200 }}">
        prev
      </button>
      <button class="red-btn next-template" on:click={() => { template_plus(); }} transition:fly="{{ x: 50, duration: 200 }}">
        next
      </button>
    {/if}

  </div>
</div>

<OverMenu/>


<!-- <input bind:value type="number"/>
<button on:click={() => {
	$undoRedoStore = produce(
		$undoRedoStore,
		() => {return [{
	component_img: 0,
	component_name: "copyright_muse",
	component_description: "Copyright for the muse",
	position_x: -1,
	position_y: -1,
	position_w: 1,
	position_h: 1,
	page: 0
	}]}
	);
}}>Add</button> -->

<!--<br/>-->
<!--{JSON.stringify($undoRedoStore)}-->
<!--<br />-->
<!--{$undoRedoStore.value}-->
<!--<br />-->
<!--{JSON.stringify($history)}-->
<!--<br />-->


<style>
  #background-image {
    width: 100%;
    position: relative;
  }

  .undo-redo-landscape {
    display: none;
  }

  .undo-redo-portrait {
    width: 100%;
    position: relative;
    top: -12px;
  }

  .undo-btn {
    position: absolute;
    left: 30px;
    top: 20px;
  }

  .redo-btn {
    position: absolute;
    right: 70px;
    top: 20px;
  }

  .undo-redo-svg {
    width: 33px;
    left: 1px;
    position: absolute;
  }

  .undo-redo-txt {
    position: absolute;
    top: 32px;
    font-size: 0.8rem;
    font-weight: 400;
    left: 0;
    text-decoration: none;
  }

  .edit-template {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -70px;
    margin-top: -16px;
    width: 140px;
    height: 32px;
    border: none;
    font-size: 1.0rem;
    border-radius: 0.7rem;
    padding: 0.5rem 1.0rem 0.5rem 1.0rem;
  }

  .prev-template {
    position: absolute;
    left: 10%;
    top: 50%;
    margin-left: -20px;
    margin-top: -10px;
    width: 40px;
    border: none;
    font-size: 0.6rem;
    border-radius: 0.7rem;
    padding: 0.50rem;
  }

  .next-template {
    position: absolute;
    left: 90%;
    top: 50%;
    margin-left: -20px;
    margin-top: -10px;
    width: 40px;
    border: none;
    font-size: 0.6rem;
    border-radius: 0.7rem;
    padding: 0.50rem;
  }

  #layout-accept-block {
    position: absolute;
    left: 50%;
    top: 110%;
    width: 10px;
  }

  #layout-accept-btn {
    background-color: #D5695C;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-left: -25px;
    margin-top: -25px;
    border: none;
  }

  .layout-accept-txt {
    left: -30px;
  }

  .cell {
    position: absolute !important;
    left: -200%;
    bottom: 100%;
  }

  .x--1 {
    display: none;
  }

  .x-0 {
    left: 7%;
  }

  .x-1 {
    left: 26%;
  }

  .x-2 {
    left: 57%;
  }

  .x-3 {
    left: 76%;
  }

  .y-0 {
    bottom: 12%;
  }

  .y-1 {
    bottom: 25%;
  }

  .y-2 {
    bottom: 38%;
  }

  .y-3 {
    bottom: 51%;
  }

  .y-4 {
    bottom: 64%;
  }

  .y-5 {
    bottom: 77%;
  }

  .w-1 {
    width: 16%;
  }

  .w-2 {
    width: 35%;
  }

  .h-1 {
    height: 11%;
  }

  .h-2 {
    height: 24%;
  }

  .h-4 {
    height: 50%;
  }

  .h-6 {
    height: 76%;
  }

  @media only screen and (orientation: landscape) {

    .undo-redo-portrait {
      display: none;
    }

    .undo-redo-landscape {
      position: absolute;
      display: unset;
      width: 100%;
    }

    #undo-redo-spacer {
      position: relative;
      height: 50px;
      width: 100%;
    }

    .undo-btn {
      position: absolute;
      left: 22px;
      top: -23px;
    }

    .redo-btn {
      position: absolute;
      right: 100px;
      top: -23px;
    }

    .undo-redo-svg {
      width: 26px;
      left: 52px;
      position: absolute;
    }

    .undo-redo-txt {
      position: absolute;
      top: 3px;
      font-size: 0.9rem;
      font-weight: 600;
      left: 0;
      text-decoration: underline;
    }

    #layout-accept-block {
    position: absolute;
    left: 97.8%;
    top: 83%;
    }

    .layout-accept-txt {
      display: none;
    }

  }
</style>
