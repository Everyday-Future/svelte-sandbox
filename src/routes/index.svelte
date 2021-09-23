<script>
    import HomeBanner from "../components/Banners/HomeBanner.svelte";
    import InfoBlock from "../components/InfoBlock.svelte";
    import Image from "../components/Image/Image.svelte";
</script>

<HomeBanner/>

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
    <Image src='https://www.fillmurray.com/640/360' alt="Bill Murray"/>
  </InfoBlock>
</div>

<div class="container my-5">
  <InfoBlock
    heading="Info Block 2"
    subheading="This is the second info block"
    body="Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense!
  In a comic, you know how you can tell who the arch-villain's going to be?
  He's the exact opposite of the hero. And most times they're friends,
  like you and me! I should've known way back when... You know why, David?
  Because of the kids. They called me Mr Glass."
    isReversed={true}
  >
    <Image src='https://www.fillmurray.com/360/840' alt="Bill Murray"/>
  </InfoBlock>
</div>

<div class="container my-5">
  <InfoBlock
    heading="Info Block 3"
    subheading="This is the third info block"
    body="Now that there is the Tec-9, a crappy spray gun from South Miami.
    This gun is advertised as the most popular gun in American crime.
    Do you believe that shit? It actually says that in the little book that comes with it:
    the most popular gun in American crime. Like they're actually proud of that shit."
  >
    <Image src='https://www.fillmurray.com/640/360' alt="Bill Murray"/>
  </InfoBlock>
</div>

<style>

</style>