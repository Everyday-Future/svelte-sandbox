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
    heading="Info Block 1"
    subheading="This is the first info block"
    body="Normally, both your asses would be dead as fucking fried chicken,
  but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you,
  I wanna help you. But I can't give you this case, it don't belong to me.
  Besides, I've already been through too much shit this morning over this case to hand it over
  to your dumb ass."
  >
    <Image src='https://blog.luminaryhandbook.com/AboutUs-big_dreams-500.png' alt="Bill Murray"/>
  </InfoBlock>
</div>

<div class="container-fluid d-none d-md-block p-0" style="position: relative; min-height: 200px; background-color: var(--lightblue)">
  <img class="img-fluid" style="width: 100%; margin: auto" src="http://blog.luminaryhandbook.com/AboutUs-bulbs.svg">
  <div class="row position-absolute about-bulb" style="position: absolute">
    <div class="col-sm-5 mx-auto text-center">
      <h3 style="color: var(--white)">The big idea.</h3>
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
    heading="Info Block 1"
    subheading="This is the first info block"
    body="Normally, both your asses would be dead as fucking fried chicken,
  but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you,
  I wanna help you. But I can't give you this case, it don't belong to me.
  Besides, I've already been through too much shit this morning over this case to hand it over
  to your dumb ass."
  >
    <Image src='https://blog.luminaryhandbook.com/AboutUs-growth-500.png' alt="Bill Murray"/>
  </InfoBlock>
</div>


<div class="container my-5">
  <InfoBlock
    heading="Info Block 1"
    subheading="This is the first info block"
    body="Normally, both your asses would be dead as fucking fried chicken,
  but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you,
  I wanna help you. But I can't give you this case, it don't belong to me.
  Besides, I've already been through too much shit this morning over this case to hand it over
  to your dumb ass."
  >
    <Image src='https://blog.luminaryhandbook.com/AboutUs-evolving-500.png' alt="Bill Murray"/>
  </InfoBlock>
</div>


<div class="container my-5">
  <InfoBlock
    isReversed={true}
    heading="Info Block 1"
    subheading="This is the first info block"
    body="Normally, both your asses would be dead as fucking fried chicken,
  but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you,
  I wanna help you. But I can't give you this case, it don't belong to me.
  Besides, I've already been through too much shit this morning over this case to hand it over
  to your dumb ass."
  >
    <Image src='https://blog.luminaryhandbook.com/AboutUs-resources-500.png' alt="Bill Murray"/>
  </InfoBlock>
</div>


<div class="container-fluid about-featurette p-0">
  <div style="background-color: var(--darkgray)">
    <div class="col-md-5 mx-auto text-center my-4">
      <p class="d-none d-md-block text-white my-2 my-md-3" style="font-size: 0.9rem; color: var(--white)">
        Everyone faces challenges in life. Many of us have goals that may seem insurmountable, but we believe that you
        can accomplish anything if you take it slow. Luminary Handbook wants to help you on your journey!
      </p>
    </div>
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

