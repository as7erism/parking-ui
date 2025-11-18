<script>
	let props = $props();
</script>

<button
	class="button-gray {props.toggle ? 'bg-gray text-white' : 'bg-light-gray'}"
	onclick={props.onclick}
>
	{@render props.children()}
</button>

<style>
	.button-gray {
		transition-duration: 100ms;
		border-radius: 8px;
		padding: 11px;
	}

	.button-gray:hover {
		box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.25);
	}
</style>
