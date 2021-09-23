<!-- StarRating.stories.svelte -->

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import StarRating from "../../components/Inputs/StarRating/StarRating.svelte";
</script>

<Meta
  title="components/StarRating"
  component={StarRating}
  argTypes={{
    rating: { control: "number", defaultValue: 4.0 }
  }}
/>

<Template let:args>
  <StarRating  {...args} />
</Template>

<Story
  name="Default"
  args={{
    isProduct: false,
  }}
/>
