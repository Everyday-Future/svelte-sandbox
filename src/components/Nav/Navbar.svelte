<script>
    import Logo from './Logo.svelte';
    import MediaQuery from '../../MediaQuery.svelte';
    import Hamburger from 'svelte-hamburgers';
    import Cart from './Cart.svelte';
    import {fly, slide} from 'svelte/transition';
    import {cartopen, products} from '../../lib/stores';

    let open = false;
    let isProduct = false;
    let productName = '';
    let productColor = '#fff';
</script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/squeeze.css" />

<Cart/>
<div style="background-color: #aebec4" class="navbar unselectable">
  <a href="/">
  <div class="logo-parent">
    <Logo width=150 />
  </div>
  </a>

  <MediaQuery query="(max-width: 810px)" let:matches>
    {#if matches}
      <Hamburger bind:open type="squeeze" --color="white" --activeColor="white" --layerWidth="25px" --layerHeight="2px" --layerSpacing="9px"
                 --paddingX="19px" --paddingY="15px" --borderRadius="0"/>
      {#if open}
        <div class="navmenu" in:slide="{{ duration: 400 }}" out:slide="{{ duration: 400 }}">
          <a class="navmenu-link" href="/">Home</a>
          <a class="navmenu-link" href="/shop">Shop</a>
          <a class="navmenu-link" href="/about">About Us</a>
          <a class="navmenu-link" href="/works-cited">Works Cited</a>
          <a class="navmenu-link" href="/prompts">Prompts</a>
          <a class="navmenu-link" href="/blog">Blog</a>
          <a class="navmenu-link" href="/sign-up">Sign In</a>
        </div>
      {/if}
    {:else}
      <div class="navbar-icons">
        <a class="navbar-link" href="/">Home</a>
        <a class="navbar-link" href="/shop">Shop</a>
        <a class="navbar-link" href="/about">About Us</a>
        <a class="navbar-link" href="/works-cited">Works Cited</a>
        <a class="navbar-link" href="/prompts">Prompts</a>
        <a class="navbar-link" href="/blog">Blog</a>
      </div>
      <a class="sign-in" href="/sign-up">Sign In</a>
    {/if}
  </MediaQuery>
  {#if $products.length === 0}
    <img on:click={() => (cartopen.toggle())} id="cart-icon-nav" alt="icon for an empty cart"
         class="cursor-pointer cart-icon"
         src="https://blog.luminaryhandbook.com/icon-cart-empty.svg">
  {:else}
    <img on:click={() => (cartopen.toggle())} id="cart-icon-nav" alt="icon for a full cart"
         class="cursor-pointer cart-icon"
         src="https://blog.luminaryhandbook.com/icon-cart-full.svg">
  {/if}
</div>
<div id="nav-spacer"></div>

<style>
  .navbar {
    background-color: #aebec4;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 1001;
  }

  #nav-spacer {
    height: 60px;
    position: relative;
  }

  .navmenu {
    background-color: #6D7A83;
    color: white;
    padding-left: 15px;
    width: 100%;
    z-index: 1002;
  }

  .navmenu-link {
    display: block;
    color: white;
    padding: 10px;
    text-decoration: none;
  }

  .navbar-icons {
    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
  }

  .navbar-link {
    color: white;
    padding: 10px;
    text-decoration: none;
  }

  .logo-parent {
    position: absolute;
    left: calc(50vw - 570px);
    top: 0;
  }

  :global(.nav-link) {
    color: white !important;
  }

  .sign-in {
    right: 76px;
    top: 21px;
    color: white;
    position: absolute;
    text-decoration: none;
  }

  .cart-icon {
    right: 30px;
    top: 13px;
    width: 30px;
    position: absolute;
  }

  @media screen and (max-width: 1260px) {
    .logo-parent {
      left: 63px;
    }
  }

  @media screen and (max-width: 810px) {
    .cart-icon {
      right: 8vw;
    }
  }

</style>