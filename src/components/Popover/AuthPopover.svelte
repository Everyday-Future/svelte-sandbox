<script>
  export let state = 'register';

  const registerId = 'register';
  const loginId = 'login';

  const setState = (newState) => {
    state = newState;
  };
</script>

<div class="wrapper">
  {#if state === 'register'}
    <h3>Register</h3>
    <form action="" id={registerId}>
      <div class="field">
        <label for={`${registerId}-input-email`}>Email</label>
        <input
          class="inputField"
          type="email"
          placeholder="Email..."
          id={`${registerId}-input-email`}
        />
      </div>
      <div class="field">
        <label for={`${registerId}-input-password`}>Password</label>
        <input
          class="inputField"
          type="password"
          placeholder="Password..."
          id={`${registerId}-input-password`}
        />
      </div>
      <div class="field">
        <label for={`${registerId}-input-password-confirm`}>Confirm Password</label>
        <input
          class="inputField"
          type="password"
          placeholder="Confirm Password"
          id={`${registerId}-input-password-confirm`}
        />
      </div>
      <div class="form-lower">
        <div>
          <p>
            Returning User? <span
              ><a href="#" on:click|preventDefault={() => setState('signin')}>Sign In</a></span
            >
          </p>
        </div>
        <button class="submitButton">Register</button>
      </div>
    </form>
  {:else}
    <h3>Sign In</h3>
    <form action="" id={loginId}>
      <div class="field">
        <label for={`${loginId}-input-email`}>Email</label>
        <input
          class="inputField"
          type="email"
          placeholder="Email..."
          id={`${loginId}-input-email`}
        />
      </div>
      <div class="field">
        <label for={`${loginId}-input-password`}>Password</label>
        <input
          class="inputField"
          type="password"
          placeholder="Password..."
          id={`${loginId}-input-password`}
        />
      </div>
      <br />
      <div class="form-lower">
        <div>
          <p>
            New User? <span
              ><a href="#" on:click|preventDefault={() => setState('register')}>Create Account</a
              ></span
            >
          </p>
          <a href="#">Forgot Password</a>
        </div>
        <button class="submitButton">Sign In</button>
      </div>
    </form>
  {/if}
</div>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }

  .form-lower {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

  .inputField {
    border-radius: 2rem;
    border: 1px solid hsl(0, 0%, 70%);
    width: 100%;
    padding: 0.75rem 1rem;
  }
  .inputField::placeholder {
    color: hsl(0, 0%, 80%);
  }

  .submitButton {
    border: none;
    background-color: #d4695d;
    color: white;
    border-radius: 2rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    align-self: flex-end;
  }
</style>
