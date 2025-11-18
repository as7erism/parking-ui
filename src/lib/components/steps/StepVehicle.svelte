<script>
	import { getPersistent, savePersistent } from '$lib/state.svelte';
	import { onMount } from 'svelte';

	let { onClose, onNext, onBack } = $props();

	const stateOptions = [
		{ code: 'OH', label: 'Ohio' },
		{ code: 'IN', label: 'Indiana' },
		{ code: 'KY', label: 'Kentucky' },
		{ code: 'MI', label: 'Michigan' },
		{ code: 'PA', label: 'Pennsylvania' },
		{ code: 'WV', label: 'West Virginia' },
		{ code: 'AA', label: 'Armed Forces Americas' },
		{ code: 'AB', label: 'Alberta' },
		{ code: 'AE', label: 'Armed Forces Europe' },
		{ code: 'AK', label: 'Alaska' },
		{ code: 'AL', label: 'Alabama' },
		{ code: 'AP', label: 'Armed Forces Pacific' },
		{ code: 'AR', label: 'Arkansas' },
		{ code: 'AS', label: 'American Samoa' },
		{ code: 'AZ', label: 'Arizona' },
		{ code: 'BC', label: 'British Columbia' },
		{ code: 'CA', label: 'California' },
		{ code: 'CO', label: 'Colorado' },
		{ code: 'CT', label: 'Connecticut' },
		{ code: 'DC', label: 'District of Columbia' },
		{ code: 'DE', label: 'Delaware' },
		{ code: 'FL', label: 'Florida' },
		{ code: 'FM', label: 'Federated States of Micronesia' },
		{ code: 'GA', label: 'Georgia' },
		{ code: 'GU', label: 'Guam' },
		{ code: 'HI', label: 'Hawaii' },
		{ code: 'IA', label: 'Iowa' },
		{ code: 'ID', label: 'Idaho' },
		{ code: 'IL', label: 'Illinois' },
		{ code: 'KS', label: 'Kansas' },
		{ code: 'LA', label: 'Louisiana' },
		{ code: 'MA', label: 'Massachusetts' },
		{ code: 'MB', label: 'Manitoba' },
		{ code: 'MD', label: 'Maryland' },
		{ code: 'ME', label: 'Maine' },
		{ code: 'MN', label: 'Minnesota' },
		{ code: 'MO', label: 'Missouri' },
		{ code: 'MS', label: 'Mississippi' },
		{ code: 'MT', label: 'Montana' },
		{ code: 'MX', label: 'Mexico' },
		{ code: 'NC', label: 'North Carolina' },
		{ code: 'ND', label: 'North Dakota' },
		{ code: 'NE', label: 'Nebraska' },
		{ code: 'NH', label: 'New Hampshire' },
		{ code: 'NJ', label: 'New Jersey' },
		{ code: 'NM', label: 'New Mexico' },
		{ code: 'NS', label: 'Nova Scotia' },
		{ code: 'NV', label: 'Nevada' },
		{ code: 'NY', label: 'New York' },
		{ code: 'OK', label: 'Oklahoma' },
		{ code: 'ON', label: 'Ontario' },
		{ code: 'OR', label: 'Oregon' },
		{ code: 'PR', label: 'Puerto Rico' },
		{ code: 'QC', label: 'Quebec' },
		{ code: 'RI', label: 'Rhode Island' },
		{ code: 'SC', label: 'South Carolina' },
		{ code: 'SD', label: 'South Dakota' },
		{ code: 'SK', label: 'Saskatchewan' },
		{ code: 'TN', label: 'Tennessee' },
		{ code: 'TX', label: 'Texas' },
		{ code: 'UT', label: 'Utah' },
		{ code: 'VA', label: 'Virginia' },
		{ code: 'VI', label: 'Virgin Islands' },
		{ code: 'VT', label: 'Vermont' },
		{ code: 'WA', label: 'Washington' },
		{ code: 'WI', label: 'Wisconsin' },
		{ code: 'WY', label: 'Wyoming' },
		{ code: 'OTHER', label: 'OTHER' }
	];

	const makeOptions = [
		'Abarth',
		'Acura',
		'Alfa Romeo',
		'Aston Martin',
		'Audi',
		'Bentley',
		'BMW',
		'Box Truck',
		'Buick',
		'Cadillac',
		'Canam',
		'Chevrolet',
		'Chrysler',
		'Daewoo',
		'Daihatsu',
		'Dodge',
		'DUCATI',
		'Ferrari',
		'Fiat',
		'Fisker',
		'Focus',
		'Ford',
		'Genesis',
		'Geo',
		'GMC',
		'Harley Davidson',
		'Honda',
		'Hummer',
		'Hyundai',
		'Indian',
		'Infiniti',
		'Isuzu',
		'Jaguar',
		'Jeep',
		'Kawasaki',
		'Kia',
		'Lamborghini',
		'Land Rover',
		'Lexus',
		'Lincoln',
		'Lotus',
		'Maserati',
		'Mazda',
		'Mercedes-Benz',
		'Mercury',
		'MG',
		'Mini',
		'Mitsubishi',
		'MOTOR SCOOTER',
		'Nissan',
		'Oldsmobile',
		'Patriot',
		'Plymouth',
		'Polaris',
		'Pontiac',
		'Porsche',
		'Range Rover',
		'Renault',
		'Rivian',
		'Rolls-Royce',
		'Ryvid',
		'Saab',
		'Saturn',
		'Scion',
		'SMART',
		'Subaru',
		'Suzuki',
		'Tesla',
		'Toyota',
		'Triumph',
		'Vespa Motorcycle',
		'Victory Motorcycle',
		'Volkswagen',
		'Volvo',
		'Yamaha',
		'Yugo',
		'OTHER'
	];

	const colorOptions = [
		'Beige',
		'Black',
		'Blue',
		'Brown',
		'Burgundy',
		'Champagne',
		'Gold',
		'Green',
		'Gray',
		'Orange',
		'Pink',
		'Purple',
		'Red',
		'Silver',
		'Tan',
		'White',
		'Yellow',
		'OTHER'
	];

	let vehicles = $state([]);

	onMount(() => {
		vehicles = getPersistent().vehicles;
	});

	let showAddVehicle = $state(false);
	let showEditVehicle = $state(false);
	let editIndex = $state(null);

	// Add form state
	let plate = $state('');
	let stateSel = $state('');
	let stateOther = $state('');
	let makeSel = $state('');
	let makeOther = $state('');
	let model = $state('');
	let colorSel = $state('');
	let colorOther = $state('');

	// Edit form state
	let editPlate = $state('');
	let editStateSel = $state('');
	let editStateOther = $state('');
	let editMakeSel = $state('');
	let editMakeOther = $state('');
	let editModel = $state('');
	let editColorSel = $state('');
	let editColorOther = $state('');

	let selectedVehicles = $state([]);

	function saveVehicle() {
		if (!plate) return;
		vehicles = [
			...vehicles,
			{
				plate,
				state: stateSel === 'OTHER' ? stateOther : stateSel,
				make: makeSel === 'OTHER' ? makeOther : makeSel,
				model,
				color: colorSel === 'OTHER' ? colorOther : colorSel
			}
		];

		let oldState = getPersistent();
		oldState.vehicles = vehicles;
		savePersistent(oldState);
		plate = stateSel = stateOther = makeSel = makeOther = model = colorSel = colorOther = '';
		showAddVehicle = false;
	}

	function toggleSelectVehicle(index) {
		if (selectedVehicles.includes(index)) {
			selectedVehicles = selectedVehicles.filter((i) => i !== index);
		} else {
			selectedVehicles = [...selectedVehicles, index];
		}
	}

	function openEditVehicle(index) {
		const v = vehicles[index];
		editIndex = index;

		editPlate = v.plate;
		editStateSel = v.state;
		editStateOther = '';
		editMakeSel = v.make;
		editMakeOther = '';
		editModel = v.model;
		editColorSel = v.color;
		editColorOther = '';

		showEditVehicle = true;
	}

	function handleEditClick(event, index) {
		event.stopPropagation();
		openEditVehicle(index);
	}

	function updateVehicle() {
		if (editIndex === null || editIndex === undefined) return;

		const updated = {
			plate: editPlate,
			state: editStateSel === 'OTHER' ? editStateOther : editStateSel,
			make: editMakeSel === 'OTHER' ? editMakeOther : editMakeSel,
			model: editModel,
			color: editColorSel === 'OTHER' ? editColorOther : editColorSel
		};

		vehicles = vehicles.map((v, idx) => (idx === editIndex ? updated : v));

		editIndex = null;
		editPlate =
			editStateSel =
			editStateOther =
			editMakeSel =
			editMakeOther =
			editModel =
			editColorSel =
			editColorOther =
				'';
		showEditVehicle = false;
	}

	function deleteVehicle() {
		if (editIndex === null || editIndex === undefined) return;

		if (confirm('Are you sure you want to delete this vehicle?')) {
			vehicles = vehicles.filter((_, idx) => idx !== editIndex);
			selectedVehicles = [];
		}

		editIndex = null;
		showEditVehicle = false;
	}
</script>

<div class="w-2xl space-y-4 rounded-xl bg-white px-6 py-6 shadow-md">
	<div class="mb-2 flex items-center justify-between">
		<div class="w-10 shrink-0"></div>
		<h2 class="flex-1 text-center text-2xl font-bold">Vehicle Selection</h2>
		<button
			class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 pb-1 text-2xl leading-none font-bold text-gray-600 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600"
			onclick={onClose}>&times;</button
		>
	</div>

	<hr class="border-t-2 border-red" />

	<div class="text-center">
		<button class="button-ghost-red" onclick={() => (showAddVehicle = true)}>Add Vehicle</button>
	</div>

	{#if vehicles.length > 0}
		<div class="mt-4 rounded-lg bg-gray-50 p-4">
			<div class="mb-2 text-lg font-semibold">Select a Vehicle</div>

			<div class="flex flex-wrap gap-3">
				{#each vehicles as v, i}
					<div class="plate drop-shadow-xl duration-100 hover:scale-125">
						<button class="relative" onclick={() => toggleSelectVehicle(i)}>
							<img src="./plate.png" class="h-25" class:selected={selectedVehicles.includes(i)} />

							<h3 class="absolute inset-0 top-1.5 flex justify-center text-sm text-white uppercase">
								{v.state}
							</h3>
							<h3
								class="absolute inset-0 top-8 flex justify-center text-3xl uppercase"
								class:selected={selectedVehicles.includes(i)}
							>
								{v.plate}
							</h3>
							<div
								class="absolute inset-0 top-16 flex items-center justify-center space-x-5 text-sm text-white uppercase"
							>
								<h3>{v.make}</h3>
								<h3>{v.model}</h3>
							</div>
						</button>
						<button
							type="button"
							class="edit-icon absolute top-0 right-0 rounded-full border-3 border-red bg-white p-1"
							onclick={(event) => handleEditClick(event, i)}
						>
							<img src="./edit_icon.png" class="h-5" />
						</button>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	<hr class="border-t-2 border-black/10" />
	<div class="flex justify-between space-x-4">
		<button class="button-ghost-black" onclick={onBack}>Back</button>
		<button class="button-red" onclick={onNext}>Next</button>
	</div>
</div>

{#if showAddVehicle}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
		<div class="w-full max-w-xl space-y-4 rounded-xl bg-white p-6 shadow-2xl">
			<h2 class="text-center text-2xl font-bold">Add Vehicle</h2>
			<hr class="border-red-button border-t-2" />

			<input class="w-full rounded-md border p-2" placeholder="Plate #" bind:value={plate} />

			<select class="w-full rounded-md border p-2" bind:value={stateSel}>
				<option value="">State/Prov.</option>
				{#each stateOptions as s}
					<option value={s.label}>{s.label}</option>
				{/each}
			</select>
			{#if stateSel === 'OTHER'}
				<input
					class="w-full rounded-md border p-2"
					placeholder="Enter State/Province"
					bind:value={stateOther}
				/>
			{/if}

			<select class="w-full rounded-md border p-2" bind:value={makeSel}>
				<option value="">Make</option>
				{#each makeOptions as m}
					<option value={m}>{m}</option>
				{/each}
			</select>
			{#if makeSel === 'OTHER'}
				<input
					class="w-full rounded-md border p-2"
					placeholder="Enter Make"
					bind:value={makeOther}
				/>
			{/if}

			<input class="w-full rounded-md border p-2" placeholder="Model" bind:value={model} />

			<select class="w-full rounded-md border p-2" bind:value={colorSel}>
				<option value="">Color</option>
				{#each colorOptions as c}
					<option value={c}>{c}</option>
				{/each}
			</select>
			{#if colorSel === 'OTHER'}
				<input
					class="w-full rounded-md border p-2"
					placeholder="Enter Color"
					bind:value={colorOther}
				/>
			{/if}

			<div class="flex justify-between space-x-4">
				<button class="button-ghost-black" onclick={() => (showAddVehicle = false)}>Cancel</button>
				{#if plate && stateSel && makeSel && model && colorSel}
					<button class="button-red" onclick={saveVehicle}>Save Vehicle</button>
				{:else}
					<button class="button-ghost-black-disabled" disabled>Save Vehicle</button>
				{/if}
			</div>
		</div>
	</div>
{/if}

{#if showEditVehicle}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
		<div class="w-full max-w-xl space-y-4 rounded-xl bg-white p-6 shadow-2xl">
			<h2 class="text-center text-2xl font-bold">Edit Vehicle</h2>
			<hr class="border-red-button border-t-2" />

			<input class="w-full rounded-md border p-2" placeholder="Plate #" bind:value={editPlate} />

			<select class="w-full rounded-md border p-2" bind:value={editStateSel}>
				<option value="">State/Prov.</option>
				{#each stateOptions as s}
					<option value={s.label}>{s.label}</option>
				{/each}
			</select>
			{#if editStateSel === 'OTHER'}
				<input
					class="w-full rounded-md border p-2"
					placeholder="Enter State/Province"
					bind:value={editStateOther}
				/>
			{/if}

			<select class="w-full rounded-md border p-2" bind:value={editMakeSel}>
				<option value="">Make</option>
				{#each makeOptions as m}
					<option value={m}>{m}</option>
				{/each}
			</select>
			{#if editMakeSel === 'OTHER'}
				<input
					class="w-full rounded-md border p-2"
					placeholder="Enter Make"
					bind:value={editMakeOther}
				/>
			{/if}

			<input class="w-full rounded-md border p-2" placeholder="Model" bind:value={editModel} />

			<select class="w-full rounded-md border p-2" bind:value={editColorSel}>
				<option value="">Color</option>
				{#each colorOptions as c}
					<option value={c}>{c}</option>
				{/each}
			</select>
			{#if editColorSel === 'Other'}
				<input
					class="w-full rounded-md border p-2"
					placeholder="Enter Color"
					bind:value={editColorOther}
				/>
			{/if}

			<div class="flex justify-between space-x-4">
				<button
					class="button-ghost-black"
					onclick={() => {
						showEditVehicle = false;
						editIndex = null;
					}}
				>
					Cancel
				</button>

				<button class="button-ghost-black" onclick={deleteVehicle}>Delete</button>
				{#if editPlate && editStateSel && editMakeSel && editModel && editColorSel}
					<button class="button-red" onclick={updateVehicle}>Save Vehicle</button>
				{:else}
					<button class="button-ghost-black-disabled" disabled>Save Vehicle</button>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.selected {
		filter: brightness(0) saturate(100%) invert(17%) sepia(52%) saturate(5949%) hue-rotate(341deg)
			brightness(88%) contrast(118%);
	}

	.edit-icon {
		box-shadow: 3px 3px 5px rgb(0 0 0 / 0.25);
		transition-duration: 100ms;
		opacity: 0;
	}

	.plate:hover .edit-icon {
		opacity: 1;
	}
</style>
