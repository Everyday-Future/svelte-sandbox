<script>
</script>

<section>
  <div class="sectionContainer">
    <div class="formWrapper">
      <div class="title">
        <h2 class="title__heading">Suggestion Box</h2>
        <p class="title__description">
          If you want something unique that's missing, we will consider making it.
        </p>
      </div>
      <form method="post" action="#">
        <textarea />
        <div class="emailSubmit">
          <input type="text" placeholder="Email address" />
          <input type="submit" />
        </div>
      </form>
    </div>
  </div>
</section>

<style scoped>
  section {
    background-color: hsl(200, 9%, 47%);
    padding: 5rem 0;
  }

  .formWrapper {
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .title__heading {
    color: hsl(0, 0%, 100%);
    text-align: center;
  }

  .title__description {
    color: hsl(0, 0%, 90%);
    text-align: center;
  }

  form {
    border-radius: 1rem;
    padding: 1rem;
    background-color: hsl(197, 13%, 73%);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  form > textarea {
    width: 100%;
    height: 15rem;
    border: none;
    resize: none;
    padding: 0.5rem;
  }

  .emailSubmit {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
  }

  .emailSubmit > input[type='text'] {
    border: none;
    border-radius: 2rem 0 0 2rem;
    outline: none;
    padding: 1rem;
    width: 100%;
  }

  .emailSubmit > input[type='text']::placeholder {
    color: hsl(0, 0%, 80%);
  }

  .emailSubmit > input[type='submit'] {
    border: none;
    background-color: hsl(6, 59%, 60%);
    color: white;
    border-radius: 0 2rem 2rem 0;
    padding: 1rem;
    cursor: pointer;
    width: 10rem;
  }

  @media (min-width: 768px) {
    form > textarea {
      height: 10rem;
    }

    .emailSubmit {
      align-self: flex-end;
      width: 50%;
    }

    .emailSubmit > input[type='text'] {
      padding: 0.5rem;
      border-radius: 1rem 0 0 1rem;
    }
    .emailSubmit > input[type='submit'] {
      padding: 0.5rem;
      border-radius: 0 1rem 1rem 0;
    }
  }
</style>
