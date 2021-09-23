<script>
    import BlogMenuCard from "../components/Cards/BlogMenuCard.svelte";

    export let blogs;

</script>


<div class="blog-menu-header">
  <h1 class="header-title">TODO - Blog Menu Header</h1>
</div>

<div class="container">
  <div class="card-columns">
    {#each blogs as post}
      <div class="card">
        <BlogMenuCard {...post}/>
      </div>
    {/each}
  </div>
</div>

<style>

  .blog-menu-header {
    text-align: center;
    height: 200px;
    width: 100%;
    background-color: #4c5559;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-title {
    color: white;
    flex: 1 1 0;
  }

  .card-columns .card {
    display: inline-block;
    width: 100%;
    margin: 20px 0;
  }

  @media (min-width: 576px) {
    .card-columns {
      -webkit-column-count: 3;
      -moz-column-count: 3;
      column-count: 3;
      -webkit-column-gap: 1.25rem;
      -moz-column-gap: 1.25rem;
      column-gap: 1.25rem;
      orphans: 1;
      widows: 1
    }
  }
</style>


