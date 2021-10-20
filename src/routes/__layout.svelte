<script>
  import Navbar from '../components/Nav/Navbar.svelte';
  import Footer from '../components/Nav/Footer.svelte';
  import '../normalize.css';
  import '../base.css';
  import '../layout.css';

  let title = 'Luminary Handbook';
  let description =
    'Customizable journals, notebooks, workout logs, planners, and creativity tools';
  let thumbnail_image = '';
  let base_url = 'https://www.luminaryhandbook.com';
</script>

<svelte:head>
  <!--{# Required meta tags #}-->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <!--{# Primary Meta Tags #}-->
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <meta
    name="keywords"
    content="notebook, journal, self-care, confidence, self-esteem, willpower, exercise, nutrition, finances, saving, organization, goals, personal development, leadership, career, planner, daily planner"
  />
  <meta name="copyright" content="Copyright 2021 Everyday Future Consulting, LLC." />
  <!--    <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline' blog.luminaryhandbook.com *.bootstrapcdn.com *.googleapis.com *.fontawesome.com cdnjs.cloudflare.com; img-src 'self' *.luminaryhandbook.com *.giphy.com *.facebook.com *.google.com *.google-analytics.com *.stripe.com data: platform-cdn.sharethis.com; script-src * 'self' 'unsafe-inline' localhost:* *.stripe.com *.facebook.com platform-cdn.sharethis.com www.googletagmanager.com;">-->
  <!--{# Open Graph / Facebook #}-->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={base_url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={thumbnail_image} />
  <meta property="fb:app_id" content="716086475511927" />
  <meta property="og:site_name" content="Luminary Handbook" />
  <meta name="facebook-domain-verification" content="y67dzw79l19luayfqh3spsiwgvyzyr" />
  <meta property="author" content="LuminaryHandbook" />
  <meta property="article:author" content="LuminaryHandbook" />
  <meta property="article:publisher" content="https://www.facebook.com/luminaryhandbook" />
  <!--{# Twitter #}-->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={base_url} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={thumbnail_image} />
  <meta name="twitter:site" content="@luminarybook" />
  <meta name="twitter:domain" content="luminaryhandbook.com" />
  <!--{# IExplorer and Windows 8.1+ #}-->
  <meta name="msapplication-TileColor" content="#D5695C" />
  <meta
    name="msapplication-TileImage"
    content="https://blog.luminaryhandbook.com/favicon-144.png"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
  <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
    rel="stylesheet"
    media="print"
    onload="this.media='all'"
  />
  <link
    href="https://fonts.googleapis.com/css2?&family=Work+Sans:wght@300;400;500;600&display=swap"
    rel="stylesheet"
  />
  <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
    media="print"
    onload="this.media='all'"
  />
</svelte:head>

<Navbar />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }

  /* footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  footer a {
    font-weight: bold;
  } */
</style>
