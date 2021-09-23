<!-- DynamicSVG.stories.svelte -->

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import DynamicSVG from "../../../components/SVG/DynamicSVG.svelte";
</script>

<Meta
  title="components/Images/DynamicSVG"
  component={DynamicSVG}
  argTypes={{
    target_svg_name: {
        type: "select",
        options: ["calendar", "calls_orig", "calls_path", "muscle_soreness", "muse_logo"]
        },
    visible: { control: "boolean" },
    debug: { control: "boolean" }
  }}
/>

<Template let:args>
  <DynamicSVG  {...args} />
</Template>

<Story
  name="Calendar"
  args={{
    target_svg_name: 'calendar',
    debug: true
  }}
/>

<Story
  name="Muscle Soreness"
  args={{
    target_svg_name: 'muscle_soreness',
    debug: true
  }}
/>

<Story
  name="Calls Original"
  args={{
    target_svg_name: 'calls_orig',
    debug: true
  }}
/>

<Story
  name="Calls Paths"
  args={{
    target_svg_name: 'calls_path',
    debug: true
  }}
/>

<Story
  name="Muse Logo"
  args={{
    target_svg_name: 'muse_logo',
    debug: true
  }}
/>
