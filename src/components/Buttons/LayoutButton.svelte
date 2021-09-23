<script>
    export let layoutPattern = [
        {x: 0, y: 0, w: 2, h: 2},
        {x: 0, y: 2, w: 1, h: 2},
        {x: 1, y: 2, w: 1, h: 1},
        {x: 1, y: 3, w: 1, h: 1},
        {x: 0, y: 4, w: 2, h: 2},
        {x: 2, y: 0, w: 2, h: 2},
        {x: 2, y: 2, w: 2, h: 2},
        {x: 2, y: 4, w: 2, h: 2},
    ];
    export let foregroundColor = '#fff';
    export let backgroundColor = '#6D7A83';

    function getX(xVal) {
        return {0: 5, 1: 38, 2: 72, 3: 105}[xVal]
    }

    function getY(yVal) {
        return {0: 5, 1: 20, 2: 37, 3: 52, 4: 70, 5: 85}[yVal]
    }

    function getW(wVal) {
        return {1: 30, 2: 63}[wVal]
    }

    function getH(hVal) {
        return {1: 11, 2: 26, 3: 43, 4: 58, 5: 76, 6: 91}[hVal]
    }
</script>

<svg viewBox='0 0 140 100' style="width: 60%">
  <g style="fill: {backgroundColor}">
    <rect x="0"
          y="0"
          width="200"
          height="100"
          rx="2"></rect>
  </g>
  {#each layoutPattern as pattern}
    <rect style="fill: {foregroundColor}"
          x="{getX(pattern.x)}"
          y="{getY(pattern.y)}"
          width="{getW(pattern.w)}"
          height="{getH(pattern.h)}" rx="2"></rect>
  {/each}
</svg>