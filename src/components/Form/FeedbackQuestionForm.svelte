<script>
  import StarRatingStar from '../Inputs/StarRating/StarRatingStar.svelte';

  let clicked = false;
  const setState = (updateState) => {
    clicked = updateState;
  };

  let submitStatus = false;

  const handleOnSubmit = () => {
    submitStatus = true;
    clicked = false;
  };
</script>

<div class="feedback-form__section">
  {#if submitStatus}
    <div class="feedback-form__section__submit">
      <p><span>Thank you! 20% off</span> has beed added to your card.</p>
      <p class="feedback-form__section__submit__chechmark" />
    </div>
  {:else}
    <div class="feedback-form__section__header">
      <div class="feedback-form__section__header__body">
        <div>
          <p>Save 20%</p>
          <p class="feedback-form__section__header__body__feedback">Give us some feedback!</p>
        </div>
        <button
          class="feedback-form__section__header__body__btn"
          on:click={() => setState(!clicked)}
        >
          {#if clicked}
            <span class="feedback-form__section__header__body__btn__open" />
          {:else}
            <span class="feedback-form__section__header__body__btn__close" />
          {/if}
        </button>
      </div>
    </div>
  {/if}

  {#if clicked}
    <form class="feedback-form__section__form" on:submit={handleOnSubmit}>
      <div class="feedback-form__section__form__rate">
        <p>Rate your experience</p>
        <div>
          <StarRatingStar />
          <StarRatingStar />
          <StarRatingStar />
          <StarRatingStar />
          <StarRatingStar />
        </div>
      </div>
      <div class="feedback-form__section__form__qustion">
        <p>1. Question placeholder?</p>
        <select name="feedback-select1" id="feedback-select1">
          <option value="">Placeholder copy here</option>
          <option value="">Placeholder copy here</option>
          <option value="">Placeholder copy here</option>
          <option value="">Placeholder copy here</option>
        </select>
        <ul class="feedback-form__section__form__qustion__list">
          <li>
            <input type="radio" />
            <label for="">Placeholder copy here</label>
          </li>
          <li>
            <input type="radio" />
            <label for="">Placeholder copy here</label>
          </li>
          <li>
            <input type="radio" />
            <label for="">Placeholder copy here</label>
          </li>
          <li>
            <input type="radio" />
            <label for="">Placeholder copy here</label>
          </li>
        </ul>
      </div>
      <div class="feedback-form__section__form__qustion">
        <p>2. Question placeholder?</p>
        <select name="feedback-select2" id="feedback-select2">
          <option value="">Placeholder copy here</option>
          <option value="">Placeholder copy here</option>
          <option value="">Placeholder copy here</option>
          <option value="">Placeholder copy here</option>
        </select>
        <ul class="feedback-form__section__form__qustion__list">
          <li>
            <input type="radio" />
            <label for="">Placeholder copy here</label>
          </li>
          <li>
            <input type="radio" />
            <label for="">Placeholder copy here</label>
          </li>
          <li>
            <input type="radio" />
            <label for="">Placeholder copy here</label>
          </li>
          <li>
            <input type="radio" />
            <label for="">Placeholder copy here</label>
          </li>
        </ul>
      </div>
      <div class="feedback-form__section__form__textarea">
        <p>3. Question placeholder?</p>
        <textarea name="" id="" cols="50" rows="5" placeholder="I like..." />
      </div>
      <button class="feedback-form__section__form__btn">Submit</button>
    </form>
  {/if}
</div>

<style>
  .feedback-form__section__submit {
    margin: 0.5rem;
  }
  .feedback-form__section__submit p {
    width: 17rem;
    color: white;
    padding: 0 0.5rem;
    font-weight: 300;
  }
  .feedback-form__section__submit span {
    font-weight: 500;
  }
  .feedback-form__section__submit__chechmark {
    display: inline-block;
    position: absolute;
    right: 1.5rem;
    bottom: 1.5rem;
    transform: rotate(45deg);
    height: 30px;
    width: 2px !important;
    border-bottom: 3px solid white;
    border-right: 3px solid white;
  }

  .feedback-form__section {
    width: 30rem;
    display: flex;
    flex-direction: column;
    background-color: #d65a51;
    border-radius: 1rem 1rem 0 0;
    margin: 0 0 0 auto;
    padding: 0.5rem 1rem;
    position: sticky;
    bottom: 0;
    right: 0;
    z-index: 1000;
  }
  .feedback-form__section__header {
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .feedback-form__section__header__body {
    width: 100%;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
  }
  .feedback-form__section__header__body div {
    width: 100%;
    display: flex;
    position: relative;
    gap: 1rem;
    flex-direction: row;
  }
  .feedback-form__section__header__body p {
    color: white;
  }
  .feedback-form__section__header__body__feedback {
    font-weight: 300;
  }
  .feedback-form__section__header__body__btn {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background-color: white;
  }
  .feedback-form__section__header__body__btn__close {
    position: absolute;
    width: 0.7rem;
    height: 0.7rem;
    border-top: 2px solid #6d7a83;
    border-right: 2px solid #6d7a83;
    transform: translateY(-30%) translateX(-45%) rotate(-45deg);
    transition: all 0.2s linear;
  }
  .feedback-form__section__header__body__btn__open {
    position: absolute;
    width: 0.7rem;
    height: 0.7rem;
    border-top: 2px solid #6d7a83;
    border-right: 2px solid #6d7a83;
    margin: 0.5rem;
    margin-top: 0;
    margin-left: 1rem;
    transform: translateY(-60%) translateX(-195%) rotate(135deg);
    transition: all 0.3s linear;
  }
  .feedback-form__section__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 2rem 0 0 0;
    gap: 2rem;
  }
  .feedback-form__section__form p,
  label {
    color: white;
  }
  .feedback-form__section__form__rate {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
  }
  .feedback-form__section__form__rate p {
    font-weight: 300;
  }

  .feedback-form__section__form__qustion {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .feedback-form__section__form__qustion select {
    display: none;
    width: 65%;
    height: 2.5rem;
    padding: 0.5rem;
    color: white;
    background-color: #d65a51;
    border: none;
    outline: 2px solid white;
    border-radius: 1.5rem;
    font-size: 0.9rem;
    cursor: pointer;
    /*appearance: none;*/
  }
  /*.feedback-form__section__form__qustion select::after {
    position: absolute;
    content: "";
    width: 0.8em;
    height: 0.5em;
    background-color: white;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }*/
  .feedback-form__section__form__qustion__list {
    list-style-type: none;
    -moz-column-count: 2; /* Firefox */
    -webkit-column-count: 2; /* Safari and Chrome */
    column-count: 2;
    margin: 0;
    padding: 0;
  }
  .feedback-form__section__form__qustion__list li {
    padding: 0.5rem 0;
  }
  .feedback-form__section__form__qustion__list label {
    font-weight: 300;
    margin: 0 0 0 0.5rem;
  }

  input[type='radio'] {
    position: relative;
    height: 20px;
    width: 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    cursor: pointer;
  }

  input[type='radio']::before {
    content: '';
    position: absolute;
    top: 70%;
    left: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: #d65a51;
    border: 2px solid white;
  }

  input[type='radio']:checked::after {
    content: '';
    position: absolute;
    top: 70%;
    left: 50%;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: white;
    transform: translate(-50%, -50%);
    visibility: visible;
  }

  .feedback-form__section__form__textarea textarea {
    width: 100%;
    resize: none;
    border: none;
    border-radius: 1rem;
    margin: 1rem 0 0 0;
    padding: 1rem;
    color: #6d7a83;
  }
  .feedback-form__section__form__textarea textarea::placeholder {
    color: #b1bdc3;
  }
  .feedback-form__section__form__btn {
    width: 4rem;
    background-color: transparent;
    border: none;
    color: white;
    text-decoration: underline;
    text-align: right;
    cursor: pointer;
    margin: -1rem 0 0 auto;
    padding: 0;
  }

  @media screen and (max-width: 996px) {
    .feedback-form__section {
      width: 20rem;
      padding: 0.5rem;
    }
    .feedback-form__section__header__body {
      gap: 0.2rem;
    }
    .feedback-form__section__header__body div {
      gap: 0.5rem;
      padding-left: 0.3rem;
    }
    .feedback-form__section__form {
      height: 10rem;
      margin: 0;
      overflow: auto;
      padding-left: 0.3rem;
    }

    .feedback-form__section__form__rate p {
      width: 40%;
    }
    .feedback-form__section__form__qustion select {
      display: inline-block;
      /*display: grid;
      position: relative;*/
    }

    .feedback-form__section__form__qustion__list {
      display: none;
    }
  }

  @media screen and (max-width: 576px) {
    .feedback-form__section {
      width: 100%;
    }
  }
</style>
