<script>
    import {isMenuOpen} from './customizer';
    import {fly, fade} from 'svelte/transition';
    import CustomizerPage from "./CustomizerPage.svelte";

    export const product_name = '';
    export const customizerData = {
        "product_name": "luminary-planner",
        "pages": [{"name": "Layout", "data": {}},
            {"name": "Weekly", "data": {"options": ["weekly-calendar", "monthly-calendar"]}},
            {"name": "Summary", "data": {}}]
    };
    export let currentPage = 0;

</script>

{#each customizerData['pages'] as page, idx}
  {#if idx === currentPage}
    <CustomizerPage {...page}/>
  {/if}
{/each}

<style>

</style>