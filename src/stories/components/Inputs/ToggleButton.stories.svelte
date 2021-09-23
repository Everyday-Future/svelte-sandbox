<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import ToggleButton from "../../../components/Inputs/ToggleButton.svelte";
</script>

<Meta
  title="components/Inputs/ToggleButton"
  component={ToggleButton}
  argTypes={{
    falseLabel: { control: "text" },
    trueLabel: { control: "text" },
    transition: { control: "number" },
    debug: {control: 'boolean'},
    btnType: {
      control: { type: "select", options: ["primary", 'secondary'] },
    },
    onClick: { action: "onClick" },
  }}
/>

<Template let:args>
  <div style="max-width: 600px; margin: 30px">
  <ToggleButton {...args} on:click={args.onClick} />
  </div>
</Template>

<Story
  name="Boolean"
  args={{
    falseLabel: "False",
    trueLabel: "True",
    debug: true
  }}
/>

<Story
  name="Calendar"
  args={{
    falseLabel: "Weekly Calendar",
    trueLabel: "Weekly Notes",
    debug: true
  }}
/>

<Story
  name="Unlabeled"
  args={{
    falseLabel: "",
    trueLabel: "",
    debug: true
  }}
/>
