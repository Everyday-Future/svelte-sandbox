<script>
	import { createEventDispatcher } from 'svelte'
	import Select from 'svelte-select'

	/** @type Array.<{ value: string, label: string }> */
	export let items

	export let loading = false

	export let isClearable = true

	/**
	 * Whether the chevron indicator is displayed
	 * default: true
	 */
	export let showIndicator = true

	/** @type String */
	export let value

	const dispatch = createEventDispatcher()
	const handleSelect = (e) =>
		dispatch('select', {
			value: e.detail.value
		})
</script>

<div class="select-scope">
	<Select
		{items}
		{value}
		on:select={handleSelect}
		inputStyles={`
      cursor: pointer;
    `}
		containerStyles={`
      cursor: pointer;
    `}
		{isClearable}
		{showIndicator}
	/>
</div>

<style>
	.select-scope {
		/** Custom variables for dynamic use in calc */
		--select-height: 56px;
		--indicator-height: 20px;

		/** svelte-select exposed vars */
		--border: 1px solid #abb4bb;
		--borderRadius: calc(var(--select-height) / 2);
		--height: var(--select-height);
		--itemIsActiveBG: #d66a5c;
		--borderFocusColor: #d66a5c;
		--itemHoverBG: rgba(214, 106, 92, 0.2);
		--indicatorTop: calc((var(--select-height) - var(--indicator-height)) / 2);
		--indicatorFill: #7b8794;
		--inputColor: #616f77;
		--placeholder-color: #616f77;
		--listZIndex: 10;
	}
</style>
