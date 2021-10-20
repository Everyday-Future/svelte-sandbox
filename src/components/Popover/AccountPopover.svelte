<script>
  export let username = '';
</script>

<div class="wrapper">
  <div class="welcome-message">
    <span>Welcome, {username}</span>
  </div>
  <ul>
    <li><a href="#">Saved Layouts</a></li>
    <li><a href="#">Order History</a></li>
    <li><a href="#">Logout</a></li>
  </ul>
</div>

<style scoped>
  .wrapper {
    padding: 0.5rem 0 1rem 0;
    height: auto;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    border-bottom: 1px solid #6d7a83;
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  a {
    padding: 1rem;
    color: #6d7a83;
    text-decoration: none;
    width: 100%;
    height: 100%;
  }

  a:hover {
    background-color: hsl(0, 0%, 97%);
  }

  .welcome-message {
    padding: 1rem;
    border-bottom: 1px solid #6d7a83;
  }
  .welcome-message > span {
    color: #6d7a83;
    font-weight: 600;
  }
</style>
