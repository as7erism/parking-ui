// place files you want to import through the `$lib` alias in this folder.

export const semesters = {
	fall2025: { id: 'fall2025', label: 'Fall 2025', dates: '8/15/2025 - 12/31/2025' },
	spring2026: { id: 'spring2026', label: 'Spring 2026', dates: '1/10/2026 - 4/30/2026' }
};

export const locations = {
	branch: { id: 'branch', label: 'Branch Campus Parking' },
	east: { id: 'east', label: 'East Campus Parking Facilities' },
	offcampus: { id: 'offcampus', label: 'Off Campus Housing Parking' },
	west: { id: 'west', label: 'West Campus Parking Facilities' },
	other: { id: 'other', label: 'Other' }
};

export const garages = {
	'CCM Garage': {
		id: 'CCM Garage',
		label: 'CCM Garage',
		coords: [39.129959627672925, -84.51699986372122],
		price: '$187.60'
	},
	'Calhoun Garage': {
		id: 'Calhoun Garage',
		label: 'Calhoun Garage',
		coords: [39.1286571388424, -84.5155943861864],
		price: '$169.75'
	},
	'Campus Green Garage': {
		id: 'Campus Green Garage',
		label: 'Campus Green Garage',
		coords: [39.1349648654834, -84.51447297939468],
		price: '$169.75'
	},
	'Clifton Court Garage': {
		id: 'Clifton Court Garage',
		label: 'Clifton Court Garage',
		coords: [39.13430385716343, -84.51740487729688],
		price: '$169.75'
	},
	'Clifton Lot Garage': {
		id: 'Clifton Lot',
		label: 'Clifton Lot',
		coords: [39.13494166002273, -84.52053863379037],
		price: '$98'
	},
	'Corry Garage': {
		id: 'Corry Garage',
		label: 'Corry Garage',
		coords: [39.12901397324607, -84.51304092322223],
		price: '$112.70'
	},
	'Stratford Heights Garage': {
		id: 'Stratford Heights Garage',
		label: 'Stratford Heights Garage',
		coords: [39.13084717086245, -84.52138555109815],
		price: '$151.90'
	},
	'University Ave Garage': {
		id: 'University Ave Garage',
		label: 'University Ave Garage',
		coords: [39.13423669163427, -84.51143671880064],
		price: '$112.70'
	},
	'Woodside Garage': {
		id: 'Woodside Garage',
		label: 'Woodside Garage',
		coords: [39.13487956550836, -84.51520790463452],
		price: '$151.90'
	}
};
