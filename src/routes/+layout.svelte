<script>
  import "../app.css";
  import Cosmo from '$lib/Cosmo.svelte';
	import MobileMenu from '$lib/MobileMenu.svelte';
</script>

<svelte:head>
	<title>Cosmopolitan.dev</title>
	<meta name="description" content="Cosmopolitan.dev - World Wide Web Development" />
</svelte:head>

<div class="flex flex-col max-w-7xl mx-auto">
  <div class="max-w-6xl mx-auto px-4 py-6 w-full h-full flex justify-around items-center text-base lg:text-lg uppercase">
      <div class="hidden w-full md:flex md:justify-around">
        <a href="/">Home</a>
        <a href="/">About</a>
      </div>
      <Cosmo />
      <div class="hidden w-full md:flex md:justify-around md:items-center">
        <a href="/">Pricing</a>
        <div class="border-2 border-black rounded-full px-4 py-2">
          <a href="/">Subscribe</a>
        </div>
      </div>
      <MobileMenu />
  </div>
  <slot />
  <footer class="pt-8 pb-4">
    <div class="text-center text-lg font-medium">Cosmopolitan Development &copy; {new Date().getFullYear()}</div>
  </footer>
</div>
