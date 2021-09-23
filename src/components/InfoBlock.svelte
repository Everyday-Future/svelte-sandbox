<script>
    import Image from "./Image/Image.svelte";
    import Button from "./Buttons/Button.svelte";

    export let heading = '';
    export let subheading = '';
    export let body = '';
    export let btnText = '';
    export let btnLink = '';
    export let isReversed = false;
    let reversedClass = '';

    if (isReversed === true) {
        reversedClass = 'reversed';
    }
</script>

<div class="info-container">
  <div class="left-panel {reversedClass}">
    <slot></slot>
  </div>
  <div class="right-panel {reversedClass}">
    <h3 class="font-sharpie">{heading}</h3>
    <h4 style="padding-bottom: 10px">{subheading}</h4>
    <p>
      {@html body}
    </p>
    {#if btnText !== ''}
      <div class="btn-container">
        <Button label="{btnText}"/>
      </div>
    {/if}
  </div>
</div>

<style>
  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .left-panel, .right-panel {
    flex: 1 1 0;
    padding: 10px 0;
  }

  .btn-container {
    padding-top: 10px;
  }

@media only screen and (orientation: landscape) {
  .info-container {
    display: flex;
    flex-direction: row;
  }
  .left-panel, .right-panel {
    flex: 1 1 0;
    padding: 0 20px;
  }

  .left-panel.reversed {
    order: 1;
  }

  .right-panel.reversed {
    order: 0;
  }
}

</style>

