<script>
	export let displayText
</script>

<div>
	Placeholder: {displayText}
</div>

<style>
	div {
		height: 115px;
		width: 115px;
		border-radius: 6px;
		border: 1px dashed var(--luminary-red);
		padding: 8px;
		font-size: 12px;
		line-height: 1.4em;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media screen and (max-width: 1200px) {
		div {
			font-size: 10px;
			height: 75px;
			width: 75px;
		}
	}
</style>
