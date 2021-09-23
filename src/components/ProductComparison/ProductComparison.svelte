<script>
	import { onMount } from 'svelte'
	import MediaQuery from '../../MediaQuery.svelte'
	import ProductComparisonItem from './ProductComparisonItem.svelte'
	import { cartopen, products } from '../../stores'

	/**
	 * PROPS
	 */

	/**
	 * @type Array.<Product>
	 */
	export let allProducts

	/**
	 * LIFECYCLE
	 */

	const LAYOUT_BREAKPOINT = 768
	let allSelectedProducts = []
	onMount(() => {
		if (typeof window === 'undefined') return

		const handleResize = () => {
			allSelectedProducts = [
				...allProducts.slice(0, window.innerWidth >= LAYOUT_BREAKPOINT ? 3 : 2)
			]
		}

		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	})

	/**
	 * METHODS
	 */

	/**
	 * @typedef {Object} CustomSelectEventDetail
	 * @property {string} productId
	 * @property {number} index
	 *
	 * @param {Object} e
	 * @param {...CustomSelectEventDetail} e.detail - The event detail passed in the dispatcher
	 */
	const handleSelect = (e) => {
		// Find the selected product with the id
		const selected = allProducts.find(({ id }) => id === e.detail.productId)
		if (!selected) return

		allSelectedProducts[e.detail.index] = selected
	}

	/**
	 * @typedef {Object} Product
	 */
	const handleCTAButtonClick = (e) => {
		products.update((currentValue) => [...currentValue, e.detail.product])
		cartopen.set(true)
	}
</script>

<div>
	<MediaQuery query="(max-width: 768px)" let:matches>
		{#if matches}
			<section>
				{#each [...allSelectedProducts.slice(0, 2)] as product, index}
					<article class="col-2">
						<ProductComparisonItem
							{allProducts}
							{allSelectedProducts}
							ctaButtonText="Add to Cart"
							{index}
							defaultSelectedProduct={product}
							on:select={handleSelect}
							on:CTAClick={handleCTAButtonClick}
						/>
					</article>
				{/each}
			</section>
		{:else}
			<section>
				{#each allSelectedProducts as product, index}
					<article class="col-3">
						<ProductComparisonItem
							{allProducts}
							{allSelectedProducts}
							ctaButtonText="Add to Cart"
							{index}
							defaultSelectedProduct={product}
							on:select={handleSelect}
							on:CTAClick={handleCTAButtonClick}
						/>
					</article>
				{/each}
			</section>
		{/if}
	</MediaQuery>
</div>

<style>
	div {
		max-width: 1460px;
		width: 100%;
		margin: 0 auto 125px auto;
	}

	section {
		display: flex;
		height: auto;
	}

	article {
		height: auto;
	}

	article:first-of-type {
		padding-left: 0;
	}

	article:last-of-type {
		padding-right: 0;
	}

	.col-3 {
		width: calc(100% / 3);
	}

	.col-2 {
		width: 50%;
	}
</style>
