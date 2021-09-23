<script>
    import StarRating from "../Inputs/StarRating/StarRating.svelte";

    export let rating = 4.0;
    export let name = '';
    export let body = '';


</script>

<div class="card">
  <div class="container">
    <h4><b>{name}</b></h4>
    <p>{@html body}</p>
    <StarRating {rating}/>
  </div>
</div>


<style>
  .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px; /* 5px rounded corners */
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  /* Add some padding inside the card container */
  .container {
    padding: 2px 16px;
  }

</style>
