<script>
  import ProductPrice from './ProductPrice.svelte';
  import ProductReviews from './ProductReviews.svelte';

  export let title = ''; // product title
  export let value = ''; // value product holds on the selects.. Ex. 'notebook'
  export let description = ''; // product description
  export let imageUrl = ''; // path to the image of product
  export let alt = ''; // alt text for the image
  export let price = -1; // product price (whole or decimal number)
  export let discount = 0; // discount percentage in decimal.. Ex. .50
  export let decimals = false; // whether or not to show the numbers as whole/decimal
  export let buttonLabel = 'Build Yours'; // label for the red button
  export let rating = 0; // 0-5 rating integer
  export let reviews = 0; // number of reviews product has

  const options = [
    { value: 'notebook', label: 'CAPTURE INSPIRATION' },
    { value: 'journal', label: 'FIND SILVER LININGS' },
    { value: 'planner', label: 'GET ORGANIZED' },
    { value: 'muse', label: 'GET CREATIVE' },
    { value: 'trainer', label: 'BREAK RECORDS' },
  ];
</script>

<div class="product">
  <div class="product__image">
    <img src={imageUrl} {alt} width="450" height="600" />
  </div>
  <div class="product__content">
    <div class="product__selector">
      <span>I want to</span>
      <select name="product-select-{value}" id="product-select-{value}" class="font-sharpie">
        {#each options as option}
          <option value={option.value}>{option.label}</option>
        {/each}
      </select>
    </div>
    <div class="product__heading">
      <h3>{title}</h3>
      <ProductPrice {price} {discount} {decimals} />
    </div>
    <div class="product__reviews">
      <ProductReviews {rating} {reviews} />
    </div>
    <div class="product__description">
      <p>{description}</p>
    </div>
    <div class="product__nav">
      <a class="customize" href="/">{buttonLabel}</a>
      <a class="learnMore" href="/">Learn more ></a>
    </div>
  </div>
</div>

<style>
  /* For some reason it was not allowing me to import this font from the global css, I imported it here for now*/
  @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

  .product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
  }

  .product__image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }

  .product__image img {
    display: block;
    width: 75%;
    height: auto;
  }

  .product__reviews {
    width: 100%;
  }

  .product__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .product__selector {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 2rem;
  }

  .product__selector > span {
    white-space: nowrap;
    font-size: clamp(0.7rem, 0.7153rem + 1.6368vw, 1.8rem);
    font-weight: 600;
    letter-spacing: 0.05ch;
    color: #b1bdc3;
  }

  .product__selector > select {
    width: 100%;
    max-width: 30rem;
    background: none;
    border: none;
    border-bottom: solid #b1bdc3 3px;
    font-family: 'Permanent Marker', cursive;
    color: #6a7b84;
    font-size: clamp(0.7rem, 0.7153rem + 1.6368vw, 1.5rem);
  }

  .product__heading {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .product__heading h3 {
    font-size: clamp(1rem, 0.7153rem + 1.6368vw, 1.8rem);
    font-weight: 600;
    color: #6a7b84;
  }

  .product__reviews {
    margin-bottom: 2rem;
  }

  .product__description {
    text-align: left;
    margin-bottom: 2rem;
    color: #6d7a83;
  }

  .product__nav {
    display: flex;
    flex-direction: column;
    margin-right: auto;
    gap: 1.3rem;
  }

  .customize {
    background-color: #d5695c;
    color: white;
    padding: 0.75rem 1.25rem;
    border-radius: 0.4rem;
    text-decoration: none;
  }

  .learnMore {
    text-decoration: underline;
    color: #6d7a83;
    font-weight: 600;
  }

  @media (min-width: 600px) {
    .product__image img {
      width: 50%;
    }
  }

  @media (min-width: 980px) {
    .product {
      flex-direction: row;
    }

    .product__image {
      width: 40%;
    }

    .product__image img {
      width: 80%;
    }

    .product__selector {
      flex-direction: row;
    }

    .product__selector > select {
      padding-left: 1.5rem;
    }
  }

  @media (min-width: 1200px) {
    .product__image {
      width: 75%;
    }
  }
</style>
