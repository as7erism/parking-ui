<script>
	import { locations, semesters, garages } from '$lib';
	import { getPersistent, orderState } from '$lib/state.svelte';
	import { onMount } from 'svelte';

	let { onClose, onNext, onBack } = $props();

	let vehicles = $state([]);

	onMount(() => {
		vehicles = getPersistent().vehicles;
	});
</script>

<div class="w-2xl space-y-4 rounded-xl bg-white px-6 py-6 shadow-md">
	<div class="mb-2 flex items-center justify-between">
		<div class="w-10 shrink-0"></div>
		<h2 class="flex-1 text-center text-2xl font-bold">Pass Overview</h2>
		<button
			class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 pb-1 text-2xl leading-none font-bold text-gray-600 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600"
			onclick={onClose}
			aria-label="Close"
		>
			&times;
		</button>
	</div>
	<hr class="border-t-2 border-red" />

	<div class="space-y-5 px-2">
		<div class="grid grid-cols-2 space-x-4">
			<div class="flex-1">
				<h3 class="mb-2 text-lg font-semibold">Semester</h3>
				<div
					class="flex h-full max-h-22 flex-col justify-center rounded-lg bg-light-gray px-4 py-3"
				>
					<div class="text-center text-lg font-bold">{semesters[orderState.semester].label}</div>
					<div class="mt-1 text-center text-sm text-gray">
						{semesters[orderState.semester].dates}
					</div>
				</div>
			</div>

			<div class="flex-1">
				<h3 class="mb-2 text-lg font-semibold">Location</h3>
				<div
					class="flex h-full max-h-22 items-center justify-center rounded-lg bg-light-gray px-4 py-3"
				>
					<div class="text-center text-lg font-bold">{locations[orderState.location].label}</div>
				</div>
			</div>
		</div>

		<div>
			<h3 class="mb-2 text-lg font-semibold">Garage</h3>
			<div class="rounded-lg bg-light-gray px-4 py-3">
				<div class="flex items-center justify-between">
					<div class="text-lg font-bold">{garages[orderState.garage].label}</div>
					<div class="text-lg font-bold">{garages[orderState.garage].price}</div>
				</div>
			</div>
		</div>

		<div>
			<h3 class="mb-2 text-lg font-semibold">
				Vehicles {orderState.vehicles.length > 0 ? `(${orderState.vehicles.length})` : ''}
			</h3>
			{#if orderState.vehicles.length > 0 && vehicles.length > 0}
				<div class="max-h-38 space-y-2 overflow-y-auto">
					{#each orderState.vehicles as vehicleIndex}
						<div class="flex items-center justify-between rounded-lg bg-light-gray px-4 py-3">
							<div class="flex items-center space-x-3">
								<span class="rounded bg-red px-2 py-1 font-mono font-bold text-white"
									>{vehicles[vehicleIndex].plate}</span
								>
								<span class="text-sm text-gray">{vehicles[vehicleIndex].state}</span>
							</div>
							<span class="font-medium"
								>{vehicles[vehicleIndex].year}
								{vehicles[vehicleIndex].make}
								{vehicles[vehicleIndex].model} - {vehicles[vehicleIndex].color}</span
							>
						</div>
					{/each}
				</div>
			{:else}
				<div
					class="rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-center text-gray-500"
				>
					No vehicles selected
				</div>
			{/if}
		</div>
	</div>

	<hr class="border-t-2 border-black/10" />

	<div class="flex justify-between space-x-4">
		<button class="button-ghost-black" onclick={onBack}>Back</button>
		<div class="flex space-x-4">
			<button class="button-ghost-red" onclick={onNext}>Add to Semester Bill</button>
			<button class="button-red" onclick={onNext}>Go to Checkout</button>
		</div>
	</div>
</div>
