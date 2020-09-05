<script>
  import Form from "./components/Form.svelte";

  console.log("encoding.group");

  let position;
  let showForm = false;
  function openForm() {
    showForm = true;
    let scrollTo = position.offsetTop;
    setTimeout(()=>{
      window.scrollTo({
        top: scrollTo,
        left: 0,
        behavior: 'smooth'
      });
    }, 50);
  }
</script>

<style>
  header {
    margin: 1rem 0.5rem;
    animation: fadein 1s;
  }
  h1 {
    text-align: center;
  }
  main {
    margin: 44vh 1rem;
    animation: fadein 2s;
  }
  p {
    hyphens: auto;
	  -webkit-hyphens: auto;
  }
  p + p {
    text-indent: 1em;
  }
  footer {
    text-align: center;
    padding: 1rem;
    animation: fadein 2s;
  }
  aside {
    overflow: hidden;
    animation: fadein 2s;
  }
  header, main, footer {
    max-width: 100vw;
    overflow: hidden;
  }
  @media only screen and (orientation: portrait) {
    header {
      margin: 0.5rem;
    }
    main {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
    footer {
      padding: 0.5rem;
    }
  }
</style>

<!-- encoding.group -->

<header>
  <h1>encoding.group</h1>
</header>

<main>
  <p>
    We translate artworks, designs and information archives into data and logic
    to create beautiful and unique experiences on the web.
  </p>
  <p>
    While exploring the aesthetics of new technologies, accessibility and
    simplicity is the foundation we build upon.
  </p>
  <p>
    We believe the internet should be an inspiring and enjoyable space to travel
    through, where stories can be told in countless different ways.
  </p>
  <p>
    Get in touch with us, to find out how we can encode your ideas into digital
    worlds.
  </p>
</main>

<div bind:this={position}></div>

{#if showForm === false}
  <footer><button on:click={openForm}>Say hello!</button></footer>
{:else}
  <aside>
    <Form />
  </aside>
{/if}
