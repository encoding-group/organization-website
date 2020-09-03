<script>
	import Form from "./components/Form.svelte";
</script>

<header>
    <h1>encoding.group</h1>
</header>

<main>
	<p>We translate artworks, designs and information archives into data and logic to create beautiful and unique experiences on the web.</p>
	<p>While exploring the aesthetics of new technologies, accessibility and simplicity is the foundation we build upon.</p>
	<p>We believe the internet should be an inspiring and enjoyable space to travel through, where stories can be told in countless different ways.</p>
	<p>Get in touch with us, to find out how we can encode your ideas into digital worlds.</p>
</main>

<footer>
	<button>Say hello!</button>
</footer>

<Form />

<style>
	header {
        margin: 1rem 2rem;
    }
    h1 {
        text-align: center;
    }
	main {
		margin: 44vh 3rem;
	}
	p + p {
		text-indent: 2rem;
	}
	footer {
		margin: 2rem 1rem;
		text-align: center;
	}
</style>
