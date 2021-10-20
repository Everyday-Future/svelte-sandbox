<script>
  export let image_src;
</script>

<div class="banner-header">
  <div class="banner-header__wrappen">
    <h3>Subheading 1</h3>
    <h2>Heading 1 Placeholder</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
      tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
      nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
    </p>
    <div class="banner-header__wrappen__btn">
      <button class="banner-header__wrappen__btn__red">Button 2</button>
      <button class="banner-header__wrappen__btn__learn-more">Learn More ></button>
    </div>
  </div>
  <div class="banner-header__image">
    <img src={image_src} alt="" />
  </div>
  <div class="banner-header__mobile-btn">
    <button class="banner-header__mobile-btn__first" />
    <button class="banner-header__mobile-btn__second" />
  </div>
</div>

<style>
  .banner-header {
    width: 100%;
    height: 23rem;
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    background-color: #6d7a83;
  }
  .banner-header__wrappen {
    max-width: 520px;
    width: 40%;
    height: 100%;
    color: white;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }
  .banner-header__wrappen h2 {
    color: white;
  }
  .banner-header__wrappen h3 {
    display: none;

    color: #b1bdc3;
    font-family: 'Permanent Marker', cursive;
    text-transform: uppercase;
  }
  .banner-header__wrappen p {
    width: 74%;
    color: white;
    font-weight: 300;
  }
  .banner-header__wrappen__btn {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  .banner-header__wrappen__btn button {
    width: 130px;
    height: 40px;
    display: block;
    color: white;
    line-height: 0;
    border: none;
    cursor: pointer;
  }
  .banner-header__wrappen__btn__learn-more {
    background-color: transparent;
    text-decoration: underline;
    font-weight: 300;
  }
  .banner-header__wrappen__btn__red {
    border-radius: 40px;
    background-color: #d65a51;
  }
  .banner-header__image {
    max-width: 850px;
    width: 53%;
    height: 100%;
    overflow: hidden;
  }
  .banner-header__image img {
    width: 1200px;
    height: auto;
    padding: 0;
    margin: -15rem 0 0 0;
  }
  .banner-header__mobile-btn {
    display: none;
    position: absolute;
    flex-direction: row;
    padding: 0 0 1rem 0;
    gap: 0.5rem;
  }
  .banner-header__mobile-btn button {
    width: 10px;
    height: 10px;
    display: block;
    border-radius: 50%;
    line-height: 0;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }
  .banner-header__mobile-btn__first {
    background-color: #d65a51;
    outline: 1px solid #d65a51;
    border: none;
  }

  .banner-header__mobile-btn__second {
    background-color: transparent;
    outline: 1px solid #d65a51;
    border: none;
  }

  @media screen and (max-width: 1200px) {
    .banner-header__wrappen p {
      width: 90%;
    }
    .banner-header__image img {
      margin: -15rem 0 0 -6rem;
    }
  }
  @media screen and (max-width: 992px) {
    .banner-header__wrappen {
      gap: 1.5rem;
    }

    .banner-header__image img {
      width: 1000px;
      margin: -13rem 0 0 -6rem;
    }
  }
  @media screen and (max-width: 768px) {
    .banner-header {
      flex-direction: column;
      height: 100vh;
    }

    .banner-header__wrappen {
      width: 100%;
      margin: 3rem 0 0 4rem;
      gap: 0.5rem;
    }
    .banner-header__wrappen h2 {
      font-weight: 500;
    }
    .banner-header__wrappen h3 {
      display: inline;
    }
    .banner-header__wrappen p {
      width: 80%;
      margin-top: 1rem;
      line-height: 1.3rem;
    }
    .banner-header__image {
      width: 100%;
    }
    .banner-header__image img {
      width: 800px;
      transform: rotate(8deg);
      margin: -8rem 0 0 1rem;
    }
    .banner-header__wrappen__btn {
      margin-top: 2rem;
      gap: 3rem;
    }
    .banner-header__wrappen__btn__red {
      width: 100px !important;
      height: 35px !important;
    }

    .banner-header__mobile-btn {
      display: flex;
      bottom: 0rem;
    }
  }

  @media screen and (max-width: 576px) {
    .banner-header {
      flex-direction: column;
      height: 100vh;
    }
    .banner-header__wrappen {
      margin: 6rem 0 0 4rem;
    }
    .banner-header__wrappen p {
      width: 90%;
    }

    .banner-header__image img {
      margin: -9rem 0 0 -6rem;
    }
  }
</style>
