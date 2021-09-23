<!-- Layout.stories.svelte -->

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Layout from "../../components/Customizer/Layout.svelte";
</script>

<Meta
  title="Customizer/Layout"
  component={Layout}
  argTypes={{
    productName: { control: "text" },
    isProduct: { control: "boolean" },
    productColor: { control: "color" }
  }}
/>

<Template let:args>
  <Layout  {...args} />
</Template>

<Story
  name="Default"
  args={{
    isProduct: false,
  }}
/>
