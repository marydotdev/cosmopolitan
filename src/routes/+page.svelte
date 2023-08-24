<script>
	import Www from '$lib/WWW.svelte';
</script>

<div class="relative px-4 lg:px-8 max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto w-full">
	<section>
		<div class="w-full h-fit">
			<!-- <Globe /> -->

			<div>
				<Www />
			</div>
		</div>
	</section>

	<section class="">
		<div>
			<main class="isolate">
				<div class="relative pt-24">
					<div class="py-12">
						<div class="mx-auto max-w-7x">
							<div class="max-w-xl ml-auto">
                  <h1 class="font-wb text-2xl sm:text-3xl font-bold text-gray-900 lg:text-4xl">
                    Custom websites without the cost.
                  </h1>
                  <p class="mt-6 text-xl lg:text-2xl leading-8 text-zinc-800">
                    We specialize in building responsive, high performance websites that are optimized to work anytime, anywhere, on any device.
                  </p>
                  <!-- <div class="mt-10 flex items-center justify-start gap-x-6">
                    <a
                      href="#"
                      class="rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm lg:text-lg font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >Get started</a
                    >
                    <a href="#" class="text-sm lg:text-lg font-semibold leading-6 text-zinc-900"
                      >Learn more <span aria-hidden="true">→</span></a
                    >
                  </div> -->
							  </div>
						</div>
					</div>
				</div>

        <div class="relative">
					<div class="py-12">
						<div class="mx-auto max-w-7x">
							<div class="max-w-xl ml-auto">
                  <h1 class="font-wb text-2xl sm:text-3xl font-bold text-gray-900 lg:text-4xl">
                    Asynchronous Communication, Maximum Exploration.
                  </h1>
                  <p class="mt-6 text-xl lg:text-2xl leading-8 text-zinc-800">
                    Endless Meetings and distracting check-ins don't work for us, instead we embrace the benefits of remote first work.
                  </p>
                  <!-- <div class="mt-10 flex items-center justify-start gap-x-6">
                    <a
                      href="#"
                      class="rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm lg:text-lg font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >Get started</a
                    >
                    <a href="#" class="text-sm lg:text-lg font-semibold leading-6 text-zinc-900"
                      >Learn more <span aria-hidden="true">→</span></a
                    >
                  </div> -->
							  </div>
						</div>
					</div>
				</div>

				<!-- Pricing section -->
				<div class="py-12">
					<div class="mx-auto max-w-7xl">
						<div class="mx-auto max-w-7x">
							<div class="max-w-xl ml-auto">
                  <h1 class="font-wb text-2xl sm:text-3xl font-bold text-gray-900 lg:text-4xl">
                    Pricing plans that work for you.
                  </h1>
                  <p class="mt-6 text-xl lg:text-2xl leading-8 text-zinc-800">
                    Transparent pricing means you can throw away your crystal ball. Pay the same price every month, no surprise fees or bloated hourly bills.
                  </p>
                  <!-- <div class="mt-10 flex items-center justify-start gap-x-6">
                    <a
                      href="#"
                      class="rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm lg:text-lg font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >Get started</a
                    >
                    <a href="#" class="text-sm lg:text-lg font-semibold leading-6 text-zinc-900"
                      >Learn more <span aria-hidden="true">→</span></a
                    >
                  </div> -->
							  </div>
						</div>
				</div>
			</main>
		</div>
	</section>
</div>
<!--
<style lang="postcss">
	:global(html) {
		background-color: theme(colors.yellow.300);
	}
	.www {
		font-variation-settings: 'wght' 100, 'wdth' 130, 'ital' 0;
		transition: font-variation-settings 0.3s ease;
	}
	.www:hover {
		font-variation-settings: 'wght' 100, 'wdth' 150, 'ital' 12;
	}
</style> -->


<style>

    #burst-12 {
      background: red;
      width: 80px;
      height: 80px;
      position: relative;
      text-align: center;
    }
    #burst-12:before,
    #burst-12:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 80px;
      width: 80px;
      background: red;
    }
    #burst-12:before {
      transform: rotate(30deg);
    }
    #burst-12:after {
      transform: rotate(60deg);
    }

</style>
