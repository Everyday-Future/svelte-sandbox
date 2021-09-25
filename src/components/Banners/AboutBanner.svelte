<script>
    import Image from "../Image/Image.svelte";
    import DropdownPicker from "../Inputs/DropdownPicker.svelte";

    export let fontColor = "#fff";
</script>

<div class="banner-container">
  <Image src="https://blog.luminaryhandbook.com/AboutUs-header-1000.png"
         alt="Pick the style of book that's best for you!"/>
  <div class="w-100" style="top: 8vw; position: absolute; text-align: center;">
    <p class="finder-heading">Hi, we're the custom<br> journal people</p>
    <p class="finder-subheading">WE ARE AN OPEN BOOK. THIS IS OUR STORY.</p>
  </div>
</div>

<style>
  .finder-subheading {
    font-size: 1.7vw;
    font-weight: 500;
    color: #6a7b84;
    margin-top: 2.4vw;
  }

  .finder-heading {
    font-size: 4.3vw;
    font-weight: 400;
    color: #6a7b84;
  }

</style>