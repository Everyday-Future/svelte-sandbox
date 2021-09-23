<!-- BlogMenuCard.stories.svelte -->

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import BlogMenuCard from "../../../components/Cards/BlogMenuCard.svelte";
</script>

<Meta
  title="components/Cards/BlogMenuCard"
  component={BlogMenuCard}
  argTypes={{
    src: { control: "text" },
    alt: { control: "text" },
    mobile_src: { control: "text", required: false },
    title: { control: "text", required: false },
    body: { control: "text", required: false }
  }}
/>

<Template let:args>
  <div style="max-width: 640px; padding: 20px">
  <BlogMenuCard  {...args} />
  </div>
</Template>

<Story
  name="Default"
  args={{
    src: 'https://www.fillmurray.com/640/360',
    alt: 'fill murray',
    mobile_src: 'https://www.fillmurray.com/640/360',
    title: 'Bill Murray, national treasure',
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
  name="Tags"
  args={{
    title: "Default Story",
    body: "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children.",
    tags: "MINDFULNESS, EXERCISE, SLEEP",
    src: 'https://www.fillmurray.com/640/360',
    alt: 'fill murray',
    mobile_src: 'https://www.fillmurray.com/640/360',
  }}
/>
