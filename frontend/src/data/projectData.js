const language = ['JavaScript', 'CSS', 'HTML'];
const framework = ['Angular', 'Vue', 'React', 'Meteor', 'Ember', 'threejs'];
const frontEnd = ['axios', 'bcryptjs', 'react-router-dom', 'react-three-fiber'];
const backEnd = ['bcryptjs', 'express', 'jsonwebtoken', 'mongoose'];
const dataBase = ['MongoDB'];
const stateManagement = ['redux', 'redux-devtools-extension', 'redux-thunk'];

const loop = (arr) => {
	for (let i in arr.length) {
		i++;
		return arr[i];
	}
};

const projectData = [
	{
		_id: 1,
		title: 'Anitime',
		sub_title: 'A mobile responsive SPA for Anime Enthusiasts',
		description: 'Want to be part of a community of anime enthusiests & join discussions or share opinions?',
		images: [],
		technologies: {
			stack: 'MERN',
			language: [language[0], language[1], language[2]],
			framework: [framework[2]],
			frontEnd: [frontEnd[0], frontEnd[1], frontEnd[2], frontEnd[3]],
			backEnd: [loop(backEnd)],
			dataBase: [dataBase[0]],
			stateManagement: [loop(stateManagement)],
		},
		links: {
			GitHub: 'https://www.example.com',
			URL: 'https://www.example.com',
		},
	},
	{
		_id: 2,
		title: 'Robert Hartley Official',
		sub_title: 'v1.0 Official Homepage which you are currently looking at',
		description: 'A first take of what I would like my vibe to be',
		images: [],
		technologies: {
			stack: 'MERN',
			language: [language[0], language[1], language[2]],
			framework: [framework[2], framework[5]],
			frontEnd: [frontEnd[0], frontEnd[1], frontEnd[2], frontEnd[3]],
			backEnd: [loop(backEnd)],
			dataBase: [dataBase[0]],
			stateManagement: [loop(stateManagement)],
		},
		links: {
			GitHub: 'https://www.example.com',
			URL: 'https://www.example.com',
		},
	},
	{
		_id: 3,
		title: 'Japanavi',
		sub_title: 'A mobile responsive SPA connecting foriegners to Japan',
		description: 'We are here to help you navigate through your journey',
		images: [],
		technologies: {
			stack: 'VERN',
			language: [language[0], language[1], language[2]],
			framework: [framework[1]],
			frontEnd: [frontEnd[0], frontEnd[1], frontEnd[2], frontEnd[3]],
			backEnd: [loop(backEnd)],
			dataBase: [dataBase[0]],
			stateManagement: [loop(stateManagement)],
		},
		links: {
			GitHub: 'https://www.example.com',
			URL: 'https://www.example.com',
		},
	},
	{
		_id: 4,
		title: 'Asobo',
		sub_title: 'A scheduling application for meeting up with friends',
		description: 'An easy way of keeping track of your hangouts with your friends',
		images: [],
		technologies: {
			stack: 'MERN',
			language: [language[0], language[1], language[2]],
			framework: [framework[1]],
			frontEnd: [frontEnd[0], frontEnd[1], frontEnd[2], frontEnd[3]],
			backEnd: [loop(backEnd)],
			dataBase: [dataBase[0]],
			stateManagement: [loop(stateManagement)],
		},
		links: {
			GitHub: 'https://www.example.com',
			URL: 'https://www.example.com',
		},
	},
];

export default projectData;
