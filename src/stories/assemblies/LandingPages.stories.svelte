<!-- LandingPages.stories.svelte -->

<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import JournalLandingPage from "../../routes/product/journal.svelte";
  import PlannerLandingPage from "../../routes/product/planner.svelte";
  import AthleteLandingPage from "../../routes/product/athlete.svelte";
  import NotebookLandingPage from "../../routes/product/notebook.svelte";
  import MuseLandingPage from "../../routes/product/muse.svelte";
</script>

<Meta
  title="Assemblies/Landing Pages"
  component={JournalLandingPage}
/>

<Story name="Journal">
  <JournalLandingPage />
</Story>

<Story name="Athlete">
  <AthleteLandingPage />
</Story>

<Story name="Planner">
  <PlannerLandingPage />
</Story>

<Story name="Notebook">
  <NotebookLandingPage />
</Story>

<Story name="Muse">
  <MuseLandingPage />
</Story>
