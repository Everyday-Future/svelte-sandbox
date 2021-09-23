
<script>
  export let statsData = [
      {'val': 180, 'name': 'pages'},
      {'val': 3, 'name': 'months'},
      {'val': 90, 'name': 'days'}
  ];
</script>

<style>

  h2, p {
    color: #4c5559;
    text-align: center;
  }

  .feature-counter {
    display: flex;
    align-content: stretch;
  }

  .feature-column {
    flex-grow: 1;
    text-align: center;
  }

</style>



<div class="feature-counter">
  {#each statsData as stat, idx}
  <div id="feature-{idx}" class="feature-column">
    <h2 class="feature-counter-header">{stat.val}</h2>
    <p class="feature-counter-details">{stat.name}</p>
  </div>
    {/each}
</div>