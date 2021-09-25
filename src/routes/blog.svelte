<script>
    import BlogMenuCard from "../components/Cards/BlogMenuCard.svelte";

    export let blogs = [{
        link: '/blog/post-1',
        src: 'https://www.fillmurray.com/640/360',
        alt: 'blog image 1',
        mobile_src: 'https://www.fillmurray.com/320/180',
        title: 'Blog post 1',
        body: "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?"
    }, {
        link: '/blog/post-1',
        src: 'https://www.fillmurray.com/640/360',
        alt: 'blog image 1',
        mobile_src: 'https://www.fillmurray.com/320/180',
        title: 'Blog post 2',
        body: "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children."
    }, {
        link: '/blog/post-1',
        src: 'https://www.fillmurray.com/640/360',
        alt: 'blog image 1',
        mobile_src: 'https://www.fillmurray.com/320/180',
        title: 'Blog post 3',
        body: "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?"
    }, {
        link: '/blog/post-1',
        src: 'https://www.fillmurray.com/640/360',
        alt: 'blog image 1',
        mobile_src: 'https://www.fillmurray.com/320/180',
        title: 'Blog post 4',
        body: "And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee."
    }, {
        link: '/blog/post-1',
        src: 'https://www.fillmurray.com/640/360',
        alt: 'blog image 1',
        mobile_src: 'https://www.fillmurray.com/320/180',
        title: 'Blog post 5',
        body: "And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee."
    }, {
        link: '/blog/post-1',
        src: 'https://www.fillmurray.com/640/360',
        alt: 'blog image 6',
        mobile_src: 'https://www.fillmurray.com/320/180',
        title: 'Blog post 6',
        body: "And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee."
    }, {
        link: '/blog/post-1',
        src: 'https://www.fillmurray.com/640/360',
        alt: 'blog image 1',
        mobile_src: 'https://www.fillmurray.com/320/180',
        title: 'Blog post 7',
        body: "And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee."
    }, {
        link: '/blog/post-1',
        src: 'https://www.fillmurray.com/640/360',
        alt: 'blog image 1',
        mobile_src: 'https://www.fillmurray.com/320/180',
        title: 'Blog post 8',
        body: "And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee."
    }];

</script>


<div class="blog-menu-header">
  <h1 class="header-title">TODO - Blog Menu Header</h1>
</div>

<div class="container">
  <div class="card-columns">
    {#each blogs as post}
      <div class="card">
        <BlogMenuCard {...post}/>
      </div>
    {/each}
  </div>
</div>

<style>

  .blog-menu-header {
    text-align: center;
    height: 200px;
    width: 100%;
    background-color: #4c5559;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-title {
    color: white;
    flex: 1 1 0;
  }

  .card-columns .card {
    display: inline-block;
    width: 100%;
    margin: 20px 0;
  }

  @media (min-width: 576px) {
    .card-columns {
      -webkit-column-count: 3;
      -moz-column-count: 3;
      column-count: 3;
      -webkit-column-gap: 1.25rem;
      -moz-column-gap: 1.25rem;
      column-gap: 1.25rem;
      orphans: 1;
      widows: 1
    }
  }
</style>


