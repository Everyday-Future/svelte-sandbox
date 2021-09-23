<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Button from "../../../components/Buttons/Button.svelte";
</script>

<Meta
  title="components/Buttons/Button"
  component={Button}
  argTypes={{
    label: { control: "text" },
    transition: { control: "number" },
    btnType: {
      control: { type: "select", options: ["primary", 'secondary'] },
    },
    onClick: { action: "onClick" },
  }}
/>

<Template let:args>
  <Button {...args} on:click={args.onClick} />
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
  }}
/>
