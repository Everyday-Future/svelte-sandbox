<script>
    // Name of the component, used to get other attributes
    export let componentName = '';
    // Cache of attribute data as {"name": "componentName", "description": ..., "previewImg": ...}
    export let componentData;
    export let title = '';
    export let icon = '';
    export let difficulty = 0;
    export let completionTime = 0;
    export let isRecommended = false;
</script>

<div class="component-btn">
  <div class="title">
    <p>{title}</p>
  </div>
  <img src="https://blog.luminaryhandbook.com/{icon}"
       alt="button icon" class="icon">

  <div class="component-spice-block">
    {#if difficulty === 1}
      <div class="component-spice">
        <img src="https://blog.luminaryhandbook.com/chilipeppers-time-rating-03.svg"
             alt="medium burnout indicator">
      </div>
    {:else if difficulty >= 2}
      <div class="component-spice">
        <img src="https://blog.luminaryhandbook.com/chilipeppers-time-rating-02.svg"
             alt="high burnout indicator">
      </div>
    {/if}
    {#if parseInt(completionTime) > 0}
      <img src="https://blog.luminaryhandbook.com/chilipeppers-time-rating-04.svg"
           alt="estimated time indicator" class="component-time">
      <p class="component-time-str">{completionTime}m</p>
    {/if}
  </div>
  {#if isRecommended === true}
    <div class="recommended">
      recommended
    </div>
  {/if}
</div>

<style>

  .component-btn {
    position: relative;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
    min-width: 259px;
    max-width: 350px;
    height: 70px;
    border: 2.2px solid #6d7a83;
    border-radius: 15px;
    font-weight: 600;
    margin: 0.7rem 0.3rem;
    color: #6d7a83;
    cursor: pointer;
  }

  .title {
    position: absolute;
    top: 20px;
    left: 70px;
    width: 250px;
    text-align: left;
    font-size: 0.8rem;
    font-weight: 700;
    padding: 7px;
  }

  .icon {
    width: 50px;
    position: absolute;
    top: 7px;
    left: 7px;
  }

  .component-spice-block {
    position: absolute;
    text-align: right;
    right: 13px;
    top: 7px;
  }

  .component-spice {
    width: 17px;
    height: 17px;
    position: relative;
    display: inline-block;
  }

  .component-time {
    width: 17px;
    height: 17px;
    position: relative;
    display: inline;
  }

  .component-time-str {
    position: relative;
    font-size: 0.8rem;
    font-weight: 500;
    display: inline;
    margin-left: -4px;
    margin-bottom: 0;
    padding: 3px 1px;
  }

  .recommended {
    position: absolute;
    text-align: right;
    right: -2px;
    bottom: -2px;
    padding: 4px 11px;
    background-color: #4c5559;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 600;
    border-radius: 0 0 12px 0;
  }
</style>