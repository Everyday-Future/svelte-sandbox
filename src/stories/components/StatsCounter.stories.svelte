<!-- StatsCounter.stories.svelte -->

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import StatsCounter from "../../components/StatsCounter.svelte";
</script>

<Meta
  title="components/StatsCounter"
  component={StatsCounter}
  argTypes={{
    productName: { control: "text" },
    isProduct: { control: "boolean" },
    productColor: { control: "color" }
  }}
/>

<Template let:args>
  <StatsCounter  {...args} />
</Template>

<Story
  name="Default"
  args={{
    isProduct: false,
  }}
/>
