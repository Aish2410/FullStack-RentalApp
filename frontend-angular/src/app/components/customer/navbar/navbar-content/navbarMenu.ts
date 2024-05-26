export const navigation = {
	Property: {
		id: 'property',
		name: 'Properties',
		featured: [
			{
				name: 'New Listings',
				href: '/',
				imageSrc: 'https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799631.jpg?size=626&ext=jpg&ga=GA1.1.1437219914.1716646347&semt=ais_user',
				imageAlt: 'Property',
			},
			{
				name: 'Popular Locations',
				href: '/',
				imageSrc: 'https://images4.alphacoders.com/829/thumb-1920-829688.jpg',
			},
		],
		sections: [
			{
				id: 'types',
				name: 'Property Types',
				items: [
					{ name: 'Apartments', id: 'apartment', href: '/properties/apartments' },
					{ name: 'Villas', id: 'villa', href: '/properties/villas' },
					{ name: 'Commercial Spaces', id: 'commercial', href: '/properties/commercial' },
					{ name: 'Offices', id: 'office', href: '/properties/offices' },
					{ name: 'Warehouses', id: 'warehouse', href: '/properties/warehouses' },
				],
			},
			{
				id: 'locations',
				name: 'Locations',
				items: [
					{ name: 'Downtown', id: 'downtown', href: '/locations/downtown' },
					{ name: 'Suburbs', id: 'suburbs', href: '/locations/suburbs' },
					{ name: 'Beachfront', id: 'beachfront', href: '/locations/beachfront' },
					{ name: 'Countryside', id: 'countryside', href: '/locations/countryside' },
				],
			},
			{
				id: 'amenities',
				name: 'Amenities',
				items: [
					{ name: 'Swimming Pool', id: 'pool', href: '/amenities/pool' },
					{ name: 'Gym', id: 'gym', href: '/amenities/gym' },
					{ name: 'Parking', id: 'parking', href: '/amenities/parking' },
					{ name: 'Wi-Fi', id: 'wifi', href: '/amenities/wifi' },
					{ name: 'Pet Friendly', id: 'pet-friendly', href: '/amenities/pet-friendly' },
				],
			},
		],
	},
	Agents: {
		id: 'agents',
		name: 'Agents',
		featured: [
			{
				name: 'Top Rated',
				id: '#',
				imageSrc: '',
			},
			{
				name: 'New Agents',
				id: '#',
				imageSrc: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
			},
		],
		sections: [
			{
				id: 'regions',
				name: 'Regions',
				items: [
					{ name: 'North', id: 'north', href: '/agents/north' },
					{ name: 'South', id: 'south', href: '/agents/south' },
					{ name: 'East', id: 'east', href: '/agents/east' },
					{ name: 'West', id: 'west', href: '/agents/west' },
				],
			},
		],
	},
	Services: {
		id: 'services',
		name: 'Services',
		sections: [
			{
				id: 'property-management',
				name: 'Property Management',
				items: [
					{ name: 'Maintenance', id: 'maintenance', href: '/services/maintenance' },
					{ name: 'Cleaning', id: 'cleaning', href: '/services/cleaning' },
					{ name: 'Security', id: 'security', href: '/services/security' },
				],
			},
			{
				id: 'legal',
				name: 'Legal Services',
				items: [
					{ name: 'Lease Agreements', id: 'lease-agreements', href: '/services/lease-agreements' },
					{ name: 'Property Disputes', id: 'property-disputes', href: '/services/property-disputes' },
				],
			},
		],
	},
};

