<script>
    import {isMenuOpen} from './customizer';
    import {fly, fade} from 'svelte/transition';


</script>

<p>***** 1,000 reviews</p><p>$35.99</p>
<div class="feature-counter">
  <div id="feature-1" class="feature-column">
    <h2 class="feature-counter-header">180</h2>
    <p class="feature-counter-details">pages</p>
  </div>
  <div id="feature-2" class="feature-column">
    <h2 class="feature-counter-header">3</h2>
    <p class="feature-counter-details">months</p>
  </div>
  <div id="feature-3" class="feature-column">
    <h2 class="feature-counter-header">90</h2>
    <p class="feature-counter-details">days</p>
  </div>
</div>
<p>Contents</p>
<p>Contents</p>
<p>Contents</p>
<p>Contents</p>
<p>Contents</p>
<p>Contents</p>
<p>Contents</p>
<p>Contents</p>
<p>Contents</p>
<p>Contents</p>
<p>Contents</p>
<p>Contents</p>
<p>Contents</p>

<style>

  p {
    display: inline-block;
  }

  .feature-counter {
    display: flex;
    align-content: stretch;

  }

  .feature-column {
    flex-grow: 1;
    text-align: center;
  }

</style>