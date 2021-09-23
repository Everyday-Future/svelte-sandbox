<script>
    import Image from "../Image/Image.svelte";
    import DropdownPicker from "../Inputs/DropdownPicker.svelte";

    export let fontColor = "#fff";
</script>

<div class="banner-container">
  <Image src="https://blog.luminaryhandbook.com/handbook-finder-crop-1600.jpg"
         alt="Pick the style of book that's best for you!"/>
  <div class="w-100" style="top: 8vw; position: absolute; text-align: center;">
    <p class="finder-subheading">HANDBOOK FINDER</p>
    <p class="finder-heading">Let's make your day.</p>
  </div>
  <div class="w-100" style="top: 40vw; position: absolute; text-align: center;">
    <DropdownPicker label="I want to " foregroundColor={fontColor} width="min(270px, 50vw)">
          <option hidden="" disabled="" selected="" value=""></option>
          <option value="planner">GET ORGANIZED</option>
          <option value="journal">FIND SILVER LININGS</option>
          <option value="notebook">CAPTURE INSPIRATION</option>
          <option value="muse">GET CREATIVE</option>
          <option value="trainer">BREAK RECORDS</option>
    </DropdownPicker>
    </div>
</div>

<style>
  .finder-subheading {
    font-size: 1.7vw;
    font-weight: 600;
    letter-spacing: 0.4vw;
    color: white;
    margin: 0;
  }

  .finder-heading {
    font-size: 3.3vw;
    font-weight: 700;
    color: white;
  }

</style>