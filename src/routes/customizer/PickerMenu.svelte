<script>
    import ButtonPicker from "../../components/Inputs/PathwayButton.svelte";
    import StatsCounter from "../../components/StatsCounter.svelte";
    import LayoutButton from "../../components/Buttons/LayoutButton.svelte";

</script>

<style>
  #picker-scroll {
    margin-top: 15px;
  }

  .scroll-section {
    margin-bottom: 60px;
  }

  @media only screen and (orientation: landscape) {
    #picker-scroll {
      margin-top: 210px;
    }

    .scroll-section {
      margin-bottom: 110px;
    }
  }

</style>

<div id="picker-scroll">
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