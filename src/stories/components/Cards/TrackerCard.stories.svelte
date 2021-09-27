<!-- TrackerCard.stories.svelte -->

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import TrackerCard from "../../../components/Cards/TrackerCard.svelte";
</script>

<Meta
  title="components/Cards/TrackerCard"
  component={TrackerCard}
  argTypes={{
    src: { control: "text" },
    alt: { control: "text" },
    mobile_src: { control: "text", required: false },
    title: { control: "text", required: false },
    body: { control: "text", required: false }
  }}
/>

<Template let:args>
  <div style="max-width: 640px; padding: 20px">
    <TrackerCard  {...args} >
      <img src="{args.src}" alt="demo svg">
    </TrackerCard>
  </div>
</Template>

<Story
  name="square"
  args={{
    src: 'https://blog.luminaryhandbook.com/Organization_qtr.svg',
  }}
/>

<Story
  name="wide"
  args={{
    src: "https://blog.luminaryhandbook.com/Organization_wide.svg",
  }}
/>

<Story
  name="tall"
  args={{
    src: "https://blog.luminaryhandbook.com/MealPlanner_vert-half.svg",
  }}
/>
