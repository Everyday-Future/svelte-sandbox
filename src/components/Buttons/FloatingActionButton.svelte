<script>
	import ChevronIcon from '../Icons/ChevronIcon.svelte'

	/** @type {any} A Svelte icon component */
	export let Icon

	/** @type {number} A rotational value in degrees */
	export let iconRotation

	/** @type {string} A CSS background-color value */
	export let backgroundColor = '#E8EAEB'
</script>

<button style="background-color: {backgroundColor};" on:click>
	<Icon rotation={iconRotation} />
</button>

<style>
	button {
		border-radius: 50%;
		height: 33px;
		width: 33px;
		border: none;
		box-shadow: 2px 2px 3px #00000029;
		cursor: pointer;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	:global(button > svg) {
		height: 12px;
		width: 12px;
		margin-top: 2px;
	}
</style>
