<script>
	import { createEventDispatcher } from 'svelte'
	import RoundedSelect from '../../Components/Inputs/RoundedSelect.svelte'

	/**
	 * PROPS
	 */

	/** @type Product */
	export let defaultSelectedProduct

	/**
	 * @type string
	 * The text to display in the CTA Button
	 */
	export let ctaButtonText

	/**
	 * @type Array.<Product>
	 */
	let selectedProduct = defaultSelectedProduct

	/**
	 * @type Array.<Product>
	 * An array of products that the user has selected, so that they can be filtered out of the
	 * dropdown list (so that the user doesn't compare a product against itself)
	 */
	export let allSelectedProducts

	/**
	 * @type Array.<Product>
	 * All products returned from the API, so that they're selectable from the dropdown.
	 */
	export let allProducts

	/**
	 * @type number
	 * The integer index at which the Product appears
	 */
	export let index

	/**
	 * METHODS
	 */

	const dispatch = createEventDispatcher()

	const handleDropdownSelect = (e) => {
		const product = allProducts.find(({ id }) => id === e.detail.value)
		if (!product) return
		selectedProduct = product

		// Forward the event to the parent, so it knows all of the selected products
		dispatch('select', {
			productId: e.detail.productId,
			index: index
		})
	}

	const handleCTAClick = () => {
		dispatch('CTAClick', {
			product: selectedProduct
		})
	}

	/**
	 * REACTIVITY
	 */

	$: selectedProductPrice = (() => {
		const price = (selectedProduct.price / 100).toLocaleString()
		if (price.includes('.')) return price
		return `${price}.00`
	})()
</script>

<div class="product-comparison-item">
	<RoundedSelect
		items={allProducts
			.filter(
				(product) =>
					!allSelectedProducts.some((selectedProduct) => selectedProduct.id === product.id)
			)
			.map(({ id, title }) => ({ value: id, label: title }))}
		value={{ value: selectedProduct.id, label: selectedProduct.title }}
		on:select={handleDropdownSelect}
		isClearable={false}
	/>

	<div class="relative-context">
		<img src={selectedProduct.image} alt={`${selectedProduct.title} handbook`} />

		<div class="images-overlay">
			<div />

			<div>
				<p class="price">${selectedProductPrice}</p>
				<button on:click={handleCTAClick}>{ctaButtonText}</button>
			</div>

			<h3 class="great-for">
				{#if index === 0}
					Great for
				{/if}
			</h3>
		</div>
	</div>

	<p class="description">{selectedProduct.productComparisonDescription}</p>

	<a href={selectedProduct.productPagePath}>Learn more ></a>
</div>

<style>
	:global(.product-comparison-item .select-scope) {
		margin: 0 auto;
		width: 75%;
	}

	img {
		width: 100%;
		display: block;
		margin: 0 auto;
	}

	.relative-context {
		position: relative;
	}

	.images-overlay {
		padding: 8px 0;
		position: absolute;
		bottom: 0;
		height: 150px;
		background-color: #ffffff;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		border-top: 2px solid #b3bdc2;
		border-bottom: 2px solid #b3bdc2;
	}

	.price {
		color: #616f77;
		font-size: 20px;
		text-align: center;
		font-weight: 400;
	}

	button {
		display: block;
		width: auto;
		padding: 0 32px;
		margin: 8px 0 0 auto;
		color: #ffffff;
		background-color: var(--luminary-red);
		border: 0;
		border-radius: 20px;
		height: 40px;
		cursor: pointer;
	}

	.great-for {
		color: #6d7a83;
		height: 24px;
		font-size: 20px;
		align-self: flex-start;
		font-weight: 500;
	}

	.description {
		color: #6d7a83;
		width: 75%;
		margin: 64px auto 40px auto;
		line-height: 22px;
		font-size: 14px;
		letter-spacing: 0.07em;
		font-weight: 400;
	}

	a {
		display: block;
		width: 75%;
		margin: 0 auto;
		padding-bottom: 125px;
		color: #6d7a83;
		text-decoration: underline;
		text-align: center;
		font-weight: 400;
		cursor: pointer;
	}

	@media screen and (max-width: 1460px) {
		.great-for {
			padding-left: calc(25% / 2);
		}
	}
</style>
