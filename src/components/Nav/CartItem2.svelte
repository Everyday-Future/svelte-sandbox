<script>
  import QuantityChanger from '../Form/QuantityChanger.svelte';
  export let title = '';
  export let description = '';
  export let imageURL = '';
  export let quantity = 0;
  export let price = 0;
  $: calculatedPrice = (quantity * price).toFixed(2); // auto calculates the total upon variable change (price / quantity)
</script>

<div class="cart-item-wrapper">
  <div class="cart-item">
    <div class="cart-item__image">
      <img src={imageURL} alt="" />
    </div>
    <div class="cart-item__title">
      <span>{title}</span>
    </div>
    <div class="cart-item__description">
      <span>{description}</span>
    </div>
    <div class="cart-item__quantity">
      <QuantityChanger bind:quantity />
      <!-- Here we bind the quantity from the changer component -->
    </div>
    <div class="cart-item__remove">
      <button class="action-link">Remove</button>
    </div>
    <div class="cart-item__edit">
      <button class="action-link">Edit</button>
    </div>
    <div class="cart-item__save">
      <button class="action-link">Save For Later</button>
    </div>
    <div class="cart-item__create">
      <button class="create-another-link">Create another</button>
    </div>
    <div class="cart-item__price">
      <span>${calculatedPrice}</span>
    </div>
  </div>
</div>

<style>
  .cart-item {
    display: grid;
    grid-template-columns: 35% 1fr auto;
    grid-template-rows: 2rem 2rem 3rem 1rem 2rem 2rem;
    grid-template-areas:
      'image title delete'
      'image description edit'
      'image quantity quantity'
      'image quantity quantity'
      'create create save'
      '. . price';
    gap: 0.75rem 0.25rem;
    overflow: hidden;
    position: relative;
    padding: 1rem 0.3rem;
  }

  .cart-item-wrapper::after {
    content: '';
    display: block;
    width: 100%;
    height: 2.5px;
    background-color: #cfd3d5;
  }

  .cart-item__image {
    grid-area: image;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .cart-item__image > img {
    width: 100%;
    height: auto;
  }

  .cart-item__title {
    grid-area: title;
    color: #6d7a83;
    font-weight: 600;
    font-size: 1.3rem;
    white-space: nowrap;
  }

  .cart-item__description {
    grid-area: description;
    color: #6d7a83;
    font-size: 0.8rem;
  }

  .cart-item__description > span::after {
    content: '...';
    text-decoration: underline;
  }

  .cart-item__quantity {
    grid-area: quantity;
  }
  .cart-item__edit {
    grid-area: edit;
    justify-self: end;
  }

  .cart-item__save {
    grid-area: save;
  }

  .cart-item__remove {
    grid-area: delete;
    justify-self: end;
  }

  .cart-item__create {
    grid-area: create;
  }

  .cart-item__price {
    grid-area: price;
    color: #6d7a83;
    text-align: right;
    font-weight: 600;
    font-size: 1.3rem;
    letter-spacing: 0.05ch;
  }

  .action-link {
    color: #6d7a83;
    font-size: 0.8rem;
    border: none;
    background: white;
    cursor: pointer;
    text-decoration: underline;
    text-align: right;
    width: auto;
    padding: 0;
  }

  .create-another-link {
    color: #6d7a83;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    background: white;
    cursor: pointer;
    text-align: left;
    width: auto;
    position: relative;
    display: flex;
    gap: 0.25rem;
  }

  .create-another-link::before {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 6px;
    height: 1px;
    width: 11.5ch;
    background-color: hsl(205, 9%, 75%);
  }

  .create-another-link::after {
    content: '+';
    font-family: 'Work Sans', Regular;
    font-weight: 400;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 5rem;
    background-color: #ebedee;
    text-decoration-color: #ebedee;
  }

  /* Change to Desktop Version */
  @media (min-width: 768px) {
    .cart-item {
      grid-template-columns: 30% 1fr auto;
      grid-template-rows: 2rem 2rem 3rem 3rem;
      grid-template-areas:
        'image title delete'
        'image description edit'
        'image quantity save'
        'image create price';
    }

    .action-link {
      white-space: nowrap;
    }

    .cart-item__description {
      font-size: 1rem;
      white-space: nowrap;
    }
  }
</style>
