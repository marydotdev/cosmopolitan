<script>
	import Globe from '$lib/Globe.svelte';
  import Www from '$lib/WWW.svelte';
</script>

<div class="relative px-4 max-w-xl lg:max-w-3xl mx-auto w-full">
  <div class="w-full">
    <Globe />
  </div>

  <div>
    <Www />
  </div>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.yellow.300);
  }
</style>
