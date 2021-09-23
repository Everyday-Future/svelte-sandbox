<!-- Logo.stories.svelte -->

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Logo from "../../../components/Nav/Logo.svelte";
</script>

<Meta
  title="components/Images/Logo"
  component={Logo}
  argTypes={{
    productName: { control: "text" },
    isProduct: { control: "boolean" },
    productColor: { control: "color" }
  }}
/>

<Template let:args>
  <Logo  {...args} />
</Template>

<Story
  name="Default"
  args={{
    isProduct: false,
  }}
/>
