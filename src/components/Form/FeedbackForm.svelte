<script>
</script>

<section>
  <div class="sectionContainer">
    <div class="formWrapper">
      <form method="post" action="#">
        <textarea />
        <div class="emailSubmit">
          <input class="emailSubmit__input" type="email" placeholder="Email.." />
          <button class="emailSubmit__button">Submit</button>
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

  form {
    border-radius: 1rem;
    padding: 1rem;
    background-color: hsl(204, 14%, 93%);
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
    border-radius: 1rem;
  }

  .emailSubmit {
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    position: relative;
  }

  .emailSubmit input,
  .emailSubmit button {
    border: none;
    outline: none;
    box-sizing: border-box;
  }

  .emailSubmit__input {
    display: block;
    width: 100%;
    height: 40px;
    border-radius: 40px;
    text-align: left;
    padding: 0 1rem;
    margin: 0;
    background-color: white;
    color: #617079;
    font-size: 15px;
  }

  .emailSubmit__input::placeholder {
    color: hsl(0, 0%, 80%);
  }

  .emailSubmit__button {
    right: 0;
    display: block;
    width: 90px;
    height: 30px;
    margin: 0 0.5rem 0 0;
    border-radius: 40px;
    background-color: #d65a51;
    color: white;
    line-height: 0;
    position: absolute;
    font-size: 0.8rem;
  }

  .emailSubmit__button:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    form > textarea {
      height: 10rem;
    }

    .emailSubmit {
      align-self: flex-end;
      width: 50%;
    }
  }
</style>
