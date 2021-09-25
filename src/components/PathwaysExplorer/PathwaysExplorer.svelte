<script>
	import { onMount } from 'svelte'
	import { swipe } from 'svelte-gestures/dist/index.js'

	import SpiralBoundBook from './assets/spiralboundbook-open-01@3x.png'
	/**
	 * PROPS
	 */

	/**
	 * @type {Product & WithPathways}
	 *
	 * This component assumes that the additional legwork of getting a Product's associated
	 * Pathways (i.e., from a GraphQL request) has already taken place. To avoid n + 1 in
	 * GraphQL, a separate request for that Product's Pathways should be made.
	 */
	export let product

	/**
	 * LIFECYCLE
	 *
	 * On mount and on resize change, the width of the selection buttons must be compared to the
	 * width of its bounding box, so that the layout can determine whether to center the selection
	 * buttons, or display them from the leading edge of the container.
	 */
	let ScrollableNavNode
	let ContainerNode
	let ImgNode
	let isOverflowing
	let isMobile
	onMount(() => {
		if (typeof window === 'undefined') return

		const handleResize = () => {
			isMobile = window.innerWidth <= 600
			isOverflowing = ScrollableNavNode.scrollWidth > ContainerNode.getBoundingClientRect().width
		}

		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	})

	/**
	 * STATE
	 */

	$: selectedPathway = product.pathways[0]

	/** @type {'left' | 'right'}*/
	let page = 'left'

	/**
	 * METHODS
	 */

	/**
	 *
	 * @param {'left' | 'right'} newPage
	 */
	const selectPage = (newPage) => (page = newPage)
	let originalDragCursorPosition = null

	/**
	 * @typedef SwipeEventDetail
	 * @property {'left' | 'right'} direction
	 */

	/**
	 * @param {Object} e
	 * @param {...SwipeEventDetail} e.detail
	 *
	 * Swiping should display the page opposite of the direction swiped
	 */
	const handleSwipe = (e) => {
		page = e.detail.direction === 'left' ? 'right' : 'left'
	}
</script>

<section>
	<div class="product-text">
		<h1>{product.title}</h1>
		<p style="color: var(--navy)">{product.pathwaysDescription}</p>
	</div>

	<div
		class="relative-context"
		style="justify-content: {isOverflowing ? 'flex-start' : 'center'};"
		bind:this={ContainerNode}
	>
		<div class="leading-scroll-shadow scroll-shadow" />
		<nav bind:this={ScrollableNavNode}>
			<ul style="justify-content: {isOverflowing ? 'flex-start' : 'center'};">
				{#each product.pathways as pathway}
					<li>
						<button
							on:click={() => (selectedPathway = pathway)}
							class:active={selectedPathway.id === pathway.id}>{pathway.name}</button
						>
					</li>
				{/each}
			</ul>
		</nav>
		<div class="trailing-scroll-shadow scroll-shadow" />
	</div>

	<div class="pathway-content">
		<div class="column">
			<div class="icon-container">
				<svelte:component this={selectedPathway.Icon} displayText={selectedPathway.name} />
			</div>
			<div>
				<h1 class="pathway-title">{selectedPathway.name}</h1>
				{#each selectedPathway.summary.split('<br>') as paragraph}
					<p>{paragraph}</p>
				{/each}
				<a href={selectedPathway.ctaLinkHref}>{selectedPathway.ctaLinkText}</a>
			</div>
		</div>
		<div
			style="transform: rotateZ(-0.01turn) translateX({isMobile && page === 'right'
				? '-25%'
				: '0'}) ;"
			class="handbook"
			use:swipe={{ timeframe: 300, minSwipeDistance: 60 }}
			on:swipe={handleSwipe}
		>
			<img bind:this={ImgNode} src={SpiralBoundBook} alt="background book to view sample layouts" />

			<div class="book-content">
				<article>
					<svelte:component
						this={selectedPathway.handbookVectorImgLeft}
						pageSide="left"
						title={selectedPathway.name}
					/>
				</article>
				<article>
					<svelte:component
						this={selectedPathway.handbookVectorImgRight}
						pageSide="right"
						title={selectedPathway.name}
					/>
				</article>
			</div>
		</div>
		<div class="clip-book-image" />

		<div class="item-progress">
			<button
				on:click={() => selectPage('left')}
				class="item-progress-dot"
				style="background-color: {(() => {
					if (page === 'left') return '#D5695C'
					return 'transparent'
				})()};"
			/>
			<button
				on:click={() => selectPage('right')}
				class="item-progress-dot"
				style="background-color: {(() => {
					if (page === 'right') return '#D5695C'
					return 'transparent'
				})()};"
			/>
		</div>
	</div>
</section>

<style>
	:root {
		--button-height: 40px;
	}

	section {
		max-width: var(--max-viewport-width);
		margin: 0 auto 200px auto;
	}

	.product-text {
		margin: 0 auto;
		width: auto;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.product-text h1,
	.product-text p {
		margin-bottom: 28px;
		max-width: 650px;
		width: 100%;
		text-align: center;
		padding: 0 15px;
	}

	.relative-context {
		display: flex;
		align-items: center;
		position: relative;
		height: 40px;
	}

	nav {
		overflow-x: auto;
		overflow-y: hidden;
		transform: translateY(calc(var(--button-height) / 2));
		position: relative;
		z-index: 10;
		scrollbar-width: none; /** Hide scrollbar in Firefox */
	}

	/** Hide Scrollbar in Safari and Chrome */
	nav::-webkit-scrollbar {
		display: none;
	}

	ul {
		list-style: none;
		display: inline-flex;
		padding: 0;
		width: auto;
		margin: 0;
	}

	li {
		display: inline-block;
		margin: 0 15px;
	}

	button {
		display: block;
		width: auto;
		padding: 0 32px;
		color: var(--navy);
		border: 2px solid var(--navy);
		background-color: #ffffff;
		border-radius: 20px;
		height: var(--button-height);
		cursor: pointer;
		transition: background-color 0.3s, color 0.3s;
		white-space: nowrap;
		z-index: 0;
	}

	button:hover {
		background-color: #6a7b84;
		color: #ffffff;
		transition: background-color 0.3s, color 0.3s;
	}

	.active {
		background-color: var(--navy);
		color: #ffffff;
		transition: background-color 0.3s, color 0.3s;
	}

	.pathway-content {
		position: relative;
		background-color: #e9eaeb;
		height: auto;
		min-height: 669px;
		z-index: 0;
		padding: 100px 0 100px 10%;

		display: flex;
		justify-content: space-between;
	}

	.pathway-content p {
		color: #707070;
		margin-bottom: 8px;
	}

	.column {
		display: flex;
		flex-direction: column;
		width: 30%;
	}

	.icon-container {
		margin-bottom: 32px;
	}

	h1,
	p:last-of-type {
		margin-bottom: 32px;
		width: 100%;
		line-height: 1.4em;
	}

	a {
		color: #6d7a83;
		text-decoration: underline;
		font-weight: 400;
		cursor: pointer;
	}

	.handbook {
		position: absolute;
		bottom: -175px;
		right: -12%;

		width: 65%;
		transform: rotateZ(-0.01turn) translateX(0);
		transition: transform 0.5s;
	}

	.book-content {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 88.5%;
		height: 80.5%;
		z-index: 1;

		display: flex;
		justify-content: space-between;
	}

	article {
		width: calc(43%);
		height: 100%;
		border: 1px dashed #6d7a83;
		border-radius: 6px;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	/** Style placeholder book SVGs  */
	:global(.book-content svg) {
		height: 100px;
	}

	img {
		width: 100%;
		/* position: absolute;
		z-index: 0; */
	}

	/** A div to clip the book image at the bottom when it exceeds the height of the gray  content box */
	.clip-book-image {
		--clip-div-height: 200px;

		position: absolute;
		bottom: calc(-1 * (var(--clip-div-height)));
		height: var(--clip-div-height);
		width: 100vw;
		background-color: #ffffff;
	}

	.item-progress {
		display: none;
	}

	@media screen and (max-width: 1500px) {
		.handbook {
			right: -6%;
			bottom: -125px;
		}
	}

	@media screen and (max-width: 1350px) {
		.handbook {
			right: -6%;
			bottom: -90px;
		}
	}

	@media screen and (max-width: 1200px) {
		h1 {
			font-size: 20px !important;
		}

		h1,
		p,
		.icon-container {
			margin-bottom: 16px;
		}

		.column {
			width: 25%;
		}

		.pathway-content {
			padding: 60px 0 40px 5%;
			min-height: 520px;
		}

		.handbook {
			width: 71%;
			right: -3%;
			bottom: -170px;
		}
	}

	@media screen and (max-width: 975px) {
		.handbook {
			width: 71%;
			right: -3%;
			bottom: -70px;
		}
	}

	@media screen and (max-width: 768px) {
		.pathway-content {
			width: 100%;
			padding-right: 5%;
		}

		.column {
			width: 100%;
			flex-direction: row;
		}

		.icon-container {
			margin-right: 21px;
		}

		.pathway-content {
			min-height: 600px;
		}

		.pathway-title {
			display: none;
		}

		p {
			max-width: 750px;
			width: 100%;
		}

		.handbook {
			right: 0;
			left: 0;
			bottom: -70px;
			margin: auto;
			width: 85%;
		}
	}

	@media screen and (max-width: 600px) {
		.pathway-content {
			min-height: 540px;
		}

		.handbook {
			width: 90%;
			right: -30%;
			bottom: -60px;
		}

		.item-progress {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			margin: 0 auto;
			display: flex;
			justify-content: center;
		}

		.item-progress-dot {
			width: 12px;
			height: 12px;
			min-width: 12px;
			min-height: 12px;
			max-width: 12px;
			max-height: 12px;
			transition: background-color 0.5s;
			border-radius: 50%;
			border: 1px solid #d5695c;
			padding: 0;
			margin: 16px 3.5px;
			cursor: pointer;
		}

		.item-progress-dot:hover {
			background-color: #d5695c55;
			transition: background-color 0.25s;
		}

		.clip-book-image {
			left: 0;
		}
	}

	@media screen and (max-width: 500px) {
		.handbook {
			width: 115%;
			right: -30%;
			bottom: -70px;
		}
	}
</style>
