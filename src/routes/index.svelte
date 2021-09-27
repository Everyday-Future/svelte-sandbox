<script>
    import HomeBanner from "../components/Banners/HomeBanner.svelte";
    import InfoBlock from "../components/InfoBlock.svelte";
    import Carousel from "../components/Carousel/Carousel.svelte";
    import TrackerCard from "../components/Cards/TrackerCard.svelte";
    import Image from "../components/Image/Image.svelte";
    import ProductComparison from "../components/ProductComparison/ProductComparison.svelte";

    const trackerCarousel = {
        autoplay: true,
        arrows: false,
        pauseOnFocus: true,
        autoplayProgressVisible: true,
        dots: true,
        autoplayDuration: 3000,
        duration: 500,
        initialPageIndex: 0,
        currentPageIndex: 0,
    }


</script>

<HomeBanner/>

<div class="container my-5">
  <InfoBlock
    heading="fill the gaps in your apps"
    subheading="Custom books to fit your lifestyle"
    body="We offer a variety of tools to -
          <ul>
            <li>Get organized</li>
            <li>Set and achieve goals</li>
            <li>See the big picture</li>
            <li>Journal your journey</li>
            <li>Play with your creativity</li>
          </ul>
        Our books are custom made and tailored to your preferences."
    btnText="Shop Handbooks"
    btnLink="/shop"
  >
    <Image src='https://blog.luminaryhandbook.com/allbooks-stacked-new-1000.jpg' alt="custom books"/>
  </InfoBlock>
</div>

<div class="container my-5">
  <InfoBlock
    heading="find your passion"
    subheading="Great for"
    body="
    <ul>
    <li>Creatives, engineers, designers, artists</li>
    <li>Planners, Writers, Deep thinkers</li>
    <li>Athletes, hobbyists, active lifestyles</li>
    <li>Nutrition, diets, sleep & water tracking</li>
    </ul>"
    isReversed={true}
  >
    <Image src='https://blog.luminaryhandbook.com/morning_coffee-1600.jpg' alt="sunny journal"/>
  </InfoBlock>
</div>

<div class="container my-5">
  <InfoBlock
    heading="DESIGNED WITH YOU IN MIND."
    subheading="Set yourself up for success"
    body="Track progress. Celebrate your wins!
    An ever growing inventory of trackers to choose from when you customize your book."
    btnText="Shop Handbooks"
    btnLink="/shop"
  >

    <div style="width: 320px">
        <TrackerCard>
      <Carousel {...trackerCarousel}>
          <Image src='https://blog.luminaryhandbook.com/Organization_qtr.svg' alt="todo list"/>
          <Image src='https://blog.luminaryhandbook.com/Exercise_qtr_gym.svg' alt="exercise tracker"/>
          <Image src='https://blog.luminaryhandbook.com/DIYdots_qtr.svg' alt="dot grid"/>
          <Image src='https://blog.luminaryhandbook.com/grateful_today_1x2.svg' alt="gratitude prompt"/>
          <Image src='https://blog.luminaryhandbook.com/daily_metrics_1x2.svg' alt="daily metrics"/>
      </Carousel>
        </TrackerCard>
    </div>
  </InfoBlock>
</div>


<ProductComparison />


<style>

</style>