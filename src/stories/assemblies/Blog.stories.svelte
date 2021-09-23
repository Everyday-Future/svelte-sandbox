<!-- Blog.stories.svelte -->

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import BlogMenu from "../../routes/blog.svelte";
</script>

<Meta
  title="Assemblies/BlogMenu"
  component={BlogMenu}
  argTypes={{
    blogs: { control: "object" }
  }}
/>

<Template let:args>
  <BlogMenu  {...args} on:click={args.onClick}/>
</Template>

<Story
  name="Default"
  args={{
    blogs: [{
        src: 'https://www.fillmurray.com/640/360',
        alt: 'blog image 1',
        mobile_src: 'https://www.fillmurray.com/320/180',
        title: 'Blog post 1',
        body: "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?"
    }, {
        src: 'https://www.fillmurray.com/640/360',
        alt: 'blog image 1',
        mobile_src: 'https://www.fillmurray.com/320/180',
        title: 'Blog post 2',
        body: "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children."
    }, {
        src: 'https://www.fillmurray.com/640/360',
        alt: 'blog image 1',
        mobile_src: 'https://www.fillmurray.com/320/180',
        title: 'Blog post 3',
        body: "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?"
    }, {
        src: 'https://www.fillmurray.com/640/360',
        alt: 'blog image 1',
        mobile_src: 'https://www.fillmurray.com/320/180',
        title: 'Blog post 4',
        body: "And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee."
    }, {
        src: 'https://www.fillmurray.com/640/360',
        alt: 'blog image 1',
        mobile_src: 'https://www.fillmurray.com/320/180',
        title: 'Blog post 5',
        body: "And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee."
    }, {
        src: 'https://www.fillmurray.com/640/360',
        alt: 'blog image 6',
        mobile_src: 'https://www.fillmurray.com/320/180',
        title: 'Blog post 6',
        body: "And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee."
    }, {
        src: 'https://www.fillmurray.com/640/360',
        alt: 'blog image 1',
        mobile_src: 'https://www.fillmurray.com/320/180',
        title: 'Blog post 7',
        body: "And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee."
    }, {
        src: 'https://www.fillmurray.com/640/360',
        alt: 'blog image 1',
        mobile_src: 'https://www.fillmurray.com/320/180',
        title: 'Blog post 8',
        body: "And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee."
    }]
  }}
/>
