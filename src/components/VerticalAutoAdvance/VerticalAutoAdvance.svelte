<script>
	import { onMount, onDestroy } from 'svelte'
	import { fade } from 'svelte/transition'
	import FloatingActionButton from '../Buttons/FloatingActionButton.svelte'
	import ChevronIcon from '../Icons/ChevronIcon.svelte'

	/**
	 * PROPS
	 */

	/**
	 * @type Array.<CarouselItem>
	 */
	export let carouselItems
	export let changeoverSeconds = 7

	/**
	 * STATE
	 */

	/** Index of the carousel item that is currently displayed in full */
	let currentlyRevealed = 0

	const handleChangeover = (reverse = false) => {
		if (reverse) {
			// Revert to last index if carousel has arrived at the final item
			if (currentlyRevealed === 0) {
				currentlyRevealed = carouselItems.length - 1
			} else {
				currentlyRevealed -= 1
			}
		} else {
			// Revert to first index if carousel has arrived at the final item
			if (currentlyRevealed === carouselItems.length - 1) {
				currentlyRevealed = 0
			} else {
				currentlyRevealed += 1
			}
		}
	}

	/**
	 * LIFECYCLE
	 */

	let bookImgNode
	let bookHeight = 0
	const BOOK_PAGE_HEIGHT_PERCENTAGE = 0.855
	onMount(() => {
		const handleResize = () => {
			bookHeight = bookImgNode.getBoundingClientRect().height * BOOK_PAGE_HEIGHT_PERCENTAGE
		}

		typeof window !== 'undefined' && window.addEventListener('resize', handleResize)
		return () => {
			typeof window !== 'undefined' && window.removeEventListener('resize', handleResize)
		}
	})

	const onInterval = (callback, milliseconds) => {
		const interval = setInterval(callback, milliseconds)

		onDestroy(() => {
			clearInterval(interval)
		})

		return interval
	}

	let interval = onInterval(handleChangeover, changeoverSeconds * 1000)
	let animationDisabled = false

	/**
	 * METHODS
	 */

	/**
	 * @param {number} index
	 * Disable auto-advancement automation and select the clicked item
	 */
	const selectItem = (index) => {
		currentlyRevealed = index
		animationDisabled = true
		clearInterval(interval)
	}

	const disableAnimation = () => {
		animationDisabled = true
		clearInterval(interval)
	}

	const next = () => {
		handleChangeover()
		disableAnimation()
	}

	const previous = () => {
		handleChangeover(true)
		disableAnimation()
	}
</script>

<section>
	<nav>
		<ul>
			{#each carouselItems as item, index}
				<li
					on:click={() => selectItem(index)}
					class:currentlyRevealed={index === currentlyRevealed}
				>
					<h2>{item.title}</h2>
					{#if index === currentlyRevealed}
						<div in:fade={{ delay: 250 }} out:fade class="disappearing-content">
							<div
								class="progress"
								style="animation-duration: {animationDisabled || carouselItems.length === 1
									? '0.5'
									: changeoverSeconds}s;"
							/>
							<p class="truncate-overflow">{item.description}</p>
							<a href={item.ctaLinkHref}>{item.ctaLinkText}</a>
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>

	<div class="preview-book">
		<div class="carousel-buttons">
			<FloatingActionButton Icon={ChevronIcon} iconRotation={90} on:click={previous} />
			<FloatingActionButton Icon={ChevronIcon} iconRotation={-90} on:click={next} />
		</div>

		<img
			bind:this={bookImgNode}
			src="https://blog.luminaryhandbook.com/layout-open_blank_blue-spiral.jpg"
			alt="background book to view sample layouts"
		/>

		<div class="book-content">
			<article
				style="height: {bookHeight
					? `${bookHeight}px`
					: `calc(${BOOK_PAGE_HEIGHT_PERCENTAGE} * 100%)`}px;"
			>
				<svelte:component
					this={carouselItems[currentlyRevealed].handbookVectorImgLeft}
					title={carouselItems[currentlyRevealed].title}
					pageSide="left"
				/>
			</article>
			<article
				style="height: {bookHeight
					? `${bookHeight}px`
					: `calc(${BOOK_PAGE_HEIGHT_PERCENTAGE} * 100%)`}px;"
			>
				<svelte:component
					this={carouselItems[currentlyRevealed].handbookVectorImgRight}
					title={carouselItems[currentlyRevealed].title}
					pageSide="right"
				/>
			</article>
		</div>
	</div>

	<div
		class="animated-row"
		style="
			width: calc(70% * {carouselItems.length});
			transform: translateX(calc(-{currentlyRevealed} * (70vw - 2rem)));
		"
	>
		{#each carouselItems as item, index}
			<div
				class="bottom-text"
				style="opacity: {(() => {
					if (index === currentlyRevealed) return '1'
					if (index === currentlyRevealed + 1 || index === currentlyRevealed - 1) return '.42'
				})()};"
			>
				<h2>{item.title}</h2>
				<p class="truncate-overflow">{item.description}</p>
			</div>
		{/each}
	</div>

	<div class="item-progress">
		{#each carouselItems as _, index}
			<button
				on:click={() => selectItem(index)}
				class="item-progress-dot"
				style="background-color: {(() => {
					if (index === currentlyRevealed) return '#D5695C'
					return 'transparent'
				})()};"
			/>
		{/each}
	</div>
</section>

<style>
	@keyframes vertical-progress {
		0% {
			height: 0%;
		}

		100% {
			height: 100%;
		}
	}

	:root {
		--lh: 1.4rem;
		--min-auto-advance-width: 410px;
		line-height: var(--lh);
	}

	/** Pure CSS solution for truncating text */
	.truncate-overflow {
		--max-lines: 3;
		position: relative;
		max-height: calc(var(--lh) * var(--max-lines));
		overflow: hidden;
		padding-right: 1rem; /* space for ellipsis */
		word-break: break-all;
	}

	.truncate-overflow::before {
		position: absolute;
		content: '...';
		inset-block-end: 0; /* "bottom" */
		inset-inline-end: 0; /* "right" */
	}

	.truncate-overflow::after {
		content: '';
		position: absolute;
		inset-inline-end: 0; /* "right" */
		width: 1rem;
		height: 1rem;
		background: white;
	}

	/** Container */
	section {
		display: flex;
		justify-content: flex-end;
		width: 100%;
		max-width: 1460px;
		margin: 0 auto 100px auto;
		/* overflow-x: hidden; */
	}

	/** Auto-advance menu */
	nav {
		margin-top: 60px;
		width: var(--min-auto-advance-width);
		background-color: #ffffff;
	}

	ul {
		list-style: none;
		padding-right: 60px;
		background-color: #ffffff;
	}

	li {
		position: relative;
		border-left: 1px solid #ced3d5;
		padding-left: 24px;
		transition: height 1s;
		height: 27px;
		margin-bottom: 12px;
		will-change: height;
		background-color: #ffffff;
		cursor: pointer;
	}

	.currentlyRevealed {
		transition: height 1s;
		height: 200px;
	}

	.progress {
		position: absolute;
		top: 0;
		left: -2px;
		height: 0%;
		will-change: height;
		animation-name: vertical-progress;
		animation-timing-function: ease-in-out;
		background-color: #d5695c;
		width: 3px;
	}

	.currentlyRevealed .progress {
		height: 100%;
	}

	h2 {
		margin-bottom: 8px;
		color: #ced3d5;
		transition: color 0.5s;
	}

	h2:hover {
		transition-delay: 0;
		transition: color 1s;
		color: #6d7a83;
	}

	.currentlyRevealed h2 {
		color: #6d7a83;
		transition: color 1s;
		transition-delay: 0.25s;
	}

	p {
		line-height: 22px;
		font-size: 14px;
		letter-spacing: 0.07em;
		font-weight: 300;
		color: #707070;
		margin-bottom: 32px;
		width: 100%;
	}

	a {
		display: block;
		color: #6d7a83;
		text-decoration: underline;
		font-weight: 400;
		cursor: pointer;
		margin-bottom: 32px;
	}

	/** Handbook */
	.preview-book {
		position: relative;
		width: calc(100% - var(--min-auto-advance-width));
		height: auto;
	}

	img {
		width: 100%;
	}

	.book-content {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 100%;
		height: 100%;

		display: flex;
		justify-content: space-between;
	}

	article {
		width: calc(40%);
		margin: 5% 5%;
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

	:global(.book-content text) {
		fill: #6d7a83;
		font-weight: 300;
		font-size: 12px;
	}

	.carousel-buttons,
	.animated-row,
	.item-progress {
		display: none;
	}

	@media screen and (max-width: 1460px) {
		section {
			padding: 0 32px 0 0;
		}

		nav {
			margin-top: 16px;
		}
	}

	@media screen and (max-width: 940px) {
		:root {
			--min-auto-advance-width: 332px;
		}

		nav {
			margin-top: 0px;
		}

		ul {
			padding-right: 16px;
		}

		.truncate-overflow {
			--max-lines: 2;
		}

		.currentlyRevealed {
			height: 140px;
		}

		h2 {
			font-size: 1.1em;
		}

		p,
		a {
			margin-bottom: 16px;
		}
	}

	@media screen and (max-width: 785px) {
		section {
			padding: 0 24px;
			flex-direction: column;
		}

		nav {
			display: none;
		}

		.preview-book {
			width: 100%;
		}

		.carousel-buttons {
			position: absolute;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			z-index: 10;
		}

		h2 {
			transition: none;
			transition-delay: none;
			color: #6d7a83;
		}

		.animated-row {
			margin-left: 32px;
			display: flex;
			justify-content: flex-start;
			transition: transform 1s;
		}

		.bottom-text {
			display: block;
			/* padding: 0 32px; */
			width: calc(70vw - 2rem);
			margin: 32px auto 0 0;
			padding-right: 64px;
			transition: opacity 1s;
		}

		.item-progress {
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
			margin: 32px 3.5px;
			cursor: pointer;
		}

		.item-progress-dot:hover {
			background-color: #d5695c55 !important;
			transition: background-color 0.25s;
		}
	}
</style>
