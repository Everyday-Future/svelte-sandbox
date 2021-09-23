<script>
    import {Meta, Template, Story} from "@storybook/addon-svelte-csf";
    import Image from "../../../components/Image/Image.svelte";
    import Carousel from "../../../components/Carousel/Carousel.svelte";
    import Color from "../../../components/Carousel/CarouselColor.svelte";
</script>

<Meta
  title="components/Images/Carousel"
  component={Carousel}
  argTypes={{
    autoplay: { control: "boolean", required: false },
    arrows: { control: "boolean", required: false },
    pauseOnFocus: { control: "boolean", required: false },
    autoplayProgressVisible: { control: "boolean", required: false },
    dots: { control: "boolean", required: false },
    autoplayDuration: {control: 'number', required: false},
    duration: {control: 'number', required: false},
    initialPageIndex: {control: 'number', required: false},
    currentPageIndex: {control: 'number', required: false},
    onPageChange: { action: "pageChange" },
  }}
/>

<Template let:args id="Simple Colors">
  <div style="padding: 20px; max-width: 800px;">
    <Carousel {...args} on:pageChange={args.onPageChange}>
      <Color color="#85d78b" text="#85d78b"/>
      <Color color="#71d077" text="#71d077"/>
      <Color color="#5dca64" text="#5dca64"/>
      <Color color="#49c351" text="#49c351"/>
      <Color color="#35bd3e" text="#35bd3e"/>
    </Carousel>
  </div>
</Template>

<Template let:args id="Simple Images">
  <div style="padding: 20px; max-width: 800px;">
    <Carousel {...args} on:pageChange={args.onPageChange}>
      <Image src="https://www.fillmurray.com/640/360" alt="Bill Murray"
             caption="Bill Murray 0" captionColor="#fff"/>
      <Image src="https://www.fillmurray.com/640/360" alt="Bill Murray"
             caption="Bill Murray 1" captionColor="#fff"/>
      <Image src="https://www.fillmurray.com/640/360" alt="Bill Murray"
             caption="Bill Murray 2" captionColor="#fff"/>
      <Image src="https://www.fillmurray.com/640/360" alt="Bill Murray"
             caption="Bill Murray 3" captionColor="#fff"/>
      <Image src="https://www.fillmurray.com/640/360" alt="Bill Murray"
             caption="Bill Murray 4" captionColor="#fff"/>
    </Carousel>
  </div>
</Template>

<Story
  name="Simple Colors" template="Simple Colors"
  args={{
    autoplay: false,
    arrows: true,
    dots: true,
  }}
/>

<Story
  name="Auto-Advance" template="Simple Images"
  args={{
    autoplay: true,
    arrows: true,
    pauseOnFocus: true,
    autoplayProgressVisible: false,
    dots: true,
    autoplayDuration: 3000,
    duration: 500,
    initialPageIndex: 0,
    currentPageIndex: 0,
  }}
/>

<Story
  name="Auto-Advance w Progress" template="Simple Images"
  args={{
    autoplay: true,
    arrows: false,
    pauseOnFocus: true,
    autoplayProgressVisible: true,
    dots: true,
    autoplayDuration: 3000,
    duration: 500,
    initialPageIndex: 0,
    currentPageIndex: 0,
  }}
/>
