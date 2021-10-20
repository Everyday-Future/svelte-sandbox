<script>
  import SuggestionBox from '../components/Form/SuggestionBox.svelte';
  import FeedbackForm from '../components/Form/FeedbackForm.svelte';
  import Modal from '../components/Modal/Modal.svelte';
  import FormModal from '../components/Modal/FormModal.svelte';
  import InfoModal from '../components/Modal/InfoModal.svelte';
  import Popover from '../components/Popover/Popover.svelte';
  import AccountPopover from '../components/Popover/AccountPopover.svelte';
  import NeverLoseLayout from '../components/Popover/NeverLoseLayout.svelte';

  let showModal = false;
  let showInfoModal = false;

  const handleToggleModal = () => {
    showModal = !showModal;
  };

  const handleToggleInfoModal = () => {
    showInfoModal = !showInfoModal;
  };
</script>

<div class="link-wrapper">
  <Popover
    arrowColor="#fff"
    action="hover"
    placement="bottom-end"
    overlayColor=""
    padding="0rem"
    closeButton={false}
  >
    <p class="sign-in-link" slot="target">Account Popover Test</p>
    <div slot="content" class="content">
      <AccountPopover username="extralongemailname!" />
    </div>
  </Popover>
  <Popover arrowColor="#fff" action="hover" placement="bottom-end" overlayColor="">
    <p class="sign-in-link" slot="target">Never Lose Layout</p>
    <div slot="content" class="content">
      <NeverLoseLayout />
    </div>
  </Popover>
</div>

<SuggestionBox />
<FeedbackForm />

<!-- TESTING THE FORM MODAL -->
<div class="center">
  <button on:click={() => handleToggleModal()}>Test Form Modal</button>
  <button on:click={() => handleToggleInfoModal()}>Test Info Modal</button>
</div>

<Modal open={showModal} on:close={() => handleToggleModal()} alignment="center" overlay={false}>
  <svelte:fragment slot="modal-body">
    <FormModal
      title="The Trainer"
      description="Register to receive a notification when this item comes back in stock."
    />
  </svelte:fragment>
</Modal>

<Modal
  open={showInfoModal}
  on:close={() => handleToggleInfoModal()}
  alignment="center"
  overlay={true}
>
  <svelte:fragment slot="modal-body">
    <InfoModal />
  </svelte:fragment>
</Modal>

<style scoped>
  .center {
    padding: 1rem;
    display: grid;
    place-items: center;
    gap: 1rem;
  }

  .link-wrapper {
    display: grid;
    place-items: center;
  }
  .sign-in-link {
    color: red;
    text-align: center;
    width: 100%;
    padding: 1rem;
  }
</style>
