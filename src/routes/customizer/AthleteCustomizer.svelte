<script>
    import { scroll_y} from "../../lib/stores";
    import Layout from "../../components/Customizer/Layout.svelte";
    import ButtonPicker from "../../components/Inputs/PathwayButton.svelte";
    import StatsCounter from "../../components/StatsCounter.svelte";
    import LayoutButton from "../../components/Buttons/LayoutButton.svelte";

    export let customizerMode = 'initial';
    let picker;

</script>

<style>

  h3, h5, p {
    color: #4c5559;
    text-align: left;
  }

  #page-window {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 60px);
    /*background-color: rosybrown;*/
  }

  .preview-window {
    flex: 0 0 90vw;
    /*background-color: darkseagreen;*/
  }

  .picker-window {
    flex: 1 1 0;
    overflow: auto;
    /*background-color: dodgerblue;*/
  }

  .title-product-logo {
    width: 100%;
  }

  .logo-header-sm {
    display: block;
    position: relative;
    top: 5px;
    left: 5px;
    width: 30vw;
  }

  .logo-header-lg {
    display: none;
  }

  .logo-title-right {
    display: block;
    position: absolute;
  }

  .price {
    font-size: 1.0rem;
    display: block;
    text-align: right;
  }

  .reviews {
    font-size: 0.8rem;
    display: block;
    text-align: right;
  }

  .layout-picker-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .layout-picker-item {
    flex: 1 1 120px;
  }

  .scroll-section {
    margin-top: 2vh;
  }

  @media only screen and (orientation: landscape) {
    #page-window {
      flex-direction: row;
    }

    .preview-window {
      flex: 1 1 0;
    }

    .picker-window {
      flex: 0 0 360px;
    }

    .logo-header-sm {
      display: none;
    }

    .logo-header-lg {
      display: block;
      position: absolute;
      width: 360px;
      background-color: white;
    }

    .title-product-logo {
      width: 190px;
    }

    .scroll-section {
      margin-top: 15vh;
    }

    .price {
      flex: 1 1 0;
      text-align: left;
    }

    .reviews {
      left: 40px;
      flex: 1 1 30px;
      text-align: left;
    }

  }
</style>


<div id="page-window">

  <div class="preview-window">
    <div class="logo-header logo-header-sm">
      <div>
        <img class="title-product-logo" src="https://blog.luminaryhandbook.com/planner_logo-01.jpg" alt="Planner Logo">
      </div>
      <!--      <div style="display: flex; flex: 10 10 0;">-->
      <!--      </div>-->
      <div class="logo-title-right">
        <div class="sm-only">
          <p class="price">$35.99</p><br/>
          <p class="reviews">***** 1,000 reviews</p>
        </div>
      </div>
    </div>
    {#if customizerMode === 'initial'}
      <p>initial</p>
    {:else if customizerMode === 'layout'}
      <Layout/>
    {/if}
  </div>

  <div class="picker-window"  bind:this={picker} on:scroll={()=> {$scroll_y = picker.scrollTop}}>
    <div class="logo-header-lg">
      <img class="title-product-logo" src="https://blog.luminaryhandbook.com/planner_logo-01.jpg" alt="Planner Logo">
    </div>
    <div class="lg-only" style="margin-top: 110px">
      <div class="flex-container">
        <p class="reviews">***** 1,000 reviews</p>
        <p class="price">$35.99</p>
      </div>
      <StatsCounter/>
      <h3>Training Focus</h3>
      <h5>Choose your sport or training focus</h5>
      <ButtonPicker/>
    </div>
    <div class="scroll-section">
      <div class="sm-only">
        <StatsCounter/>
      </div>
      <p>Would you like to track nutrition?</p>
      <input type="radio" id="fitness-nutrition" name="nutrition" value="both">
      <label for="fitness-nutrition">fitness-nutrition</label><br>
      <input type="radio" id="nutrition-only" name="nutrition" value="nutrition">
      <label for="nutrition-only">nutrition-only</label><br>
      <p>Both options come with 180 pages of content</p>
    </div>
    <div class="scroll-section">
      <h3>Daily Pages</h3>
      <h5>Pick a layout you like and customize your daily page</h5>
      <div class="layout-picker-container">
        <LayoutButton class="layout-picker-item"/>
        <LayoutButton class="layout-picker-item"/>
        <LayoutButton class="layout-picker-item"/>
        <LayoutButton class="layout-picker-item"/>
        <LayoutButton class="layout-picker-item"/>
      </div>
    </div>
    <div class="scroll-section">
      <h3>Special Pages</h3>
      <h5>Pick additional tools to include in your book</h5>
      <div class="special-page-container">
        <button class="special-page-item">Monthly Calendars</button>
        <button class="special-page-item">Weekly Calendars</button>
      </div>
    </div>
    <div class="scroll-section">
      <h3>Review</h3>
      <h5>Please review your book above.<br><br>
        You can get started immediately with a free one-week print-at-home version
      </h5>
      <p>$35.99</p>
      <button class="special-page-item">Add To Cart</button>
      <p>FREE</p>
      <button class="special-page-item">Download Printable PDF</button>
    </div>
    <div class="scroll-section">
      <div id="feedback-form">
        Save 20% | Give us some feedback!
      </div>
    </div>
    <div class="scroll-section">

    </div>
  </div>
</div>