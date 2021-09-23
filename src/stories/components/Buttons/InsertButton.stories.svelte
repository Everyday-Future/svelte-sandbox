<!-- InsertButton.stories.svelte -->

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import InsertButton from "../../../components/Buttons/ComponentButton.svelte";
</script>

<Meta
  title="components/Buttons/InsertButton"
  component={InsertButton}
  argTypes={{
    title: { control: "text" },
    icon: { control: "text" },
    difficulty: {
      control: { type: "select", options: [0, 1, 2] },
    },
    completionTime: { control: "number" },
    isRecommended: { control: "boolean" }
  }}
/>

<Template let:args>
  <InsertButton  {...args} />
</Template>

<Story
  name="Easy"
  args={{
      title: 'Daily Meditation',
      icon: 'mindfulness.svg',
      difficulty: 0,
      completionTime: null,
      isRecommended: false,
  }}
/>

<Story
  name="Difficult"
  args={{
      title: 'Daily Meditation',
      icon: 'mindfulness.svg',
      difficulty: 2,
      completionTime: 10,
      isRecommended: false,
  }}
/>

<Story
  name="Recommended"
  args={{
      title: 'Daily Meditation',
      icon: 'mindfulness.svg',
      difficulty: 2,
      completionTime: 10,
      isRecommended: true,
  }}
/>
