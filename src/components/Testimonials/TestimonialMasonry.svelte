<script>
  export let totalReviews;
  import Star from '../Inputs/StarRating/StarRatingStar.svelte';
  import Carousel from './Carousel.svelte';
  import Reviews from './ReviewBlock.svelte';
  import Response from './ResponseBlock.svelte';

  let formClosed = false;
  const closeForm = () => {
    formClosed = true;
  };

  const items = [
    {
      userReview: {
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti nam reprehenderit voluptatem eaque at excepturi amet aspernatur explicabo. Necessitatibus culpa sapiente reprehenderit atque in tempore nihil natus sint ea placeat eveniet id minus molestiae, ullam, quis rerum nemo. Fugit aliquid sapiente maxime, enim sunt distinctio dignissimos ipsum velit corrupti.',
        name: 'Name O.',
        time: '2 months ago',
        city: 'City, IN',
        imgs: ['/notebook-test.png', '/notebook-test.png'],
      },
      response:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti nam reprehenderit voluptatem eaque at excepturi amet aspernatur explicabo. Necessitatibus culpa sapiente reprehenderit atque in tempore nihil natus sint ea placeat eveniet id minus molestiae, ullam, quis rerum nemo. Fugit aliquid sapiente maxime, enim sunt distinctio dignissimos ipsum velit corrupti. ',
    },
    {
      userReview: {
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti nam reprehenderit voluptatem eaque at excepturi amet aspernatur explicabo. Necessitatibus culpa sapiente reprehenderit atque in tempore nihil natus sint ea placeat eveniet id minus molestiae, ullam, quis rerum nemo. Fugit aliquid sapiente maxime, enim sunt distinctio dignissimos ipsum velit corrupti.',
        name: 'Name O.',
        time: '2 months ago',
        city: 'City, IN',
        imgs: ['', ''],
      },
      response: '',
    },
    {
      userReview: {
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti nam reprehenderit voluptatem eaque at excepturi amet aspernatur explicabo. Necessitatibus culpa sapiente reprehenderit atque in tempore nihil natus sint ea placeat eveniet id minus molestiae, ullam, quis rerum nemo. Fugit aliquid sapiente maxime, enim sunt distinctio dignissimos ipsum velit corrupti.',
        name: 'Name O.',
        time: '2 months ago',
        city: 'City, IN',
        imgs: ['', ''],
      },
      response:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti nam reprehenderit voluptatem eaque at excepturi amet aspernatur explicabo. Necessitatibus culpa sapiente reprehenderit atque in tempore nihil natus sint ea placeat eveniet id minus molestiae, ullam, quis rerum nemo. Fugit aliquid sapiente maxime, enim sunt distinctio dignissimos ipsum velit corrupti. ',
    },
    {
      userReview: {
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti nam reprehenderit voluptatem eaque at excepturi amet aspernatur explicabo. Necessitatibus culpa sapiente reprehenderit atque in tempore nihil natus sint ea placeat eveniet id minus molestiae, ullam, quis rerum nemo. Fugit aliquid sapiente maxime, enim sunt distinctio dignissimos ipsum velit corrupti.',
        name: 'Name O.',
        time: '2 months ago',
        city: 'City, IN',
        imgs: ['', ''],
      },
      response: '',
    },
    {
      userReview: {
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti nam reprehenderit voluptatem eaque at excepturi amet aspernatur explicabo. Necessitatibus culpa sapiente reprehenderit atque in tempore nihil natus sint ea placeat eveniet id minus molestiae, ullam, quis rerum nemo. Fugit aliquid sapiente maxime, enim sunt distinctio dignissimos ipsum velit corrupti.',
        name: 'Name O.',
        time: '2 months ago',
        city: 'City, IN',
        imgs: ['', ''],
      },
      response:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti nam reprehenderit voluptatem eaque at excepturi amet aspernatur explicabo. Necessitatibus culpa sapiente reprehenderit atque in tempore nihil natus sint ea placeat eveniet id minus molestiae, ullam, quis rerum nemo. Fugit aliquid sapiente maxime, enim sunt distinctio dignissimos ipsum velit corrupti. ',
    },
    {
      userReview: {
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti nam reprehenderit voluptatem eaque at excepturi amet aspernatur explicabo. Necessitatibus culpa sapiente reprehenderit atque in tempore nihil natus sint ea placeat eveniet id minus molestiae, ullam, quis rerum nemo. Fugit aliquid sapiente maxime, enim sunt distinctio dignissimos ipsum velit corrupti.',
        name: 'Name O.',
        time: '2 months ago',
        city: 'City, IN',
        imgs: ['', ''],
      },
      response: '',
    },
  ];
</script>

<div class="testimonial-masonry__section" style={formClosed ? 'display: none' : ''}>
  <div class="testimonial-masonry__section__header">
    <div class="testimonial-masonry__section__header__title">
      <h1>{totalReviews} Reviews</h1>
      <button on:click={() => closeForm()}
        ><span class="testimonial-masonry__section__header__title__btn-text">Close</span><span
          class="testimonial-masonry__section__header__title__close-icon"
        /></button
      >
    </div>
    <div class="testimonial-masonry__section__header__rate">
      <div class="testimonial-masonry__section__header__rate__stars">
        <Star /><Star /><Star /><Star /><Star />
      </div>
      <div class="testimonial-masonry__section__header__rate__text">
        <p>5.2</p>
        <div class="testimonial-masonry__section__header__rate__vl" />
        <a href="">Sign in to review</a>
      </div>
    </div>
    <div class="testimonial-masonry__section__header__vl" />
  </div>

  <div class="testimonial-masonry__section__desktop">
    <Carousel {items} />
  </div>
  <div class="testimonial-masonry__section__mobile">
    {#each items as item, i}
      {#if item.response.length}
        <div class="item">
          <Reviews
            review={item.userReview.review}
            name={item.userReview.name}
            type={item.userReview.type}
            city={item.userReview.city}
            imgs={item.userReview.imgs}
          />
          <Response response={item.response} />
        </div>
      {:else}
        <div class="item">
          <Reviews
            review={item.userReview.review}
            name={item.userReview.name}
            type={item.userReview.type}
            city={item.userReview.city}
            imgs={item.userReview.imgs}
          />
        </div>
      {/if}
    {/each}
  </div>

  <div class="testimonial-masonry__section__help">
    <p>Have a question? We're here to help.</p>
    <a href="">Send a message</a>
  </div>
</div>

<style>
  .testimonial-masonry__section {
    width: 95%;
    margin: 1rem auto;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
    position: relative;
  }
  .testimonial-masonry__section p {
    color: #6d7a83;
  }
  .testimonial-masonry__section__header__title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .testimonial-masonry__section__header__title h1 {
    color: #6d7a83;
  }
  .testimonial-masonry__section__header__title button {
    background-color: white;
    border: none;
    color: #6d7a83;
    margin-right: 2rem;
    cursor: pointer;
  }
  .testimonial-masonry__section__header__title__close-icon {
    position: absolute;
    top: 2.4rem;
    width: 22px;
    height: 22px;
    opacity: 0.3;
  }
  .testimonial-masonry__section__header__title__close-icon:hover {
    opacity: 1;
  }
  .testimonial-masonry__section__header__title__close-icon:before,
  .testimonial-masonry__section__header__title__close-icon:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 22px;
    width: 2px;
    background-color: #6d7a83;
  }
  .testimonial-masonry__section__header__title__close-icon:before {
    transform: rotate(45deg);
  }
  .testimonial-masonry__section__header__title__close-icon:after {
    transform: rotate(-45deg);
  }

  .testimonial-masonry__section__header__rate {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin: 1rem 0;
  }
  .testimonial-masonry__section__header__rate__text {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    text-align: center;
  }
  .testimonial-masonry__section__header__rate__vl {
    border-left: 3px solid #ebedee;
    height: 1rem;
  }
  .testimonial-masonry__section__header__vl {
    border-bottom: 3px solid #ebedee;
    width: 100%;
  }

  .testimonial-masonry__section__mobile {
    display: none;
  }
  .testimonial-masonry__section__help {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
  }

  @media screen and (max-width: 996px) {
    .testimonial-masonry__section__mobile {
      height: 35rem;
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
    .testimonial-masonry__section__desktop {
      display: none;
    }
    .testimonial-masonry__section__help {
      padding: 1rem 0 0 0;
    }
    .testimonial-masonry__section__header__title__btn-text {
      display: none;
    }
  }
  @media screen and (max-width: 776px) {
    .testimonial-masonry__section__mobile {
      height: 20rem;
    }
  }
  @media screen and (max-width: 576px) {
    .testimonial-masonry__section {
      width: 100%;
      padding: 0 1rem;
      margin: 1rem 0;
    }
    .testimonial-masonry__section__header {
      margin-top: 1rem;
    }
    .testimonial-masonry__section__header h1 {
      font-size: 1.5rem;
    }
    .testimonial-masonry__section__header__title__close-icon {
      top: 1.2rem;
    }
    .testimonial-masonry__section__help {
      gap: 0.5rem;
      padding: 1rem 0;
      justify-content: space-between;
    }
    .testimonial-masonry__section__help p {
      width: 50%;
    }
  }
</style>
