<script>
    import {isEditing} from './customizer';
    import EditButton from "../Buttons/EditButton.svelte";

    export let component_id;
    export let component_img = "";
    export let component_name = "";
    export let component_description = "";
    export let position_x = -1;
    export let position_y = -1;
    export let position_w = -1;
    export let position_h = -1;
    export let page = -1;
</script>

<div style="position: relative" class="x-{position_x} y-{position_y} w-{position_w} h-{position_h} p-{page}">

  <EditButton isVisible="{$isEditing}"/>

  <img src={component_img} alt={component_description}>
  <!--{component_name} {component_id}-->
</div>



