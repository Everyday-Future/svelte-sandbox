<!-- HomeBanner.stories.svelte -->

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import HomeBanner from "../../../components/Banners/HomeBanner.svelte";
</script>

<Meta
  title="components/Banners/HomeBanner"
  component={Image}
  argTypes={{
    animateInterval: { control: "number" }
  }}
/>

<Template let:args>
  <HomeBanner  {...args} />
</Template>

<Story
  name="Default"
  args={{
    animateInterval: 3000,
  }}
/>
