<script>
    import {isNumeric} from "../../lib/helpers";

    import Image from "../Image/Image.svelte";
    // Unique name ID for the product
    export let name = '';
    export let qty = 1;
    export let price;
    export let title = '';
    export let subtitle = '';
    export let logo = '';
    let inputQty = qty;

    function trashItem() {
        // TODO - send api call and raise delete event
    }

    function addQty() {
        qty += 1;
        inputQty = qty;
    }

    function subtractQty() {
        if (qty > 1) {
            qty -= 1;
            inputQty = qty;
        }
    }

    function setQtyFromInput() {
        if (isNumeric(inputQty)) {
            qty = parseInt(inputQty);
        } else {
            // Revert to previous if invalid qty entered
            inputQty = qty;
        }
    }

</script>

<div class="cart-item-container">
  <div class="cart-img-preview">
    <Image src="{logo}" alt="{title} logo"/>
  </div>
  <h5 class="item-title">{title}</h5>
  <div class="trash-icon" on:click={trashItem(name)}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.36 19.46" style="width: 18px; height: 18px">
      <defs>
        <style>.cls-1 {
          fill: #6d7a83;
        }

        .cls-2 {
          fill: none;
          stroke: #6d7a83;
          stroke-miterlimit: 10;
          stroke-width: 1.75px;
        }
        </style>
      </defs>
      <path class="cls-1" d="M16.39,4.57,14.81,17.71H4.55L3,4.57H16.39m2-1.75H1L3,19.46H16.36l2-16.64Z"/>
      <line class="cls-2" y1="3.66" x2="19.36" y2="3.66"/>
      <polyline class="cls-2" points="6.01 3.56 7.24 0.88 9.61 0.88"/>
      <polyline class="cls-2" points="13.21 3.56 11.99 0.88 9.61 0.88"/>
      <polygon class="cls-1" points="6.2 6.13 7.36 16.19 8.62 16.19 7.45 6.13 6.2 6.13"/>
      <polygon class="cls-1" points="11.9 6.13 10.74 16.19 11.99 16.19 13.16 6.13 11.9 6.13"/>
    </svg>
  </div>
  <div class="user-gen-name-row">
    <p>{subtitle}</p>
  </div>
  <div class="qty-row">
    <p class="mr-2">Qty</p>
    <span class="qty-btn qty-minus unselectable m-1" on:click={subtractQty}>-</span>
    <input id="qty-input" on:focusout={setQtyFromInput}
           type="text" bind:value={inputQty} class="cart-item-qty-input"
           aria-label="luminary-journal quantity">
    <span class="qty-btn qty-plus unselectable m-1" on:click={addQty}>+</span>
  </div>
  <div class="create-another-row">
    <div class="create-another">
      <p class="create-another-label">+ Create Another</p>
    </div>
  </div>
  <div class="price">${price}</div>
</div>

<style>

  .cart-item-container {
    max-width: 430px;
    max-height: 140px;
    display: grid;
    grid-template-columns: 110px auto 35px;
    grid-template-rows: 30px 30px 30px 30px;
    gap: 3px 7px;
    margin: 5px;
    align-items: center;
  }

  .cart-img-preview {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 5;
    place-self: center;
    margin-top: 10px;
  }

  .item-title {
    grid-column-start: 2;
    grid-row-start: 1;
    justify-self: left;
    font-size: 20px;
    font-weight: 600;
  }

  .trash-icon {
    grid-column-start: 3;
    grid-row-start: 1;
    place-self: center;
  }

  .user-gen-name-row {
    grid-column-start: 2;
    grid-row-start: 2;
    justify-self: left;
    font-size: 14px;
  }

  .qty-row {
    grid-column-start: 2;
    grid-row-start: 3;
    display: flex;
    align-items: center;
    justify-self: left;
  }

  .qty-btn {
    width: 18px;
    height: 18px;
    border: solid 1px #5d5d5d;
    text-align: center;
    border-radius: 50%;
  }

  .cart-item-qty-input {
    height: 24px;
    width: 28px;
    text-align: center;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    display: inline-block;
    cursor: text;
}

  .create-another-row {
    grid-column-start: 2;
    grid-row-start: 4;
  }

  .create-another-label {
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    text-decoration: underline;
  }

  .price {
    grid-column-start: 3;
    grid-row-start: 4;
    place-self: center;
  }


  @media screen and (max-width: 450px) {
  .cart-item-container {
    max-height: 130px;
    grid-template-columns: 90px auto 35px;
    grid-template-rows: 30px 30px 30px 30px;
    gap: 1px 5px;
    margin: 5px 0;
  }

  .item-title {
    font-size: 14px;
    font-weight: 600;
  }

  .user-gen-name-row {
    font-size: 11px;
  }

  .create-another-label {
    font-size: 12px;
    font-weight: 600;
  }
  }
</style>