<!-- CartItem.stories.svelte -->

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import CartItem from "../../components/Nav/CartItem.svelte";
</script>

<Meta
  title="components/CartItem"
  component={CartItem}
  argTypes={{
    name: { control: "text", required: false },
    qty: { control: "number", required: false },
    price: { control: "number", required: false },
    title: { control: "text", required: false },
    subtitle: { control: "text", required: false },
    logo: { control: "text", required: false }
  }}
/>

<Template let:args>
  <div style="max-width: 450px; padding: 20px">
  <CartItem  {...args} />
  </div>
</Template>

<Story
  name="Planner"
  args={{
    name: 'luminary-planner',
    qty: 1,
    price: 35,
    logo: 'https://blog.luminaryhandbook.com/planner-mockup_digest-01-600.png',
    title: 'Luminary Planner',
    subtitle: 'user-generated name'
  }}
/>

<Story
  name="Athlete"
  args={{
    name: 'luminary-athlete',
    qty: 2,
    price: 35,
    logo: 'https://blog.luminaryhandbook.com/athlete-mockup_digest-01-600.png',
    title: 'Luminary Athlete',
    subtitle: 'user-generated name'
  }}
/>

<Story
  name="Journal"
  args={{
    name: 'luminary-journal',
    qty: 3,
    price: 35,
    logo: 'https://blog.luminaryhandbook.com/Journal-mockup_digest-03-600.png',
    title: 'Luminary Journal',
    subtitle: 'user-generated name'
  }}
/>

<Story
  name="Muse"
  args={{
    name: 'luminary-muse',
    qty: 4,
    price: 28,
    logo: 'https://blog.luminaryhandbook.com/muse-300.png',
    title: 'Luminary Muse',
    subtitle: 'user-generated name'
  }}
/>

<Story
  name="Notebook"
  args={{
    name: 'luminary-notebook',
    qty: 5,
    price: 24,
    logo: 'https://blog.luminaryhandbook.com/Notebook-mockup_digest-03-600.png',
    title: 'Luminary Notebook',
    subtitle: 'user-generated name'
  }}
/>

