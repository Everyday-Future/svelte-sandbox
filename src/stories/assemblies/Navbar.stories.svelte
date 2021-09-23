<!-- Navbar.stories.svelte -->

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Navbar from "../../components/Nav/Navbar.svelte";
</script>

<Meta
  title="Assemblies/Navbar+Cart"
  component={Navbar}
  argTypes={{
    productName: { control: "text" },
    isProduct: { control: "boolean" },
    productColor: { control: "color" }
  }}
/>

<Template let:args>
  <Navbar  {...args} on:click={args.onClick}/>
</Template>

<Story
  name="Default"
  args={{
    isProduct: false,
  }}
/>

<Story
  name="Product"
  args={{
    isProduct: true,
    productName: "Journal",
    productColor: '#6D7A83'
  }}
/>