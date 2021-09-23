<!-- Home.stories.svelte -->

<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import HomePage from "../../routes/index.svelte";
</script>

<Meta
  title="Assemblies/Home Page"
  component={HomePage}
/>

<Story name="Default">
  <HomePage />
</Story>
