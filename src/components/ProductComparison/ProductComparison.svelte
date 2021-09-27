<script>
	import { onMount } from 'svelte'
	import MediaQuery from '../../MediaQuery.svelte'
	import ProductComparisonItem from './ProductComparisonItem.svelte'

	/**
	 * PROPS
	 */

	/**
	 * @type Array.<Product>
	 */
	export let allProducts = [
		{
			__typename: 'Product',
			id: 'ckt4z86j20280m7y4icaksoyt',
			image: 'https://blog.luminaryhandbook.com/notebook-cover-preview-300.png',
			price: 2400,
			productComparisonDescription:
				'Make a custom notebook with exactly the collection of pages you need including: ' +
				'<ul><li>lined paper</li><li>graph paper</li><li>sheet music</li><li>todo lists</li><li>project management</li><li>dot grid</li></ul>' +
				'...and more!',
			productPagePath: '/product/notebook',
			title: 'Notebook'
		},
		{
			__typename: 'Product',
			id: 'ckt4z792f0148m7y4p2itqnjh',
			image: 'https://blog.luminaryhandbook.com/planner-cover-preview-300.png',
			price: 3500,
			productComparisonDescription:
				'Make a custom planner with monthly, weekly, and daily trackers options including: ' +
				'<ul><li>custom daily trackers</li><li>weekly reflection</li><li>monthly planning</li><li>todo lists</li><li>daily intentions</li><li>meal planning</li></ul>' +
				'...and more!',
			productPagePath: '/product/planner',
			title: 'Planner'
		},
		{
			__typename: 'Product',
			id: 'ckt4z7uc50192m7y45v1vbzjj',
			image: 'https://blog.luminaryhandbook.com/journal-cover-preview-300.png',
			price: 3500,
			productComparisonDescription:
				'Make a custom journal with weekly topics and daily pages including: ' +
				'<ul><li>custom daily trackers</li><li>journaling prompts</li><li>daily check-ins</li><li>dream journaling</li><li>daily intentions</li><li>fitness tracking</li></ul>' +
				'...and more!',
			productPagePath: '/product/journal',
			title: 'Journal'
		},
		{
			__typename: 'Product',
			id: 'ckt4z7zzr0236m7y46nkm0jgy',
			image: 'https://blog.luminaryhandbook.com/muse-300.png',
			price: 2800,
			productComparisonDescription:
				'Join us on a creative journey with prompts and challenges including: ' +
				'<ul><li>timed challenges</li><li>mandala makers</li><li>doodling exercises</li><li>prompt combinations</li><li>perspective exercises</li><li>diy mazes</li></ul>' +
				'...and more!',
			productPagePath: '/product/muse',
			title: 'Muse'
		},
		{
			__typename: 'Product',
			id: 'ckt4z6xg00068m7y4wpe55q2b',
			image: 'https://blog.luminaryhandbook.com/trainer-300.png',
			price: 3500,
			productComparisonDescription:
				'Make a custom fitness log to put together the big picture including: ' +
				'<ul><li>custom daily trackers</li><li>weekly and monthly achievements</li><li>fitness tracking</li><li>meal planning</li><li>muscle soreness</li><li>notes for coaches</li></ul>' +
				'...and more!',
			productPagePath: '/product/trainer',
			title: 'Trainer'
		}
	]

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
		// products.update((currentValue) => [...currentValue, e.detail.product])
		// cartopen.set(true)
		location.href=`${e.detail.product.productPagePath}`
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
							ctaButtonText="Customize"
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
