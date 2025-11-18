let persistent = $state(undefined);

export function getPersistent() {
	if (persistent === undefined) {
		persistent = JSON.parse(localStorage.getItem('persistent'));

		if (persistent === null) {
			savePersistent({
				passes: [
					{
						garage: 'Woodside Garage',
						semester: 'spring2026',
						vehicles: [
							{
								plate: 'ABC1234',
								stats: 'OH',
								make: 'Honda',
								model: 'Civic',
								color: 'Black'
							}
						]
					}
				],
				vehicles: [
					{
						plate: 'ABC1234',
						state: 'OH',
						make: 'Honda',
						model: 'Civic',
						color: 'Black'
					}
				]
			});
		}
	}

	return persistent;
}

export function savePersistent(data) {
	persistent = data;
	localStorage.setItem('persistent', JSON.stringify(persistent));
}

export const orderState = $state({
	termsAccepted: false,
	location: null,
	semester: null,
	garage: null,
	vehicles: []
});

export function resetOrder() {
	orderState.location = null;
	orderState.semester = null;
	orderState.garage = null;
	orderState.vehicles = [];
}
