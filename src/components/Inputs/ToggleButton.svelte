<script>
    export let falseLabel = '';
    export let trueLabel = '';
    // Checkbox Status
    export let checked;
    export let debug = false;
</script>

<input type="checkbox" id="switch" bind:checked={checked}>
<div class="app">
  <div class="body">
    <div class="phone">
      <!-- Middle -->
      <div class="content">
        <label for="switch">
          <div class="toggle"></div>
          <div class="names">
            <p class="light">{falseLabel}</p>
            <p class="dark">{trueLabel}</p>
          </div>
        </label>
      </div>
    </div>
  </div>
</div>

{#if debug === true}
  <div style="display: flex; align-items: center; justify-content: center; height: 80px">
  {#if checked === true}
    <p class="debug-label">{trueLabel}</p>
  {:else}
    <p class="debug-label">{falseLabel}</p>
  {/if}
  </div>
{/if}

<style>

  /*!* Middle *!*/
  .content {
    display: flex;
    flex-direction: column;
    margin: auto;
    text-align: center;
    transform: translateY(5%);
  }

  label, .toggle {
    height: 2.8rem;
    border-radius: 100px;
  }

  label {
    width: 100%;
    background-color: rgba(0, 0, 0, .1);
    border-radius: 100px;
    position: relative;
    cursor: pointer;
  }

  .toggle {
    position: absolute;
    width: 50%;
    background-color: #fff;
    box-shadow: 0 2px 15px rgba(0, 0, 0, .15);
    transition: transform .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .names {
    padding: 11px 0;
    font-size: 20px;
    font-weight: 600;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-around;
    user-select: none;
  }

  .debug-label {
    font-size: 24px;
  }

  /* -------- Switch Styles ------------*/
  [type="checkbox"] {
    display: none;
  }

  /* Toggle */
  [type="checkbox"]:checked + .app .toggle {
    transform: translateX(100%);
  }

  [type="checkbox"]:checked + .app .dark {
    opacity: 1;
  }

  [type="checkbox"]:checked + .app .light {
    opacity: .7;
  }

  [type="checkbox"]:not(checked) + .app .light {
    opacity: 1;
  }

  [type="checkbox"]:not(checked) + .app .dark {
    opacity: .7;
  }
</style>