<!-- WorksCitedCard.stories.svelte -->

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import WorksCitedCard from "../../../components/Cards/WorksCitedCard.svelte";
</script>

<Meta
  title="components/Cards/WorksCitedCard"
  component={WorksCitedCard}
  argTypes={{
    idx: { control: "number", required: false },
    category: { control: "text", required: false },
    link: { control: "text", required: false },
    title: { control: "text", required: false },
    summary: { control: "text", required: false },
    authors: { control: "text", required: false },
    source: { control: "text", required: false }
  }}
/>

<Template let:args>
  <div style="max-width: 640px; padding: 20px">
  <WorksCitedCard  {...args} />
  </div>
</Template>

<Story
  name="Default"
  args={{
    idx: 250,
    category: 'Exercise',
    link: 'https://www.luminaryhandbook.com/works_cited',
    title: 'Benefits of exercise',
    authors: 'Bill Murray',
    source: 'Journal of Bill Murray',
    summary: '<strong>You think water moves fast?</strong> You should see ice. It moves like it has a mind.\n'+
'    Like it knows it killed the world once\n'+
'    and got a taste for murder. <em>After the avalanche, it took us a week to climb out.</em>\n'+
'    Now, I don\'t know exactly when we turned on each other,\n'+
'    <code>but I know that seven of us survived the slide...</code> and only five made it out.\n'+
'    Now we took an oath, that I\'m breaking now.\n'+
'    We said we\'d say it was the snow that killed the other two, but it wasn\'t.\n'+
'    Nature is lethal <a href="#">but it doesn\'t hold a candle to man.</a>',
  }}
/>

