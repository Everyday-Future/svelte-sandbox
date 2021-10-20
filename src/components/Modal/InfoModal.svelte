<script>
</script>

<div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    ><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg
  >
  <p>This component takes an estimated <span>1hr</span> to complete. Times may vary.</p>
</div>

<style scoped>
  p {
    color: hsl(0, 0%, 60%);
    text-align: center;
  }

  span {
    color: hsl(0, 100%, 70%);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem 0;
  }

  @media screen and (min-width: 768px) {
    p {
      text-align: left;
    }
    div {
      flex-direction: row;
      padding: 2rem;
    }
  }
</style>
