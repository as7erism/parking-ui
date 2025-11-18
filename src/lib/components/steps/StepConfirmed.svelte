<script>
	let { onClose } = $props();
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
	<div class="flex w-full max-w-md flex-col items-center rounded-xl bg-white p-8 shadow-2xl">
		<h2 class="mb-2 text-center text-2xl font-bold">Pass Purchased!</h2>
		<button class="button-red" onclick={onClose}>Close</button>
	</div>
</div>
