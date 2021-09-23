<script>
  import { createEventDispatcher } from 'svelte';
  /**
   * Is this the principal call to action on the page?
   */
  export let label = '';
  export let btnType = 'primary';
  export let transitionMS = 400;
  const dispatch = createEventDispatcher();

  /**
   * Optional click handler
   */
  function onClick(event) {
    dispatch('click', event);
  }
</script>

<button
  type="button"
  class="btn {btnType}"
  style="transition: {transitionMS}ms"
  on:click={onClick}>
  {label}
</button>

<style>

  .primary {
    background-color: #D5695C;
    color: #fff;
    border: solid 3px #fff;
  }

  .primary:hover {
    background-color: #fff;
    color: #D5695C;
    border: solid 3px #D5695C;
  }

  .secondary {
    background-color: #fff;
    color: #D5695C;
    border: solid 3px #fff;
  }

  .secondary:hover {
    background-color: #D5695C;
    color: #fff;
    border: solid 3px #fff;
  }
</style>
