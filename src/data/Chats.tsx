export default {
	id: '1',
	users: [{
		id: '1',
		user: 'David'
	}, {
		id: '3',
		user: 'Julio'
	}],
	messages: [{
		id: '1',
		content: 'How are you, Julio!',
		createdAt: '2020-10-10T12:48:00.000Z',
		user: {
			id: '1',
			user: 'David',
		},
	}, {
		id: '2',
		content: 'I am good, good',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: '3',
			user: 'Julio',
		},
	}, {
		id: '3',
		content: 'What about you?',
		createdAt: '2020-10-03T14:49:40.000Z',
		user: {
			id: '3',
			user: 'Julio',
		},
	}, {
		id: '4',
		content: 'Good as well, preparing for the stream now.',
		createdAt: '2020-10-03T14:50:00.000Z',
		user: {
			id: '1',
			user: 'David',
		},
	}, {
		id: '5',
		content: 'How is your uni going?',
		createdAt: '2020-10-03T14:51:00.000Z',
		user: {
			id: '1',
			user: 'David',
		},
	}, {
		id: '6',
		content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: '3',
			user: 'Julio',
		},
	}, {
		id: '7',
		content: 'Big Data is really interesting. Cannot wait to go through all the material.',
		createdAt: '2020-10-03T14:53:00.000Z',
		user: {
			id: '1',
			user: 'David',
		},
	}]
}