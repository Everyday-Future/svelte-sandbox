<!-- OverMenu.stories.svelte -->

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import OverMenu from "../../components/Customizer/OverMenu.svelte";
</script>

<Meta
  title="Customizer/OverMenu"
  component={OverMenu}
  argTypes={{
    productName: { control: "text" },
    isOpen: { control: "boolean" },
    menuChoices: { control: "object" }
  }}
/>

<Template let:args>
  <OverMenu  {...args} />
</Template>

<Story
  name="Square Cell"
  args={{
    isOpen: true,
    menuChoices: {
        "Exercise": [
            {'title': 'Running', 'icon': 'bike-health-fitness.svg', 'difficulty': 1, 'completionTime': 3},
            {'title': 'Mobility', 'icon': 'cardio-health-running.svg', 'difficulty': 2}],
        "Sleep": [
            {'title': 'Water+Sleep Tracker', 'icon': 'health-hydrate-water-filled.svg', 'difficulty': 2, 'completion_time': 10},
            {'title': 'Water+Sleep Tracker', 'icon': 'health-hydrate-water-filled.svg', 'completion_time': 10},
            {'title': 'Water+Sleep+Notes', 'icon': 'sleep-rest-recover-filled.svg'}]
    }
  }}
/>

<Story
  name="Tall Cell"
  args={{
    isOpen: true,
    menuChoices: {
        "Exercise": [
            {'title': 'Running', 'icon': 'bike-health-fitness.svg', 'difficulty': 1, 'completionTime': 3},
            {'title': 'Mobility', 'icon': 'cardio-health-running.svg', 'difficulty': 2}],
        "Sleep": [
            {'title': 'Water+Sleep Tracker', 'icon': 'health-hydrate-water-filled.svg', 'difficulty': 2, 'completion_time': 10},
            {'title': 'Water+Sleep Tracker', 'icon': 'health-hydrate-water-filled.svg', 'completion_time': 10},
            {'title': 'Water+Sleep+Notes', 'icon': 'sleep-rest-recover-filled.svg'}]
    }
  }}
/>

<Story
  name="Wide Cell"
  args={{
    isOpen: true,
    menuChoices: {
        "Exercise": [
            {'title': 'Running', 'icon': 'bike-health-fitness.svg', 'difficulty': 1, 'completionTime': 3},
            {'title': 'Mobility', 'icon': 'cardio-health-running.svg', 'difficulty': 2}],
        "Sleep": [
            {'title': 'Water+Sleep Tracker', 'icon': 'health-hydrate-water-filled.svg', 'difficulty': 2, 'completion_time': 10},
            {'title': 'Water+Sleep Tracker', 'icon': 'health-hydrate-water-filled.svg', 'completion_time': 10},
            {'title': 'Water+Sleep+Notes', 'icon': 'sleep-rest-recover-filled.svg'}]
    }
  }}
/>
