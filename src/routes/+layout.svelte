<script>
  import "../app.css";
  import Cosmo from '$lib/Cosmo.svelte';
</script>

<svelte:head>
	<title>Cosmopolitan.dev</title>
	<meta name="description" content="Cosmopolitan.dev - World Wide Web Development" />
</svelte:head>

<div class="flex flex-col max-w-7xl mx-auto">
  <div class="py-12 w-full flex justify-center">
    <Cosmo />
  </div>
  <slot />
</div>
