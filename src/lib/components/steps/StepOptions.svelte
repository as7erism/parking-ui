<script>
	import ButtonGray from '../ButtonGray.svelte';

	let { onClose, onNext, onBack } = $props();

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

<div class="w-2xl space-y-3 rounded-xl bg-white px-6 py-6 shadow-md">
	<div class="mb-2 flex items-center justify-between">
		<div class="w-10 shrink-0"></div>
		<h2 class="flex-1 text-center text-2xl font-bold">Pass Options</h2>
		<button
			class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 pb-1 text-2xl leading-none font-bold text-gray-600 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600"
			onclick={onClose}
			aria-label="Close"
		>
			&times;
		</button>
	</div>
	<hr class="border-t-2 border-red" />

	<div class="h-80 overflow-y-auto px-4 pb-3">
		<div class="mb-1 text-lg font-semibold">Semester</div>
		<div class="mb-3 grid grid-cols-2 gap-4">
			{#each semesterOptions as semester}
				<ButtonGray
					toggle={selectedSemester === semester.id}
					onclick={() => (selectedSemester = semester.id)}
				>
					<div class="text-center text-lg font-bold">{semester.label}</div>
					<div class="mt-1 text-center text-sm">{semester.dates}</div>
				</ButtonGray>
			{/each}
		</div>

		<!-- <hr class="border-t-2 border-black/10" /> -->

		<div class="text-lg font-semibold">Location</div>
		<div class="grid grid-cols-2 gap-3">
			{#each locationOptions as location}
				<ButtonGray
					toggle={selectedLocation === location.id}
					onclick={() => (selectedLocation = location.id)}
				>
					<div class="text-center font-bold">{location.label}</div>
				</ButtonGray>
			{/each}
		</div>
	</div>

	<hr class="border-t-2 border-black/10" />

	<div class="flex justify-between space-x-4">
		<button class="button-ghost-black" onclick={onBack}> Back </button>
		{#if selectedSemester && selectedLocation}
			<button class="button-red" onclick={onNext}> Next </button>
		{:else}
			<button class="button-ghost-black-disabled" disabled> Next </button>
		{/if}
	</div>
</div>
