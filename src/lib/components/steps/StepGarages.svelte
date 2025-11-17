<script>
	import { onMount } from 'svelte';

	let { onClose, onNext, onBack } = $props();

	let garageOptions = [
		{
			id: 'CCM Garage',
			label: 'CCM Garage',
			coords: [39.129959627672925, -84.51699986372122],
			price: '$187.60'
		},
		{
			id: 'Calhoun Garage',
			label: 'Calhoun Garage',
			coords: [39.1286571388424, -84.5155943861864],
			price: '$169.75'
		},
		{
			id: 'Campus Green Garage',
			label: 'Campus Green Garage',
			coords: [39.1349648654834, -84.51447297939468],
			price: '$169.75'
		},
		{
			id: 'Clifton Court Garage',
			label: 'Clifton Court Garage',
			coords: [39.13430385716343, -84.51740487729688],
			price: '$169.75'
		},
		{
			id: 'Clifton Lot',
			label: 'Clifton Lot',
			coords: [39.13494166002273, -84.52053863379037],
			price: '$98'
		},
		{
			id: 'Corry Garage',
			label: 'Corry Garage',
			coords: [39.12901397324607, -84.51304092322223],
			price: '$112.70'
		},
		{
			id: 'Stratford Heights Garage',
			label: 'Stratford Heights Garage',
			coords: [39.13084717086245, -84.52138555109815],
			price: '$151.90'
		},
		{
			id: 'University Ave Garage',
			label: 'University Ave Garage',
			coords: [39.13423669163427, -84.51143671880064],
			price: '$112.70'
		},
		{
			id: 'Woodside Garage',
			label: 'Woodside Garage',
			coords: [39.13487956550836, -84.51520790463452],
			price: '$151.90'
		}
	];

	let selectedGarage = $state('');
	let map;
	let markers = {};
	let redIcon;
	let blueIcon;

	onMount(async () => {
		const L = await import('leaflet');

		map = L.map('map').setView([39.13202530636713, -84.51608947296735], 16);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; OpenStreetMap contributors'
		}).addTo(map);

		redIcon = L.icon({
			iconUrl:
				'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
			shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
			iconSize: [34, 58],
			iconAnchor: [19, 62],
			popupAnchor: [1, -52],
			shadowSize: [62, 62]
		});

		blueIcon = L.icon({
			iconUrl:
				'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
			shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],
			shadowSize: [41, 41]
		});

		garageOptions.forEach((garage) => {
			const marker = L.marker(garage.coords, { icon: blueIcon }).addTo(map);
			marker.bindPopup(`
				<b>${garage.label}</b><br>
				<i>${garage.price}</i>
			`);

			markers[garage.id] = marker;

			marker.on('click', () => {
				selectGarage(garage);
			});
		});
	});

	function selectGarage(garage) {
		// Reset previous selection
		if (selectedGarage && markers[selectedGarage]) {
			markers[selectedGarage].setIcon(blueIcon);
		}

		selectedGarage = garage.id;
		const marker = markers[garage.id];
		if (marker) {
			marker.setIcon(redIcon);
			map.panTo(garage.coords, { animate: true, duration: 0.5 });
			marker.openPopup();
		}
	}
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
		<div class="flex h-[550px] flex-1 flex-col rounded-lg bg-gray-50 p-4">
			<h3 class="mb-2 text-lg font-semibold">Choose a Garage:</h3>
			<div class="min-h-0 flex-1 space-y-4 overflow-y-auto px-2">
				{#each garageOptions as garage}
					<button
						class="w-full cursor-pointer rounded-lg border-2 p-4 shadow-sm transition duration-200
                        {selectedGarage === garage.id
							? 'scale-101 border-red-button bg-red-50'
							: 'border-gray-200 bg-gray-50'}
                        hover:border-red-button"
						onclick={() => selectGarage(garage)}
					>
						<div class="flex items-center justify-between">
							<div class="text-lg font-bold text-red-button">{garage.label}</div>
							<div class="text-sm font-semibold text-gray-600">{garage.price}</div>
						</div>
					</button>
				{/each}
			</div>
			<!-- {#if selectedGarage}
				<div class="mt-3 shrink-0 rounded-lg border-2 border-red-button bg-red-50 p-3 shadow-md">
					<div class="flex items-center justify-between gap-3">
						<div class="flex-1">
							<p class="text-xs font-semibold tracking-wide text-red-button/70 uppercase">
								Selected Garage
							</p>
							<p class="mt-0.5 text-base font-bold text-gray-800">
								{garageOptions.find((g) => g.id === selectedGarage)?.label}
							</p>
						</div>
						<div class="text-right">
							<p class="text-xs font-medium text-gray-500">Price</p>
							<p class="text-lg font-bold text-red-button">
								{garageOptions.find((g) => g.id === selectedGarage)?.price}
							</p>
						</div>
					</div>
				</div>
			{/if} -->
		</div>
		<div class="flex-1">
			<div class="h-full overflow-hidden rounded-lg border-4 border-gray-200 shadow-lg">
				<div id="map" class="h-full w-full"></div>
			</div>
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

<style>
	@import 'leaflet/dist/leaflet.css';

	#map {
		height: 100%;
		width: 100%;
	}
</style>
