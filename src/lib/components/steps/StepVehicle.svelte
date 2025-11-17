<script>
	let { onClose, onNext, onBack } = $props();

	const stateOptions = [
		{ code: "OH", label: "Ohio" },
		{ code: "IN", label: "Indiana" },
		{ code: "KY", label: "Kentucky" },
		{ code: "MI", label: "Michigan" },
		{ code: "PA", label: "Pennsylvania" },
		{ code: "WV", label: "West Virginia" },
		{ code: "AA", label: "Armed Forces Americas" },
		{ code: "AB", label: "Alberta" },
		{ code: "AE", label: "Armed Forces Europe" },
		{ code: "AK", label: "Alaska" },
		{ code: "AL", label: "Alabama" },
		{ code: "AP", label: "Armed Forces Pacific" },
		{ code: "AR", label: "Arkansas" },
		{ code: "AS", label: "American Samoa" },
		{ code: "AZ", label: "Arizona" },
		{ code: "BC", label: "British Columbia" },
		{ code: "CA", label: "California" },
		{ code: "CO", label: "Colorado" },
		{ code: "CT", label: "Connecticut" },
		{ code: "DC", label: "District of Columbia" },
		{ code: "DE", label: "Delaware" },
		{ code: "FL", label: "Florida" },
		{ code: "FM", label: "Federated States of Micronesia" },
		{ code: "GA", label: "Georgia" },
		{ code: "GU", label: "Guam" },
		{ code: "HI", label: "Hawaii" },
		{ code: "IA", label: "Iowa" },
		{ code: "ID", label: "Idaho" },
		{ code: "IL", label: "Illinois" },
		{ code: "KS", label: "Kansas" },
		{ code: "LA", label: "Louisiana" },
		{ code: "MA", label: "Massachusetts" },
		{ code: "MB", label: "Manitoba" },
		{ code: "MD", label: "Maryland" },
		{ code: "ME", label: "Maine" },
		{ code: "MN", label: "Minnesota" },
		{ code: "MO", label: "Missouri" },
		{ code: "MS", label: "Mississippi" },
		{ code: "MT", label: "Montana" },
		{ code: "MX", label: "Mexico" },
		{ code: "NC", label: "North Carolina" },
		{ code: "ND", label: "North Dakota" },
		{ code: "NE", label: "Nebraska" },
		{ code: "NH", label: "New Hampshire" },
		{ code: "NJ", label: "New Jersey" },
		{ code: "NM", label: "New Mexico" },
		{ code: "NS", label: "Nova Scotia" },
		{ code: "NV", label: "Nevada" },
		{ code: "NY", label: "New York" },
		{ code: "OK", label: "Oklahoma" },
		{ code: "ON", label: "Ontario" },
		{ code: "OR", label: "Oregon" },
		{ code: "PR", label: "Puerto Rico" },
		{ code: "QC", label: "Quebec" },
		{ code: "RI", label: "Rhode Island" },
		{ code: "SC", label: "South Carolina" },
		{ code: "SD", label: "South Dakota" },
		{ code: "SK", label: "Saskatchewan" },
		{ code: "TN", label: "Tennessee" },
		{ code: "TX", label: "Texas" },
		{ code: "UT", label: "Utah" },
		{ code: "VA", label: "Virginia" },
		{ code: "VI", label: "Virgin Islands" },
		{ code: "VT", label: "Vermont" },
		{ code: "WA", label: "Washington" },
		{ code: "WI", label: "Wisconsin" },
		{ code: "WY", label: "Wyoming" },
		{ code: "OTHER", label: "Other" }
	];

	const makeOptions = [
		"Abarth","Acura","ALFA ROMEO","Aston Martin","Audi","Bentley","BMW","Box Truck","Buick","Cadillac","CANAM","Chevrolet","Chrysler","Daewoo","Daihatsu","Dodge","DUCATI","Ferrari","Fiat","Fisker","Focus","FOODTRUCK","Ford","Genesis","Geo","GMC","GOLFCART","Harley Davidson","Honda","Hummer","Hyundai","Indian","Infiniti","Isuzu","Jaguar","Jeep","Kawasaki","Kia","Lamborghini","Land Rover","Lexus","Lincoln","Lotus","Maserati","Mazda","Mercedes-Benz","Mercury","MG","Mini","Mitsubishi","MOTOR SCOOTER","Nissan","Oldsmobile","Patriot","Plymouth","POLARIS","Pontiac","Porsche","Range Rover","Renault","Rivian","Rolls-Royce","Ryvid","Saab","Saturn","Scion","SMART","Subaru","Suzuki","Tesla","Toyota","Triumph","Vespa Motorcycle","Victory Motorcycle","Volkswagen","Volvo","Yamaha","Yugo","OTHER"
	];

	const colorOptions = [
		"Beige","Black","Blue","Brown","Burgundy","Champagne","Gold","Green","Gray","Orange","Pink","Purple","Red","Silver","Tan","White","Yellow","Other"
	];

	let vehicles = $state([]);

	let showAddVehicle = $state(false);
	let plate = $state('');
	let stateSel = $state('');
	let stateOther = $state('');
	let makeSel = $state('');
	let makeOther = $state('');
	let model = $state('');
	let colorSel = $state('');
	let colorOther = $state('');

	function saveVehicle() {
		if (!plate) return;

		vehicles = [
			...vehicles,
			{
				plate,
				state: stateSel === "OTHER" ? stateOther : stateSel,
				make: makeSel === "OTHER" ? makeOther : makeSel,
				model,
				color: colorSel === "Other" ? colorOther : colorSel
			}
		];

		// reset
		plate = stateSel = stateOther = makeSel = makeOther = model = colorSel = colorOther = '';
		showAddVehicle = false;
	}
</script>

<div class="w-2xl space-y-4 rounded-xl bg-white px-6 py-6 shadow-md">
	<div class="mb-2 flex items-center justify-between">
		<div class="w-10 shrink-0"></div>
		<h2 class="flex-1 text-center text-2xl font-bold">Vehicle Registration</h2>
		<button
			class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 pb-1 text-2xl leading-none font-bold text-gray-600 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600"
			onclick={onClose}
		>&times;</button>
	</div>

	<hr class="border-t-2 border-red-button" />

	<div class="text-center">
		<button class="rounded-md border bg-white px-4 py-2 font-semibold text-black shadow transition hover:bg-gray-200"
			onclick={() => (showAddVehicle = true)}>
			Add Vehicle
		</button>
	</div>

	{#if vehicles.length > 0}
        <div class="mt-4">
            <div class="text-lg font-semibold mb-2">Registered Vehicles:</div>

            <div class="flex flex-wrap gap-3">
                {#each vehicles as v}
                    <div class="plate_container">
                        <div class="plate plate-OH">
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
		<button class="rounded-md border bg-white px-3 py-1 font-semibold text-black shadow-xl hover:bg-gray-200" onclick={onBack}>Back</button>
		<button class="rounded-md bg-light-red-button px-3 py-1 font-semibold text-white shadow-xl hover:bg-light-red-button-hover" onClick={onNext}>Next</button>
	</div>
</div>

{#if showAddVehicle}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
		<div class="w-full max-w-xl rounded-xl bg-white p-6 shadow-2xl space-y-4">

			<h2 class="text-center text-2xl font-bold">Add Vehicle</h2>
			<hr class="border-t-2 border-red-button" />

			<input class="rounded-md border p-2 w-full" placeholder="Plate #" bind:value={plate} />

			<select class="rounded-md border p-2 w-full" bind:value={stateSel}>
				<option value="">State/Prov.</option>
				{#each stateOptions as s}
					<option value={s.label}>{s.label}</option>
				{/each}
			</select>
			{#if stateSel === "OTHER"}
				<input class="rounded-md border p-2 w-full" placeholder="Enter State/Province" bind:value={stateOther} />
			{/if}

			<select class="rounded-md border p-2 w-full" bind:value={makeSel}>
				<option value="">Make</option>
				{#each makeOptions as m}
					<option value={m}>{m}</option>
				{/each}
			</select>
			{#if makeSel === "OTHER"}
				<input class="rounded-md border p-2 w-full" placeholder="Enter Make" bind:value={makeOther} />
			{/if}

			<input class="rounded-md border p-2 w-full" placeholder="Model" bind:value={model} />

			<select class="rounded-md border p-2 w-full" bind:value={colorSel}>
				<option value="">Color</option>
				{#each colorOptions as c}
					<option value={c}>{c}</option>
				{/each}
			</select>
			{#if colorSel === "Other"}
				<input class="rounded-md border p-2 w-full" placeholder="Enter Color" bind:value={colorOther} />
			{/if}

			<div class="flex justify-between space-x-4">
				<button class="rounded-md border bg-white px-3 py-1 font-semibold text-black shadow-xl hover:bg-gray-200"
					onclick={() => (showAddVehicle = false)}>Cancel</button>
				<button class="rounded-md bg-light-red-button px-3 py-1 font-semibold text-white shadow-xl hover:bg-light-red-button-hover"
					onclick={saveVehicle}>Save Vehicle</button>
			</div>
		</div>
	</div>
{/if}

<style>
.plate_container{
    color: red;
}

.plate_number{
    color: black;
    margin: 11px;
}

.plate_container .plate {
 display :block;
 position :relative;
 height :80px;
 width :160px;
 margin :0 auto;
 text-align :center;
 border-width :1px;
 border-style :solid;
 border-radius :5px;
}

.plate_container .plate .plate_header{
    background-color: red;
    color: #fff;
}

.plate_container .plate .plate_header, .plate_container .plate .plate_footer {
 line-height :12px;
 font-size :12px;
 height :16px;
 margin :0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
}

.plate_container .plate .hole {
height :4px;
width :6px;
border-radius :2px;
background-color :#fff;
border-style :solid;
border-width :1px;

}
</style>
