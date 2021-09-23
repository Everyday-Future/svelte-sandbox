<script>
    import {scroll_y} from "../../stores";
    import Layout from "../../components/Customizer/Layout.svelte";
    import ButtonPicker from "../../components/Inputs/PathwayButton.svelte";
    import StatsCounter from "../../components/StatsCounter.svelte";
    import LayoutButton from "../../components/Buttons/LayoutButton.svelte";
    import DynamicSVG from "../../components/SVG/DynamicSVG.svelte";
    import StarRating from "../../components/Inputs/StarRating/StarRating.svelte";
    import PickerMenu from "./PickerMenu.svelte"

    let picker;
    let navbar_height = 60;

    const star_config = {
        fullColor: '#FFD700',
        emptyColor: '#fff',
        size: 13,
        showText: false,
    };

</script>

<style>
  /*

  Mobile portrait

  */

  * {
    border: solid 1px #D5695C;
  }

  /*body {*/
  /*  overflow: hidden;*/
  /*}*/

  /*html {*/
  /*  overflow: hidden;*/
  /*}*/

  #page-window {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 60px);
    /*background-color: rosybrown;*/
  }

  #spacer-window {
    height: 21vw;
    width: 100%;
    /*background-color: darkseagreen;*/
  }

  #preview-window {
    flex: 0 0 100vw;
    /*background-color: darkseagreen;*/
  }

  #picker-window {
    flex: 1 1 0;
    overflow-y: auto;
    overflow-x: hidden;
    /*background-color: dodgerblue;*/
  }

  .customizer-logo-container {
    width: 100%;
    display: grid;
    grid-template-columns: 40vw 1fr 20px;
    grid-template-rows: repeat(3, 6vw);
    position: fixed;
    left: 0;
    top: 60px;
    z-index: 1001;
    background-color: white;
  }

  .customizer-logo-container :global(.customizer-logo) {
    width: 34vw;
    justify-self: center;
    grid-row: 1 / 4;
  }

  .customizer-logo-price {
    grid-row-start: 2;
    grid-column-start: 2;
    text-align: right;
  }

  .customizer-logo-ratings {
    grid-row-start: 3;
    grid-column-start: 2;
    align-self: center;
    text-align: right;
  }

  .reviews {
    font-size: 0.6rem;
    font-weight: bold;
    margin-left: 5px;
    color: #4c5559;
    text-decoration: underline;
  }

  /*

  Mobile landscape

  */
  @media only screen and (orientation: landscape) and (max-width: 850px) {

  }

  /*

  Desktop landscape

  */
  @media only screen and (orientation: landscape) {
    #page-window {
      flex-direction: row;
    }

    #preview-window {
      flex: 20 0 160px;
    }

    #picker-window {
      flex: 0 0 360px;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    #picker-window::-webkit-scrollbar {
      display: none;
    }

    .picker-window-spacer {
      flex: 1 0 0;
    }


    .customizer-logo-container {
      grid-template-columns: 100%;
      grid-template-rows: 130px;
      left: calc(97vw - 360px);
      width: 400px;
    }

    .customizer-logo-container :global(.customizer-logo) {
      width: 250px;
      grid-template-columns: 100%;
      justify-self: left;
    }

    .customizer-logo-price {
      display: none;
    }

    .customizer-logo-ratings {
      display: none;
    }
  }
</style>


<div id="page-window">
  <div class="customizer-logo-container">
    <DynamicSVG class="customizer-logo"/>
    <div class="customizer-logo-price">$35</div>
    <div class="customizer-logo-ratings">
      <StarRating rating={3.35} config={star_config}/>
      <a class="reviews">1,000 reviews</a>
    </div>
  </div>
  <div id="preview-window">
    <div id="spacer-window" class="sm-inline-block lg-none"></div>
    <Layout/>
  </div>
  <div class="picker-window-spacer lg-flex sm-none"></div>
  <div id="picker-window">
    <PickerMenu/>
  </div>
  <div class="picker-window-spacer lg-flex sm-none"></div>
</div>
