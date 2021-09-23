<!-- Customizer.stories.svelte -->

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import AthleteCustomizer from "../../routes/customizer/AthleteCustomizer.svelte";
</script>

<Meta
  title="Customizer/Customizer"
  component={AthleteCustomizer}
  argTypes={{
    productName: { control: "text" },
    isProduct: { control: "boolean" },
    productColor: { control: "color" }
  }}
/>

<Template let:args>
  <AthleteCustomizer  {...args} on:click={args.onClick}/>
</Template>

<Story
  name="Athlete"
  args={{
    isProduct: false,
  }}
/>

<Story
  name="Journal"
  args={{
    isProduct: false,
  }}
/>

<Story
  name="Notebook"
  args={{
    isProduct: false,
  }}
/>

<Story
  name="Planner"
  args={{
    isProduct: false,
  }}
/>

