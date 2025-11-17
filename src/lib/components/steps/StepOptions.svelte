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

	let showPermitInfo = $state(false);
	let permitConfirmed = $state(false);

	function confirmPermitInfo() {
		permitConfirmed = true;
		showPermitInfo = false;
	}
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
	<hr class="border-t-2 border-red" />

	<div>
		<div class="mb-2 text-center text-lg font-semibold">
			Please review the following information and confirm
		</div>
		<div class="flex items-center justify-center">
			{#if permitConfirmed}
				<button
					class="rounded-md border bg-red px-4 py-2 font-semibold text-white shadow transition"
					onclick={() => (showPermitInfo = true)}
				>
					Confirmed!
				</button>
			{:else}
				<button class="button-ghost-black" onclick={() => (showPermitInfo = true)}>
					How to Access Parking Facilities
				</button>
			{/if}
		</div>
	</div>

	<hr class="border-t-2 border-black/10" />

	<div>
		<div class="mb-3 text-lg font-semibold">Semester:</div>
		<div class="grid grid-cols-2 gap-4">
			{#each semesterOptions as semester}
				<button
					class="cursor-pointer rounded-lg border-2 p-4 shadow-sm transition duration-200
                        {selectedSemester === semester.id
						? 'scale-101 border-red bg-red-50'
						: 'border-gray-200 bg-gray-50'}
                        hover:border-red"
					onclick={() => (selectedSemester = semester.id)}
				>
					<div class="text-center text-lg font-bold">{semester.label}</div>
					<div class="mt-2 text-center text-sm">{semester.dates}</div>
				</button>
			{/each}
		</div>
	</div>

	<hr class="border-t-2 border-black/10" />

	<div>
		<div class="mt-6 mb-3 text-lg font-semibold">Location:</div>
		<div class="grid grid-cols-2 gap-4">
			{#each locationOptions as location}
				<button
					class="cursor-pointer rounded-lg border-2 p-4 shadow-sm transition duration-200
                        {selectedLocation === location.id
						? 'scale-101 border-red bg-red-50'
						: 'border-gray-200 bg-gray-50'}
                        hover:border-red"
					onclick={() => (selectedLocation = location.id)}
				>
					<div class="text-center font-bold text-gray-800">{location.label}</div>
				</button>
			{/each}
		</div>
	</div>

	<hr class="border-t-2 border-black/10" />

	<div class="flex justify-end space-x-4">
		<button class="button-red" onclick={onNext}> Next </button>
	</div>
</div>

{#if showPermitInfo}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
		<div class="w-full max-w-xl rounded-xl bg-white p-8 shadow-2xl">
			<h2 class="mb-2 text-center text-2xl font-bold">How To Access Parking Facilities</h2>

			<hr class="border-t-2 border-red" />

			<p class="mt-2 mb-2 text-center">
				To access gated facilities, the parking permission will be assigned to your Bearcat Card
				within 2 hours of purchase. For hands-free access, please purchase a <span class="font-bold"
					>Fast Pass</span
				> under the 'Order Permits' page.
			</p>
			<p class="mb-2 text-center">
				Parking and Transportation Services uses license plate recognition, LPR, to enforce policies
				around parking.
				<span class="font-bold"
					>It is imperative that vehicle information is kept up-to-date in the parking system.</span
				>
				This ensures parking spaces are available for permit-holders and that permit-holders can be contacted
				in case of emergency. It is the responsibility of the permit-holder to keep vehicle information
				updated. Failure to do so could result in a citation or impoundment. More than one vehicle can
				be registered to a permit, but only one vehicle may be parked in the facility at a time.
			</p>
			<p class="mb-4 text-center font-bold">
				Please note, a UC Fast Pass is not considered a garage hangtag or proof of permit.
			</p>

			<hr class="border-t-2 border-black/10" />

			<p class="mt-2 mb-4 text-center font-bold">
				Confirm you have read and understood the information above.
			</p>

			<div class="flex justify-between space-x-4">
				<button
					class="rounded-md border bg-white px-3 py-1 font-semibold text-black shadow-xl transition duration-100 hover:bg-gray-200"
					onclick={() => (showPermitInfo = false)}
				>
					Cancel
				</button>
				<button
					class="hover:bg-light-red-hover rounded-md bg-light-red px-3 py-1 font-semibold text-white shadow-xl transition duration-100"
					onclick={confirmPermitInfo}
				>
					Confirm
				</button>
			</div>
		</div>
	</div>
{/if}
