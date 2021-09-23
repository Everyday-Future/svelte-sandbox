<script>
    import Layout from "../../components/Customizer/Layout.svelte";
    import ButtonPicker from "../../components/Inputs/PathwayButton.svelte";
    import StatsCounter from "../../components/StatsCounter.svelte";
    import LayoutButton from "../../components/Buttons/LayoutButton.svelte";

    export let customizerMode = 'initial';
</script>

<style>
  #page-window {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 60px);
    background-color: rosybrown;
  }

  .preview-window {
    flex: 0 0 90vw;
    background-color: darkseagreen;
  }

  .picker-window {
    flex: 1 1 0;
    overflow: auto;
    background-color: dodgerblue;
  }

  .logo-header {
    text-align: left;
    width: 100% !important;
    display: flex;
  }

  .logo-header-sm {
    display: flex;
  }

  .logo-header-lg {
    display: none;
  }

  .title-product-logo {
    display: flex;
    flex: 0 0 30%;
    max-width: 160px;
    margin-left: 10px;
    margin-top: 10px;
  }

  .logo-title-right {
    display: flex;
    flex: 1 1 130px;
    align-self: center;
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

  @media only screen and (orientation: landscape) {
    #page-window {
      flex-direction: row;
    }

    .preview-window {
      flex: 1 1 0;
    }

    .picker-window {
      flex: 0 0 300px;
    }

    .logo-header {
      text-align: left;
    }

    .logo-header-sm {
      display: none;
    }

    .logo-header-lg {
      display: block;
      position: absolute;
    }

    .title-product-logo {
      position: relative;
      max-width: 200px;
      margin-bottom: 0.5rem;
    }

  }
</style>


<div id="page-window">
  <div class="preview-window">
    <div class="logo-header logo-header-sm">
      <div class="title-product-logo">
        <img class="title-product-logo" src="https://blog.luminaryhandbook.com/planner_logo-01.jpg" alt="Planner Logo">
      </div>
      <!--      <div style="display: flex; flex: 10 10 0;">-->
      <!--      </div>-->
      <div class="logo-title-right">
        <div>
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
  <div class="picker-window">
    <div class="logo-header-lg">
      <img class="title-product-logo" src="https://blog.luminaryhandbook.com/planner_logo-01.jpg" alt="Planner Logo">
    </div>
    <div class="scroll-section">
      <h3>Training Focus</h3>
      <h5>Choose your sport or training focus</h5>
      <ButtonPicker/>
    </div>
    <div class="scroll-section">
      <StatsCounter/>
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
        <LayoutButton  class="layout-picker-item" />
        <LayoutButton  class="layout-picker-item" />
        <LayoutButton  class="layout-picker-item" />
        <LayoutButton  class="layout-picker-item" />
        <LayoutButton  class="layout-picker-item" />
      </div>
    </div>
    <div class="scroll-section">
      <h3>Special Pages</h3>
      <h5>Pick additional tools to include in your book</h5>
      <div class="special-page-container">
        <div class="special-page-item">Monthly Calendars</div>
        <div class="special-page-item">Weekly Calendars</div>
      </div>
    </div>
    <div class="scroll-section">
      <h3>Review</h3>
      <h5>Please review your book above.<br>
        You can get started immediately with a free one-week print-at-home version
      </h5>
    </div>
    <div class="scroll-section">

    </div>
    <div class="scroll-section">

    </div>
  </div>
</div>