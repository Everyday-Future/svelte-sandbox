<script>
</script>

<footer>
  <section class="footer-grid container">
    <div class="logo">
      <img src="/logo-white.svg" alt="logo" width="300" height="50" />
    </div>
    <div class="link-list features">
      <h4>Features</h4>
      <ul>
        <li><a href="/">Products</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">Prompts</a></li>
      </ul>
    </div>
    <div class="link-list resources">
      <h4>Resources</h4>
      <ul>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Contact Us</a></li>
        <li><a href="/">Pricing</a></li>
        <li><a href="/">Works Cited</a></li>
      </ul>
    </div>
    <div class="link-list more">
      <h4>More</h4>
      <ul>
        <li><a href="/">Sign in</a></li>
        <li><a href="/">Privacy Policy</a></li>
        <li><a href="/">Refund Policy</a></li>
      </ul>
    </div>
    <div class="link-list email">
      <h4>Stay Connected</h4>
      <form action="">
        <input type="email" class="stayConnectedField" name="" id="" placeholder="Email..." />
        <input type="button" class="stayConnectedButton" value="Submit" />
      </form>
    </div>
  </section>
</footer>

<style scoped>
  footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 4rem 0.5rem 15rem 0.5rem;
    background-color: #4c5559;
  }
  .footer-grid {
    display: grid;
    width: 100%;
    max-width: 525px;
    height: auto;
    margin: 0 auto;
    row-gap: 4rem;
    column-gap: 2rem;
  }
  .link-list a,
  .link-list h4 {
    text-align: left;
    font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' !important;
  }

  .link-list a {
    color: white;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.2s ease-in;
    font-weight: 400;
  }
  .link-list a:hover {
    color: rgb(145, 145, 145);
  }

  .link-list h4 {
    color: #b1bdc3;
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
    font-weight: 600;
  }

  .link-list ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .logo {
    grid-area: logo;
  }

  .logo img {
    display: block;
    width: 15rem;
    max-width: 100%;
    height: auto;
  }

  .features {
    grid-area: features;
  }

  .resources {
    grid-area: resources;
  }

  .more {
    grid-area: more;
  }

  .email {
    grid-area: email;
  }

  form {
    position: relative;
  }

  .stayConnectedField {
    padding: 1rem 2rem;
    border-radius: 20rem;
    width: 100%;
    border: 0.4rem solid #cfd3d5;
    position: relative;
  }

  .stayConnectedField::placeholder {
    color: #b1bdc3;
  }

  .stayConnectedField:focus {
    outline: none;
  }

  .stayConnectedButton {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    background-color: #d5695c;
    color: white;
    border-radius: 20rem;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  /* extra small devices (phones) up to 600px */
  @media (max-width: 600px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 5rem auto auto 1fr;
      grid-template-areas:
        'logo logo'
        'features resources'
        'more .'
        'email email';
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media (min-width: 600px) {
    footer {
      padding: 4rem 2rem 15rem 2rem;
    }
    .footer-grid {
      max-width: 740px;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 5rem auto auto 1fr;
      grid-template-areas:
        'logo logo'
        'features resources'
        'more .'
        'email email';
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media (min-width: 768px) {
    footer {
      padding: 4rem 2rem;
    }
    .footer-grid {
      max-width: 700px;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 5rem auto;
      grid-template-areas:
        'logo logo email email'
        'features resources more .';
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media (min-width: 992px) {
    .footer-grid {
      column-gap: 0;
      max-width: 1100px;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media (min-width: 1200px) {
    .footer-grid {
      max-width: 1350px;
      grid-template-columns: 1fr 15% 15% 15% 1fr;
      grid-template-rows: auto;
      grid-template-areas: 'logo features resources more email';
    }
  }
</style>
