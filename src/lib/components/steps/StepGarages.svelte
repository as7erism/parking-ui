<script>
	let { onClose, onNext, onBack } = $props();

	let garageOptions = [
		{ id: 'garage1', label: 'Garage 1' },
		{ id: 'garage2', label: 'Garage 2' },
		{ id: 'garage3', label: 'Garage 3' },
		{ id: 'garage4', label: 'Garage 4' }
	];

	let selectedGarage = $state('');
</script>

<div class="w-6xl space-y-4 rounded-xl bg-white px-6 py-6 shadow-md">
	<div class="mb-2 flex items-center justify-between">
		<div class="w-10 shrink-0"></div>
		<h2 class="flex-1 text-center text-2xl font-bold">Garage Selection</h2>
		<button
			class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 pb-1 text-2xl leading-none font-bold text-gray-600 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600"
			onclick={onClose}
			aria-label="Close"
		>
			&times;
		</button>
	</div>
	<hr class="border-t-2 border-red-button" />

	<div class="flex flex-row gap-6">
		<div class="flex-1 rounded-lg bg-gray-50 p-4">
			<h3 class="mb-2 text-lg font-semibold">Garage List</h3>
			<div class="grid grid-cols-1 gap-4">
				{#each garageOptions as garage}
					<div
						class="cursor-pointer rounded-lg border-2 p-4 shadow-sm transition duration-200
                        {selectedGarage === garage.id
							? 'scale-101 border-red-button bg-red-50'
							: 'border-gray-200 bg-gray-50'}
                        hover:border-red-button"
						onclick={() => (selectedGarage = garage.id)}
					>
						<div class="text-center text-lg font-bold text-red-button">{garage.label}</div>
					</div>
				{/each}
			</div>
		</div>
		<div class="flex-1 rounded-lg bg-gray-100 p-4">
			<h3 class="mb-2 text-lg font-semibold">Map</h3>
			<div class="flex h-64 w-full items-center justify-center rounded bg-green-200"></div>
		</div>
	</div>

	<hr class="border-t-2 border-black/10" />

	<div class="flex justify-between space-x-4">
		<button
			class="rounded-md border bg-white px-3 py-1 font-semibold text-black shadow-xl transition duration-100 hover:bg-gray-200"
			onclick={onBack}
		>
			Back
		</button>
		<button
			class="rounded-md bg-light-red-button px-3 py-1 font-semibold text-white shadow-xl transition duration-100 hover:bg-light-red-button-hover"
			onclick={onNext}
		>
			Next
		</button>
	</div>
</div>
