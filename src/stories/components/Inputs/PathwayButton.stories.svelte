<!-- PathwayButton.stories.svelte -->

<script>
    import {Meta, Template, Story} from "@storybook/addon-svelte-csf";

    import PathwayButton from "../../../components/Inputs/PathwayButton.svelte";
</script>

<Meta
  title="components/Inputs/PathwayButton"
  component={PathwayButton}
  argTypes={{
    isOpen: { control: "boolean" },
    pathwayOptions: { control: "data"} }
  }}
/>

<Template let:args>
  <div style="margin: 30px">
    <PathwayButton {...args}/>
  </div>
</Template>

<Story
  name="Default"
  args="{{
      isOpen: false,
      pathwayOptions: {
        'running': {'value': 'running', 'title': 'Running', 'logo': 'cardio-health-running.svg','description': 'Running'},
        'gym': {'value': 'gym', 'title': 'Gym', 'logo': 'health-fitness-strength-barbell.svg', 'description': 'Gym'},
        'weightlifting': {'value': 'weightlifting', 'title': 'Weightlifting', 'logo': 'weightlifting.svg', 'description': 'Weightlifting'},
        'running2': {'value': 'running2', 'title': 'Running 2', 'logo': 'cardio-health-running.svg', 'description': 'Running'},
        'gym2': {'value': 'gym2', 'title': 'Gym 2', 'logo': 'health-fitness-strength-barbell.svg', 'description': 'Gym'},
        'weightlifting2': {'value': 'weightlifting2', 'title': 'Weightlifting 2', 'logo': 'weightlifting.svg', 'description': 'Weightlifting'}
    }
  }}"
/>

<Story
  name="Default 5 Options"
  args={{
      isOpen: true,
      pathwayOptions: {
        'running': {'value': 'running', 'title': 'Running', 'logo': 'cardio-health-running.svg','description': 'Running'},
        'gym': {'value': 'gym', 'title': 'Gym', 'logo': 'health-fitness-strength-barbell.svg', 'description': 'Gym'},
        'weightlifting': {'value': 'weightlifting', 'title': 'Weightlifting', 'logo': 'weightlifting.svg', 'description': 'Weightlifting'},
        'running2': {'value': 'running2', 'title': 'Running 2', 'logo': 'cardio-health-running.svg', 'description': 'Running'},
        'gym2': {'value': 'gym2', 'title': 'Gym 2', 'logo': 'health-fitness-strength-barbell.svg', 'description': 'Gym'},
    },
  }}
/>

<Story
  name="Default 4 Options"
  args={{
      isOpen: true,
      pathwayOptions: {
        'running': {'value': 'running', 'title': 'Running', 'logo': 'cardio-health-running.svg','description': 'Running'},
        'gym': {'value': 'gym', 'title': 'Gym', 'logo': 'health-fitness-strength-barbell.svg', 'description': 'Gym'},
        'weightlifting': {'value': 'weightlifting', 'title': 'Weightlifting', 'logo': 'weightlifting.svg', 'description': 'Weightlifting'},
        'running2': {'value': 'running2', 'title': 'Running 2', 'logo': 'cardio-health-running.svg', 'description': 'Running'},
    },
  }}
/>
