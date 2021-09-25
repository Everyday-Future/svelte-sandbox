<!-- AboutBanner.stories.svelte -->

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import AboutBanner from "../../../components/Banners/AboutBanner.svelte";
</script>

<Meta
  title="components/Banners/AboutBanner"
  component={Image}
  argTypes={{
    isOpen: { control: "boolean", required: false }
  }}
/>

<Template let:args>
  <AboutBanner  {...args} />
</Template>

<Story
  name="Default"
/>
