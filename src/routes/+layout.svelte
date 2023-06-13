<script>
  import "../app.css";
  import Cosmo from '$lib/Cosmo.svelte';
</script>

<div class="flex flex-col max-w-7xl mx-auto">
  <div class="py-12 w-full flex justify-center">
    <Cosmo />
  </div>
  <slot />
</div>
