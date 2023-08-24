<script>
  let open = false;
  let visible = false;
  let toggled = true;
  let menuOpen = false;

  // function toggleMenu() {
  //   open ? false : true;
  // }
</script>

  <div class="absolute w-fit md:hidden right-4">
    <button class="isolate" on:click={() => (toggled = !toggled)}>
      {#if toggled}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-10 sm:h-10">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
      </svg>
      {:else}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-10 sm:h-10">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      {/if}
    </button>
  </div>
  {#if !toggled}
    <div class="z-10 absolute w-full left-0 top-32">
      <div class="bg-yellow-300 h-screen flex flex-col gap-2 text-4xl font-bold">
        <a href="/">Home</a>
        <a href="/">About</a>
      </div>
    </div>
  {/if}

