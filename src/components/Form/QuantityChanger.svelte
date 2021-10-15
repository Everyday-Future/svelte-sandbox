<script>
  export let quantity = 0;
  export let maxQuantity = 1000; // support for adding a max allowed limit

  const setQuantity = (updatedQuantity) => {
    if (updatedQuantity < maxQuantity && updatedQuantity > 0) {
      quantity = updatedQuantity;
    }
  };
</script>

<div class="changer">
  <span>Qty</span>
  <div class="changer__controls">
    <button on:click={setQuantity(quantity - 1)}>-</button>
    <input
      type="number"
      bind:value={quantity}
      min="1"
      step="1"
      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
    />
    <button on:click={setQuantity(quantity + 1)}>+</button>
  </div>
</div>

<style scoped>
  .changer {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: #6d7a83;
    font-size: 0.8rem;
  }

  .changer__controls {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
  }

  .changer__controls button {
    width: 2.2rem;
    height: 2.2rem;
    padding: 0;
    margin: 0;
    border-radius: 0.3rem;
    background-color: #e9ebec;
    color: #707070;
    font-size: 1.7rem;
    line-height: 0;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: background 0.3s linear;
  }

  .changer__controls button:hover {
    background-color: hsl(0, 0%, 80%);
  }

  .changer__controls input {
    width: 2.2rem;
    height: 2.2rem;
    margin: 0;
    border-radius: 0.3rem;
    text-align: center;
    background-color: white;
    color: #6e7c84;
    font-size: 1.3rem;
    outline: 1px solid #cfd3d5;
    border: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  /* Change to Desktop Version */
  @media (min-width: 768px) {
    .changer {
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      font-size: 1rem;
    }

    .changer__controls button,
    .changer__controls input {
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1rem;
    }
  }
</style>
