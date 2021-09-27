<script>

    import AboutBanner from "../components/Banners/AboutBanner.svelte";
    import InfoBlock from "../components/InfoBlock.svelte";
    import Image from "../components/Image/Image.svelte";

</script>

<div style="position: relative">
  <AboutBanner/>
</div>


<div class="container my-5">
  <InfoBlock
    isReversed={true}
    heading="How it began..."
    subheading="A simple approach"
    body='At Luminary Handbook we are passionate about personal development. Discouraged with the
            "One-size-fits-all" approach that many personal development programs prescribe, we set
            out to create something new. A customizable book that delivers the science-based information
            that is relevant to your unique experience in life. Right when you need to hear it.'
  >
    <Image src='https://blog.luminaryhandbook.com/AboutUs-big_dreams-500.png' alt="big dreams"/>
  </InfoBlock>
</div>

<div class="container-fluid d-none d-md-block p-0" style="position: relative; min-height: 200px; background-color: var(--lightblue)">
  <img class="img-fluid" style="width: 100%; margin: auto" src="http://blog.luminaryhandbook.com/AboutUs-bulbs.svg">
  <div class="row position-absolute about-bulb" style="position: absolute">
    <div class="col-sm-5 mx-auto text-center">
      <h3 style="color: var(--white)">Our little big idea.</h3>
      <p class="text-white my-2 my-sm-3" style="font-size: max(1.5vw, 0.6rem); color: var(--white); max-width: 40vw; margin: auto">
        Part life-coach, part daily planner, part journal and part personal development workbook.
        Our custom printed handbooks are designed to introduce you to new ideas every week.
        Ideas that challenge and encourage you to get in touch with your emotions, form positive habits,
        combat negative self-talk and overcome obstacles.
      </p>
    </div>
  </div>
</div>


<div class="container my-5">
  <InfoBlock
    isReversed={true}
    heading="building with heart"
    subheading="Our little team"
    body="The Luminary Handbook team is a tiny group of 4 friends who love to make sincere and useful things.
            With the support of our advisors and specialists, our small team is tackling big problems.
            Together, we work to create an ever-evolving product that can help people along their
            paths of personal development."
  >
    <Image src='https://blog.luminaryhandbook.com/AboutUs-growth-500.png' alt="Bill Murray"/>
  </InfoBlock>
</div>


<div class="container my-5">
  <InfoBlock
    heading="growing with the science"
    subheading="Endlessly evolving products"
    body="The science of nutrition, physiology, social behavior, and willpower is advancing rapidly.
            We try to stay informed of the best and most recent studies and find relatable and digestible
            ways to pass that information to you.<br><br>
            We look past the headlines to find valid, actionable data. Then we try to find the best combinations
            of strategies for you and your goals."
  >
    <Image src='https://blog.luminaryhandbook.com/AboutUs-evolving-500.png' alt="Bill Murray"/>
  </InfoBlock>
</div>


<div class="container my-5">
  <InfoBlock
    isReversed={true}
    heading="sharing the science"
    subheading="our resources are your resources"
    body='All of the research that we use to inform the content of the books is made available on the website,
            in our <a href="/works-cited"><u>Works Cited</u></a> page. We
            believe that everyone should have access to this information available in one
            place regardless of whether or not they purchase a book.'
  >
    <Image src='https://blog.luminaryhandbook.com/AboutUs-resources-500.png' alt="Bill Murray"/>
  </InfoBlock>
</div>


<div class="container-fluid p-0" style="background-color: var(--darkgray)">
    <div class="mx-auto my-4" style="max-width: 600px">
      <p class="d-none d-md-block text-white my-2 my-md-3" style="font-size: 0.9rem; color: var(--white)">
        Everyone faces challenges in life. Many of us have goals that may seem insurmountable, but we believe that you
        can accomplish anything if you take it slow. Luminary Handbook wants to help you on your journey!
      </p>
  </div>
</div>


<style>
  .about-bulb {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    top: 70px;
  }

  @media screen and (max-width: 1400px) {
    .about-bulb {
      top: 40px;
    }
  }

  @media screen and (max-width: 920px) {
    .about-bulb {
      top: 20px;
    }
  }

  @media screen and (max-width: 576px) {
    .about-bulb {
      top: 10px;
    }
  }


</style>

