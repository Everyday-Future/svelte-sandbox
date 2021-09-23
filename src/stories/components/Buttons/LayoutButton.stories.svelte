<!-- LayoutButton.stories.svelte -->

<script>
    import {Meta, Template, Story} from "@storybook/addon-svelte-csf";

    import LayoutButton from "../../../components/Buttons/LayoutButton.svelte";
</script>

<Meta
  title="components/Buttons/LayoutButton"
  component={LayoutButton}
  argTypes={{
    layoutPattern: { control: "data", defaultValue: [
        {x: 0, y: 0, w: 2, h: 2},
        {x: 0, y: 2, w: 1, h: 2},
        {x: 1, y: 2, w: 1, h: 1},
        {x: 1, y: 3, w: 1, h: 1},
        {x: 0, y: 4, w: 2, h: 2},
        {x: 2, y: 0, w: 2, h: 2},
        {x: 2, y: 2, w: 2, h: 2},
        {x: 2, y: 4, w: 2, h: 2},
    ] },
    foregroundColor: { control: "color" },
    backgroundColor: { control: "color" }
  }}
/>

<Template let:args>
  <LayoutButton {...args}/>
</Template>

<Story
  name="Default"
/>

<Story
  name="Reversed"
  args={{
      backgroundColor: '#fff',
      foregroundColor: '#6D7A83',
      layoutPattern: [
          {x: 0, y: 0, w: 1, h: 2},
          {x: 1, y: 0, w: 1, h: 2},
          {x: 0, y: 2, w: 1, h: 2},
          {x: 1, y: 2, w: 1, h: 2},
          {x: 0, y: 4, w: 1, h: 2},
          {x: 1, y: 4, w: 1, h: 2},
          {x: 2, y: 0, w: 1, h: 2},
          {x: 3, y: 0, w: 1, h: 2},
          {x: 2, y: 2, w: 1, h: 2},
          {x: 3, y: 2, w: 1, h: 2},
          {x: 2, y: 4, w: 1, h: 2},
          {x: 3, y: 4, w: 1, h: 2}
      ],
  }}
/>
