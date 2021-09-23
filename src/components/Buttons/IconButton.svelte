<script>
    import {createEventDispatcher} from 'svelte';

    /**
     * Is this the principal call to action on the page?
     */
    export let label = '';
    export let btnType = 'primary';
    export let transitionMS = 400;
    export let iconLeft = true;
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
  <slot></slot>
  {label}
</button>

<style>
  .btn {
    display: inline-grid;
    grid-template-columns: 20px auto;
    grid-template-rows: 20px;
    column-gap: 10px;
    place-items: center;
  }


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

  .customizer-primary {
    background-color: #1E90FF;
    color: #fff;
    border: solid 3px #fff;
  }

  .customizer-primary:hover {
    background-color: #fff;
    color: #1E90FF65;
    border: solid 3px #1E90FF;
  }

  .customizer-secondary {
    background-color: #fff;
    color: #1E90FF;
    border: solid 3px #fff;
  }

  .customizer-secondary:hover {
    background-color: #1E90FF65;
    color: #fff;
    border: solid 3px #fff;
  }

</style>
