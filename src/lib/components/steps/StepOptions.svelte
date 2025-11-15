<script>
	let { onClose, onNext } = $props();

	let semesterOptions = [
		{ id: 'fall2025', label: 'Fall 2025', dates: '8/15/2025 - 12/31/2025' },
		{ id: 'spring2026', label: 'Spring 2026', dates: '1/10/2026 - 4/30/2026' }
	];

	let locationOptions = [
		{ id: 'branch', label: 'Branch Campus Parking' },
		{ id: 'east', label: 'East Campus Parking Facilities' },
		{ id: 'offcampus', label: 'Off Campus Housing Parking' },
		{ id: 'west', label: 'West Campus Parking Facilities' },
		{ id: 'other', label: 'Other' }
	];

	let selectedSemester = $state('');
	let selectedLocation = $state('');
</script>

<div class="w-2xl space-y-4 rounded-xl bg-white px-6 py-6 shadow-md">
	<div class="mb-2 flex items-center justify-between">
		<div class="w-10 shrink-0"></div>
		<h2 class="flex-1 text-center text-2xl font-bold">Permit Options</h2>
		<button
			class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 pb-1 text-2xl leading-none font-bold text-gray-600 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600"
			onclick={onClose}
			aria-label="Close"
		>
			&times;
		</button>
	</div>
	<hr class="border-t-2 border-red-button" />

	<div>
		<div class="mb-3 text-lg font-semibold">Semester:</div>
		<div class="grid grid-cols-2 gap-4">
			{#each semesterOptions as semester}
				<div
					class="cursor-pointer rounded-lg border-2 p-4 shadow-sm transition
                        {selectedSemester === semester.id
						? 'scale-101 border-red-button bg-red-50'
						: 'border-gray-200 bg-gray-50'}
                        hover:border-red-button"
					onclick={() => (selectedSemester = semester.id)}
				>
					<div class="text-center text-lg font-bold text-red-button">{semester.label}</div>
					<div class="mt-2 text-center text-sm text-gray-800">{semester.dates}</div>
				</div>
			{/each}
		</div>
	</div>

	<hr class="border-t-2 border-black/10" />

	<div>
		<div class="mt-6 mb-3 text-lg font-semibold">Location:</div>
		<div class="grid grid-cols-2 gap-4">
			{#each locationOptions as location}
				<div
					class="cursor-pointer rounded-lg border-2 p-4 shadow-sm transition
                        {selectedLocation === location.id
						? 'scale-101 border-red-button bg-red-50'
						: 'border-gray-200 bg-gray-50'}
                        hover:border-red-button"
					onclick={() => (selectedLocation = location.id)}
				>
					<div class="text-center font-bold text-gray-800">{location.label}</div>
				</div>
			{/each}
		</div>
	</div>

	<hr class="border-t-2 border-black/10" />

	<div class="flex justify-end space-x-4">
		<button
			class="rounded-md bg-light-red-button px-3 py-1 font-semibold text-white shadow-xl transition duration-100 hover:bg-light-red-button-hover"
			onclick={onNext}
		>
			Next
		</button>
	</div>
</div>
