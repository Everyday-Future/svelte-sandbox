<script>
    import {isMenuOpen} from './customizer';
    import {fly, fade} from 'svelte/transition';
    import CustomizerPicker from "./CustomizerPicker.svelte";
    import CustomizerPreview from "./CustomizerPreview.svelte";

    export const page_name = '';
    export const product_name = '';
    export let data = {};

</script>

<div id="page-window">
  <div class="preview-window">
    <div class="logo-header logo-header-sm" style="background-color: #6d7a83">
      <img class="title-product-logo" src="https://blog.luminaryhandbook.com/planner_logo-01.jpg" alt="Planner Logo">
    </div>
    <CustomizerPreview {...data}/>
  </div>
  <div class="picker-window">
    <div class="logo-header logo-header-lg" style="background-color: #6d7a83">
      <img class="title-product-logo" src="https://blog.luminaryhandbook.com/planner_logo-01.jpg" alt="Planner Logo">
    </div>
    <CustomizerPicker {...data} is_collapsed={false}/>
  </div>
  <!--{#if page_name === 'Layout'}-->
  <!--{:else if page_name === 'Weekly'}-->
  <!--  <div class="preview-window">-->
  <!--    <CustomizerPreview {...data}/>-->
  <!--  </div>-->
  <!--  <div class="picker-window">-->
  <!--    <CustomizerPicker {...data}/>-->
  <!--  </div>-->
  <!--{:else if page_name === 'Pathway'}-->
  <!--  <div class="preview-window">-->
  <!--    <CustomizerPreview {...data}/>-->
  <!--  </div>-->
  <!--  <div class="picker-window">-->
  <!--    <CustomizerPicker {...data}/>-->
  <!--  </div>-->
  <!--{:else if page_name === 'Review'}-->
  <!--  <div class="preview-window">-->
  <!--    <CustomizerPreview {...data}/>-->
  <!--  </div>-->
  <!--  <div class="picker-window">-->
  <!--    <CustomizerPicker {...data}/>-->
  <!--  </div>-->
  <!--{/if}-->
</div>


<style>
  #page-window {
    position: relative;
    width: 100vw;
    height: calc(100vh - 60px);
    background-color: rosybrown;
  }

  .preview-window {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 70%;
    height: 70%;
    width: 100%;
    background-color: darkseagreen;
  }

  .picker-window {
    position: absolute;
    top: 70%;
    bottom: 0;
    width: 100%;
    overflow: auto;
    background-color: dodgerblue;
  }

  .logo-header {
    text-align: left;
    width: 100% !important;
  }

  .logo-header-sm {
    display: inline-block;
  }

  .logo-header-lg {
    display: none;
  }

  .title-product-logo {
    width: 30%;
    max-width: 160px;
    margin-left: 10px;
    margin-top: 10px;
  }

  @media only screen and (orientation: landscape) {

    .preview-window {
      position: absolute;
      left: 0;
      top: 0;
      width: 70%;
      height: 100%;
    }

    .picker-window {
      position: absolute;
      top: 0;
      width: 30%;
      left: 70%;
    }

    .logo-header {
      text-align: left;
    }

    .logo-header-sm {
      display: none;
    }

    .logo-header-lg {
      display: inline-block;
    }

    .title-product-logo {
      position: relative;
      max-width: 200px;
      margin-bottom: 0.5rem;
    }

  }

</style>