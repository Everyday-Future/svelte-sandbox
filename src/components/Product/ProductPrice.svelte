<script>
  export let price = 0;
  export let discount = 0;
  export let decimals = false;

  const formatMoney = (value) => value.toFixed(decimals ? 2 : 0);
  const actualPrice = price - price * discount;
</script>

<div class="priceContainer">
  <span class="price">${formatMoney(actualPrice)}</span>
  {#if discount > 0}
    <div class="discountWrapper">
      <div class="price oldPrice">${formatMoney(price)}</div>
      <div class="discount">
        <span>{discount * 100}% OFF</span>
      </div>
    </div>
  {/if}
</div>

<style scoped>
  .priceContainer {
    position: relative;
    display: flex;
    gap: 1rem;
  }

  .discountWrapper {
    position: relative;
  }

  .price {
    font-size: clamp(1rem, 0.7153rem + 1.6368vw, 1.8rem);
    font-weight: 600;
    color: #6a7b84;
  }

  .discount {
    color: #d5695c;
    position: absolute;
    top: -0.7rem;
    left: 0;
    font-size: 0.8rem;
    width: 5rem;
  }

  .oldPrice {
    position: relative;
    color: grey;
  }

  .oldPrice::before {
    content: '';
    border-bottom: 2px solid #d5695c;
    position: absolute;
    width: 120%;
    height: 50%;
  }
</style>
