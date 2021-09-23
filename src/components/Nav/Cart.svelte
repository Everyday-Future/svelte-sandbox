<script>
  import CartItem from './CartItem.svelte'
  import { cartcontents, cartopen, products } from '../../stores';
	import { fly } from 'svelte/transition';
  import { configGraphQLSSR } from '../../helpers'

  let coupon_name = '';
  let coupon_is_demo = true;

  const handleCheckout = async () => {
    try {
      const actualTotal = $products.reduce((sum, { price }) => {
        sum += price
        return sum
      }, 0)

      const result = await fetch('/api/create-order', configGraphQLSSR({
        products: {
          connect: $products.map(({ id }) => ({ id }))
        },
        createdAt: (new Date()).toISOString(),
        didUsePromo: false,
        actualTotal,
      }))

      console.log({ result })

      const data = await result.json()

      console.log({ data })

      if (data) {
        alert('Order created! Thank you!')
      }
      
    } catch (error) {
      console.error({
        error
      })
    }
  }
   
</script>

{#if $cartopen}
  <!-- The Cart menu as an overlay -->
  <div in:fly="{{ x: 400, duration: 400 }}" out:fly="{{ x: 400, duration: 400 }}" id="cart-window" class="cart-main">
  <!-- Cart controls-->
    <div>
      {#if $products.length === 0}
        <img id="cart-icon-nav" src="https://blog.luminaryhandbook.com/icon-cart-empty.svg"
             alt="icon for an empty cart" class="col-auto cursor-pointer cart-icon">
        {:else}
        <img id="cart-icon-nav" src="https://blog.luminaryhandbook.com/icon-cart-full.svg"
             alt="icon for a full cart" class="col-auto cursor-pointer cart-icon">
        {/if}
      <p class="cart-count m-0">Your Cart ({$products.length})</p>
      <p class="cart-x m-0" on:click={() => (cartopen.toggle())} >×</p>
      <div class="cart-divider"></div>
    </div>

    <!--Cart Items-->
    <section class="scrollable">
      {#each $products as product}
        <CartItem
          title={product.title}
          price={`${(product.price / 100).toLocaleString()}`}
          logo={product.image}
        />
      {/each}
    </section>

  <!-- Checkout button-->
    <div id="checkout-spacer" style="width: 100%; height: 100px;"></div>
    {#if coupon_is_demo}
      <div class="overlay-checkout-btn-div" href="/address">
        <button id="stripeSubmitBtn" role="button" class="btn overlay-checkout-btn" on:click={handleCheckout}>
          <img src="https://blog.luminaryhandbook.com/icon-lock-white.svg" alt="Lock" class="overlay-checkout-btn-lock"> Checkout
        </button>
      </div>
    {:else}
      <div class="overlay-checkout-btn-div">
        <a href="/demo-address">
          <button id="btn-address" role="button" class="btn overlay-checkout-btn" on:click={handleCheckout}>
            <img src="https://blog.luminaryhandbook.com/icon-lock-white.svg" alt="Lock" class="overlay-checkout-btn-lock"> Checkout
          </button>
        </a>
      </div>
    {/if}
  </div>
{/if}


<style>
  .cart-main  {
    top: 0;
    right: 0;
    width: 100%;
    max-width: 450px;
    height: 100%;
    background-color: white;
    position: fixed;
    box-shadow: 0px 4px 10px #aaaaaa;
    z-index: 1033;
  }
  .cart-icon {
    width: 34px;
    position: absolute;
    top: 10px;
    left: 20px;
  }
  .cart-count {
    font-weight: 700;
    font-size: 18px;
    color: #4c5559;
    position: absolute;
    top: 19px;
    left: 75px;
  }
  .cart-x {
    font-weight: 200;
    font-size: 50px;
    color: #4c5559;
    position: absolute;
    top: 0;
    right: 18px;
  }
  .cart-divider {
    position: absolute;
    width: 100%;
    top: 57px;
    left: 0;
    height: 1px;
    background-color: #6D7A83;
  }
  .overlay-checkout-btn-div {
    position: absolute;
    bottom: 20px;
    left: 10%;
    width: 80%;
  }
  .overlay-checkout-btn {
    width: 100%;
    height: 80px;
    border-radius: 24px;
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
    border: solid 10px white;
    color: white;
    background-color: #D5695C;
  }
  .overlay-checkout-btn-lock {
    width: 16px;
    height: auto;
    margin-bottom: 4px;
  }

  .scrollable {
    margin-top: 58px;
    height: calc(100vh - 57px);
    overflow-y: auto;
    padding-bottom: 100px;
  }

</style>
