<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import DropdownPicker from "../../../components/Inputs/DropdownPicker.svelte";
</script>

<Meta
  title="components/Inputs/DropdownPicker"
  component={DropdownPicker}
  argTypes={{
    label: { control: "text" },
    transition: { control: "number" },
    pickerType: {
      control: { type: "select", options: ["border", "line"] },
    }
  }}
/>

<Template let:args>
  <DropdownPicker {...args}>
    <div>Option 1</div>
    <div>Option 2</div>
    <div>Option 3</div>
  </DropdownPicker>
</Template>

<Story
  name="Line"
  args={{
    pickerType: "line",
    label: "Primary",
  }}
/>

<Story
  name="Border"
  args={{
    pickerType: "border",
    label: "Secondary",
  }}
/>
