<script>
  import SuggestionBox from '../components/Form/SuggestionBox.svelte';
  import FeedbackForm from '../components/Form/FeedbackForm.svelte';
  import Modal from '../components/Form/Modal.svelte';
  import FormModal from '../components/Form/FormModal.svelte';

  let showModal = false;

  const handleToggleModal = () => {
    showModal = !showModal;
  };
</script>

<SuggestionBox />
<FeedbackForm />

<!-- TESTING THE FORM MODAL -->
<div class="center">
  <button on:click={() => handleToggleModal()}>Test Form Modal</button>
</div>

<Modal open={showModal} on:close={() => handleToggleModal()} alignment="center" overlay={false}>
  <svelte:fragment slot="modal-body">
    <FormModal
      title="The Trainer"
      description="Register to receive a notification when this item comes back in stock."
    />
  </svelte:fragment>
</Modal>

<style scoped>
  .center {
    padding: 1rem;
    display: grid;
    place-items: center;
  }
</style>
