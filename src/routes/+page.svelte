<script>
	import PermitModal from '$lib/components/PermitModal.svelte';
	let showPermitModal = $state(false);
</script>

<div class="flex justify-center mt-12">
	<button
		class="rounded-md bg-red-button p-2 font-semibold text-white shadow-xl transition duration-100 hover:bg-red-button-hover hover:underline"
		onclick={() => (showPermitModal = true)}
	>
		Order Permit
	</button>
</div>

{#if showPermitModal}
	<PermitModal onClose={() => (showPermitModal = false)} />
{/if}
