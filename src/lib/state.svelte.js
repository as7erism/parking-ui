let persistent = $state(undefined);

export function getPersistent() {
	if (persistent === undefined) {
		persistent = JSON.parse(localStorage.getItem('persistent'));

		if (persistent === null) {
			savePersistent({
				passes: [
					{
						garage: 'Woodside',
						timeframe: 'Spring 2026'
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
