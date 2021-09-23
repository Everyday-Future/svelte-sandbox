<!-- ShopBanner.stories.svelte -->

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import ShopBanner from "../../../components/Banners/ShopBanner.svelte";
</script>

<Meta
  title="components/Banners/ShopBanner"
  component={Image}
  argTypes={{
    isOpen: { control: "boolean", required: false }
  }}
/>

<Template let:args>
  <ShopBanner  {...args} />
</Template>

<Story
  name="Default"
/>
