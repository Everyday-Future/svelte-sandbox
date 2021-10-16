<script>
  export let modalId = '';
  export let title = '';
  export let description = '';
  export let buttonText = 'Notify me when available';
</script>

<h2>{title}</h2>
<p>{description}</p>

<form action="" id={modalId}>
  <div class="field">
    <label for={`${modalId}-input`}>Email</label>
    <input class="emailField" type="email" placeholder="Email..." id={`${modalId}-input`} />
  </div>
  <button class="submitButton">{buttonText}</button>
</form>

<style scoped>
  h2 {
    font-weight: bold;
    color: #6d7a83;
  }

  p {
    color: hsl(0, 0%, 50%);
  }

  h2,
  p {
    text-align: left;
    align-self: flex-start;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }

  label {
    align-self: flex-start;
    color: hsl(0, 0%, 50%);
  }

  label::after {
    content: '*';
    color: hsl(0, 100%, 80%);
  }

  .field {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .emailField {
    border-radius: 2rem;
    border: 1px solid hsl(0, 0%, 70%);
    width: 100%;
    padding: 1rem;
  }
  .emailField::placeholder {
    color: hsl(0, 0%, 80%);
  }

  .submitButton {
    border: none;
    background-color: #d4695d;
    color: white;
    border-radius: 2rem;
    padding: 1rem 3rem;
    width: 100%;
    cursor: pointer;
  }
</style>
