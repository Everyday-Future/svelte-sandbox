<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import InsertAccordion from "../../components/Customizer/InsertAccordion.svelte";
  import InsertButton from "../../components/Buttons/ComponentButton.svelte";
</script>

<Meta
  title="Customizer/Components/InsertAccordion"
  component={InsertAccordion}
  argTypes={{
    title: { control: "text" },
    isOpen: { control: "boolean" },
    durationMS: {control: 'number'},
    onClick: { action: "onClick" },
  }}
/>

<Template let:args id="Empty">
  <div style="padding: 20px; max-width: 800px;">
  <InsertAccordion {...args} on:click={args.onClick}>
  </InsertAccordion>
  </div>
</Template>

<Template let:args id="OneItem">
  <div style="padding: 20px; max-width: 800px;">
  <InsertAccordion {...args} on:click={args.onClick}>
    <InsertButton title="insert button" icon="mindfulness.svg" difficulty=0 completionTime=0 isRecommended={false} />
  </InsertAccordion>
  </div>
</Template>

<Template let:args id="ManyItems">
  <div style="padding: 20px; max-width: 800px;">
  <InsertAccordion {...args} on:click={args.onClick}>
    <InsertButton title="insert button" icon="mindfulness.svg" difficulty=0 completionTime=0 isRecommended={false} />
    <InsertButton title="another insert" icon="mindfulness.svg" difficulty=1 completionTime=5 isRecommended={true} />
    <InsertButton title="so so spice" icon="mindfulness.svg" difficulty=2 completionTime=20 isRecommended={false} />
  </InsertAccordion>
  </div>
</Template>

<Story
  name="Empty" template="Empty"
  args={{
    title: "Customizer Insert Section",
    isOpen: false
  }}
/>

<Story
  name="OneItem" template="OneItem"
  args={{
    title: "Customizer Insert Section",
    isOpen: false
  }}
/>

<Story
  name="ManyItems" template="ManyItems"
  args={{
    title: "Customizer Insert Section",
    isOpen: false
  }}
/>
