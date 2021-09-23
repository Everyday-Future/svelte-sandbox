<!-- Images.stories.svelte -->

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Image from "../../../components/Image/Image.svelte";
</script>

<Meta
  title="components/Images/Image"
  component={Image}
  argTypes={{
    src: { control: "text" },
    alt: { control: "text" },
    mobile_src: { control: "text", required: false },
    caption: { control: "text", required: false },
    captionColor: { control: 'color', required: false }
  }}
/>

<Template let:args>
  <Image  {...args} />
</Template>

<Story
  name="Default"
  args={{
    src: 'https://www.fillmurray.com/640/360',
    alt: 'fill murray',
    mobile_src: 'https://www.fillmurray.com/640/360',
  }}
/>

<Story
  name="Captioned"
  args={{
    src: 'https://www.fillmurray.com/640/360',
    alt: 'fill murray',
    mobile_src: 'https://www.fillmurray.com/640/360',
    caption: 'Bill Murray',
    captionColor: '#fff'
  }}
/>

<Story
  name="Long Caption"
  args={{
    src: 'https://www.fillmurray.com/640/360',
    alt: 'fill murray',
    mobile_src: 'https://www.fillmurray.com/640/360',
    caption: 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt ' +
     'with my name printed on it? Do you see a little Asian child with a blank expression on his face ' +
      'sitting outside on a mechanical helicopter that shakes when you put quarters in it? No?',
    captionColor: '#fff'
  }}
/>
