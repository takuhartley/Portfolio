import bcrypt from 'bcryptjs';

const projects = [
	{
		_id: '1',
		technologies: {
			language: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
			framework: ['React'],
			database: ['MongoDB'],
			stateManagement: ['Redux'],
			other: ['Mongoose', 'Express', 'Node'],
		},
		// The privacy of the project post = published or unpublished
		published: false,
		user: '601ba47219228de1805b3b5e',
		title: 'Portfolio Website',
		subTitle: 'Multi-purpose personal portfolio website',
		description: "This website was created, with the idea of my own growth. I've had a w...",
		// There should only be 1 link to the website
		links: 'google.com',
		images: {
			thumbnail: 'image',
			icon: 'image2',
			header: 'image3',
			additional: [],
		},
	},
	{
		_id: '2',
		technologies: {
			language: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
			framework: ['React'],
			database: ['MongoDB'],
			stateManagement: ['Redux'],
			other: ['Mongoose', 'Express', 'Node'],
		},
		// The privacy of the project post = published or unpublished
		published: false,
		user: '601ba47219228de1805b3b5e',
		title: 'Portfolio Website',
		subTitle: 'Multi-purpose personal portfolio website',
		description: "This website was created, with the idea of my own growth. I've had a w...",
		// There should only be 1 link to the website
		links: 'google.com',
		images: {
			thumbnail: 'image',
			icon: 'image2',
			header: 'image3',
			additional: [],
		},
	},
	{
		_id: '3',
		technologies: {
			language: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
			framework: ['React'],
			database: ['MongoDB'],
			stateManagement: ['Redux'],
			other: ['Mongoose', 'Express', 'Node'],
		},
		// The privacy of the project post = published or unpublished
		published: false,
		user: '601ba47219228de1805b3b5e',
		title: 'Portfolio Website',
		subTitle: 'Multi-purpose personal portfolio website',
		description: "This website was created, with the idea of my own growth. I've had a w...",
		// There should only be 1 link to the website
		links: 'google.com',
		images: {
			thumbnail: 'image',
			icon: 'image2',
			header: 'image3',
			additional: [],
		},
	},
];

export default projects;
