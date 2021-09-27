<script>
    export let idx = 250;
    export let category = '';
    export let link = '';
    export let title = '';
    export let summary = '';
    export let authors = '';
    export let source = '';


</script>
<div class="card-container my-1">
  <div class="card">
    <div class="card-body">
      <slot></slot>
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
    border: none;
    box-shadow: 0 8px 15px 4px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    transition: 0.4s;
  }

  .card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
  }


</style>
