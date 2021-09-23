<script>
    import WorksCitedCard from "../components/Cards/WorksCitedCard.svelte";

    export let citations;
    export let categories = [
        "Cessation",
        "Development",
        "Exercise",
        "Finance",
        "Goals"
    ];
    let selectedCategories = ["Development"];

    function removeCategory(catName) {

    }
</script>

<div class="works-cited-header">
  <h1 class="header-title">TODO - Works Cited Header</h1>
</div>

<div class="container">
  <div class="">
    <div class="">
      <form action="#">
        <fieldset>
          <label class="" for="filter">Filter by:</label>
          <select class="select-menu color-navy m-0" name="filter" id="filter" onchange="add_filter();">
            {#each categories as category}
              <option>{category}</option>
            {/each}
          </select>
        </fieldset>
        <fieldset>
          <label class="" for="filter">Search by index or keyword:</label>
          <input class="" type="text" name="search" id="search"
                 value="" onchange="search();">
        </fieldset>
      </form>
    </div>
    <div class="">
      <p class="">Selected:</p>
      <div class="" id="categories">
        {#each selectedCategories as category}
          <div id="cat-{category}" class="mod-button align-middle">
            {category}
            <svg on:click={removeCategory(category)} width="1.6rem" height="1.6rem" viewBox="0 0 16 16"
                 class="bi bi-x align-middle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<div class="container">
  <div class="card-columns">
    {#each citations as citation}
      <div class="card">
        <WorksCitedCard {...citation}/>
      </div>
    {/each}
  </div>
</div>

<style>

  .works-cited-header {
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


