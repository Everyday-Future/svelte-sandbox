<script>
    export let idx = 250;
    export let category = '';
    export let link = '';
    export let title = '';
    export let summary = '';
    export let authors = '';
    export let source = '';


</script>
<div id="citation-{idx}" class="card-container my-1" style="">
  <div class="card">
    <div class="card-header category-{category}">
      <p class="m-0">[{idx}]
        <a class="card-link float-right" href="{link}" target="_blank" rel="noopener">
          <u>View Source</u>
        </a>
      </p>
    </div>
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{@html summary}</p>
      <p class="card-text m-0">{authors}</p>
      <p class="card-text m-0">{source}</p>

    </div>
  </div>
</div>

<style>
  .card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, .125);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: .25rem;
    transition: 0.4s;
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
  }

  .card-title {
    margin-bottom: .75rem;
  }

  .card-text:last-child {
    margin-bottom: 0;
  }

  .card-header {
    padding: .75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, .03);
    border-bottom: 1px solid rgba(0, 0, 0, .125);
  }

  .card-header:first-child {
    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
  }

  .card-header:first-child {
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
  }

  /* Add some padding inside the card container */
  .float-right {
    float: right!important;
  }

</style>
