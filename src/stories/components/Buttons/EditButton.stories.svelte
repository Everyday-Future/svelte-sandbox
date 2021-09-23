<!-- EditButton.stories.svelte -->

<script>
    import {Meta, Template, Story} from "@storybook/addon-svelte-csf";

    import EditButton from "../../../components/Buttons/EditButton.svelte";
</script>

<Meta
  title="components/Buttons/EditButton"
  component={EditButton}
  argTypes={{
    component_id: { control: "text" },
    isVisible: { control: "boolean" },
    backgroundColor: { control: "color" },
    strokeColor: { control: "color" },
    transitionMS: { control: "number" }
  }}
/>

<Template let:args>
  <EditButton {...args}/>
</Template>

<Story
  name="Default"
  args={{
      component_id: 'default',
      isVisible: true,
  }}
/>

<Story
  name="Reversed"
  args={{
      component_id: 'reversed',
      isVisible: true,
      backgroundColor: '#6d7a83',
      strokeColor: '#fff',
  }}
/>
