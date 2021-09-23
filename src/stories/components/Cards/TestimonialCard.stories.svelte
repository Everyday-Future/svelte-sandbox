<!-- TestimonialCard.stories.svelte -->

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import TestimonialCard from "../../../components/Cards/TestimonialCard.svelte";
</script>

<Meta
  title="components/Cards/TestimonialCard"
  component={TestimonialCard}
  argTypes={{
    rating: { control: "number" },
    name: { control: "text", required: false },
    body: { control: "text", required: false }
  }}
/>

<Template let:args>
  <div style="max-width: 640px; padding: 20px">
  <TestimonialCard  {...args} />
  </div>
</Template>

<Story
  name="High Rating"
  args={{
    rating: 4.5,
    name: 'Bill Murray',
    body: '<strong>You think water moves fast?</strong> You should see ice. It moves like it has a mind.\n'+
'    Like it knows it killed the world once\n'+
'    and got a taste for murder. <em>After the avalanche, it took us a week to climb out.</em>\n'+
'    Now, I don\'t know exactly when we turned on each other,\n'+
'    <code>but I know that seven of us survived the slide...</code> and only five made it out.\n'+
'    Now we took an oath, that I\'m breaking now.\n'+
'    We said we\'d say it was the snow that killed the other two, but it wasn\'t.\n'+
'    Nature is lethal <a href="#">but it doesn\'t hold a candle to man.</a>',
  }}
/>

<Story
  name="Low Rating"
  args={{
    rating: 0.5,
    name: 'Bill Murray',
    body: '<strong>You think water moves fast?</strong> You should see ice. It moves like it has a mind.\n'+
'    Like it knows it killed the world once\n'+
'    and got a taste for murder. <em>After the avalanche, it took us a week to climb out.</em>\n'+
'    Now, I don\'t know exactly when we turned on each other,\n'+
'    <code>but I know that seven of us survived the slide...</code> and only five made it out.\n'+
'    Now we took an oath, that I\'m breaking now.\n'+
'    We said we\'d say it was the snow that killed the other two, but it wasn\'t.\n'+
'    Nature is lethal <a href="#">but it doesn\'t hold a candle to man.</a>',
  }}
/>
