<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import IconButton from "../../../components/Buttons/IconButton.svelte";
  import SaveIcon from "../../../components/Icons/SaveIcon.svelte";
</script>

<Meta
  title="components/Buttons/IconButton"
  component={IconButton}
  argTypes={{
    label: { control: "text" },
    transition: { control: "number" },
    iconLeft: { control: "boolean" },
    foregroundColor: {control: 'color'},
    btnType: {
      control: { type: "select", options: ["primary", 'secondary'] },
    },
    onClick: { action: "onClick" },
  }}
/>

<Template let:args>
  <IconButton {...args} on:click={args.onClick}>
    <SaveIcon fillColor={args.foregroundColor} />
  </IconButton>
</Template>

<Story
  name="Primary"
  args={{
    btnType: "primary",
    label: "Primary",
  }}
/>

<Story
  name="Secondary"
  args={{
    btnType: "secondary",
    label: "Secondary",
    foregroundColor: "#D5695C"
  }}
/>

<Story
  name="Customizer Primary"
  args={{
    btnType: "customizer-primary",
    label: "Primary",
  }}
/>

<Story
  name="Customizer Secondary"
  args={{
    btnType: "customizer-secondary",
    label: "Secondary",
    foregroundColor: "#1E90FF"
  }}
/>
