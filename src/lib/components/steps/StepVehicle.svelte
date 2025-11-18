<script>
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
		{ code: 'OTHER', label: 'Other' }
	];

	const makeOptions = [
		'Abarth',
		'Acura',
		'ALFA ROMEO',
		'Aston Martin',
		'Audi',
		'Bentley',
		'BMW',
		'Box Truck',
		'Buick',
		'Cadillac',
		'CANAM',
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
		'FOODTRUCK',
		'Ford',
		'Genesis',
		'Geo',
		'GMC',
		'GOLFCART',
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
		'POLARIS',
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
		'Other'
	];

	let vehicles = $state([
		{
			plate: 'ABC1234',
			state: 'Ohio',
			make: 'Ford',
			model: 'F-150',
			color: 'Blue'
		}
	]);

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
				color: colorSel === 'Other' ? colorOther : colorSel
			}
		];

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
			color: editColorSel === 'Other' ? editColorOther : editColorSel
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
		<h2 class="flex-1 text-center text-2xl font-bold">Vehicle Registration</h2>
		<button
			class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 pb-1 text-2xl leading-none font-bold text-gray-600 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600"
			onclick={onClose}>&times;</button
		>
	</div>

	<hr class="border-red-button border-t-2" />

	<div class="text-center">
		<button class="button-ghost-red" onclick={() => (showAddVehicle = true)}> Add Vehicle </button>
	</div>

	{#if vehicles.length > 0}
		<div class="mt-4">
			<div class="mb-2 text-lg font-semibold">Registered Vehicles</div>

			<div class="flex flex-wrap gap-3">
				{#each vehicles as v, i}
					<div
						class="plate_container cursor-pointer"
						class:selected={selectedVehicles.includes(i)}
						onclick={() => toggleSelectVehicle(i)}
					>
						<div class="plate plate-OH">
							<button
								type="button"
								class="edit-icon"
								onclick={(event) => handleEditClick(event, i)}
							>
								✏️
							</button>

							<div class="plate_header">
								<div class="hole"></div>
								{v.state}
								<div class="hole"></div>
							</div>

							<div class="plate_number">
								{v.plate}
							</div>

							<div class="plate_footer">
								<div class="hole"></div>
								<span></span>
								<div class="hole"></div>
							</div>
						</div>
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
			{#if colorSel === 'Other'}
				<input
					class="w-full rounded-md border p-2"
					placeholder="Enter Color"
					bind:value={colorOther}
				/>
			{/if}

			<div class="flex justify-between space-x-4">
				<button class="button-ghost-black" onclick={() => (showAddVehicle = false)}>Cancel</button>
				<button class="button-red" onclick={saveVehicle}>Save Vehicle</button>
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

				<div class="flex space-x-2">
					<button class="button-ghost-black" onclick={deleteVehicle}>Delete Vehicle</button>
					<button class="button-red" onclick={updateVehicle}>Save Changes</button>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.plate_container {
		color: red;
	}

	.plate_number {
		color: black;
		margin: 11px;
	}

	.plate_container .plate {
		display: block;
		position: relative;
		height: 80px;
		width: 160px;
		margin: 0 auto;
		text-align: center;
		border-width: 1px;
		border-style: solid;
		border-radius: 5px;
		transition:
			box-shadow 0.2s ease,
			border-color 0.2s ease,
			transform 0.2s ease;
	}

	.plate_container .plate .plate_header {
		background-color: red;
		color: #fff;
	}

	.plate_container .plate .plate_header,
	.plate_container .plate .plate_footer {
		line-height: 12px;
		font-size: 12px;
		height: 16px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 25px;
	}

	.plate_container .plate .hole {
		height: 4px;
		width: 6px;
		border-radius: 2px;
		background-color: #fff;
		border-style: solid;
		border-width: 1px;
	}

	.plate_container.selected .plate {
		border-color: red !important;
		box-shadow: 0 0 10px rgba(255, 0, 0, 0.6);
	}

	.plate_container:hover .plate {
		border-color: red !important;
		box-shadow: 0 0 10px rgba(255, 0, 0, 0.6);
		cursor: pointer;
	}

	.plate_container .plate .edit-icon {
		position: absolute;
		top: 1px;
		right: 1px;
		background: rgba(255, 255, 255, 0.95);
		border-radius: 9999px;
		border: 1px solid #d1d5db;
		font-size: 10px;
		line-height: 1;
		padding: 2px 4px;
		cursor: pointer;
	}

	.plate_container .plate .edit-icon:hover {
		background: #fee2e2;
		border-color: #ef4444;
	}
</style>