<div class="container">
  <div class="rays">
    <slot></slot>
  </div>
</div>

<style>
  @property --ray-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }

  @keyframes rotate-rays {
    to {
       --ray-angle: 1turn;
    }
  }

	.rays:hover {
		--ray-size: 10deg;
		--ray-gap: 20deg;
		--ray-color: #000;
		--ray-gap-color: #fff0; /* transparent white */

		/* if not animating, this makes the rays symmetrical */
		/* from var(--centering-offset) */
		--centering-offset: calc(var(--ray-size) / 2 * -1);

		background: repeating-conic-gradient(
			from var(--ray-angle),
			var(--ray-color) 0 var(--ray-size),
			var(--ray-gap-color) 0 calc(var(--ray-size) + var(--ray-gap))
		);
	}

	@media (prefers-reduced-motion: no-preference) {
	  .rays {
		  animation: rotate-rays 20s linear infinite;
		}
	}

  .container {
		box-sizing: border-box;
		margin: 0;
    block-size: 100%;
	}

  .rays {
		min-block-size: 100%;
		font-family: system-ui, sans-serif;
		display: grid;
		place-content: center;
	}
</style>

