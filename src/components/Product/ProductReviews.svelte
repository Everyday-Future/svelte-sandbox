<script>
  export let rating = 0;
  export let reviews = 0;
</script>

<div class="wrapper">
  <div class="stars">
    {#each Array(rating) as _, i}
      <span>x</span>
    {/each}
    {#each Array(5 - rating) as _, i}
      <span>o</span>
    {/each}
  </div>
  <div class="reviews">
    <span class="count"><a href="/">{reviews} Reviews</a></span>
    <span class="write"><a href="/">Write a Review</a></span>
  </div>
</div>

<style scoped>
  .wrapper {
    display: flex;
    gap: 0.5rem;
  }

  a {
    font-size: 0.8rem;
  }

  .count > a {
    position: relative;
    color: rgb(137, 150, 155);
    font-weight: 600;
  }

  .count > a::after {
    content: '|';
    color: rgb(155, 155, 155);
    padding: 0 0.3rem;
    margin-left: 0.3rem;
  }

  .write > a {
    color: #6d7a83;
  }
</style>
