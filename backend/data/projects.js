const projects = [
	{
		title: 'Portfolio Website',
		subTitle: 'Multi-purpose personal portfolio website',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum placerat arcu turpis. Fusce arcu diam, sollicitudin ut nulla non, pellentesque volutpat velit. Pellentesque vitae enim non risus convallis varius ut vitae ante. Curabitur rutrum laoreet sem a ullamcorper. Fusce velit felis, tempor eget porta non, ultricies eget ligula.',
		published: true,
		technologies: {
			language: 'JavaScript',
			framework: 'React',
			library: 'Anime.js',
			database: 'MongoDB',
			stateManagement: 'Redux',
			other: ['Mongoose', 'Express', 'Node'],
		},
		images: {
			thumbnail: {
				name: 'Portfolio Thumbnail',
				image: '/images/portfolio-website-thumbnail',
			},
			icon: {
				name: 'Portfolio Icon',
				image: '/images/portfolio-website-icon',
			},
			articleContent: ['/images/p-a-c-1', '/images/p-a-c-2'],
		},
		links: [
			{
				website: 'Google',
				websiteUrl: 'https://google.com',
			},
			{
				website: 'Github',
				websiteUrl: 'https://github.com',
			},
		],
	},
	{
		title: 'Anime Website',
		subTitle: 'Multi-purpose personal Anime website',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum placerat arcu turpis. Fusce arcu diam, sollicitudin ut nulla non, pellentesque volutpat velit. Pellentesque vitae enim non risus convallis varius ut vitae ante. Curabitur rutrum laoreet sem a ullamcorper. Fusce velit felis, tempor eget porta non, ultricies eget ligula.',
		published: true,
		technologies: {
			language: 'JavaScript',
			framework: 'React',
			library: 'Anime.js',
			database: 'MongoDB',
			stateManagement: 'Redux',
			other: ['Mongoose', 'Express', 'Node'],
		},
		images: {
			thumbnail: {
				name: 'Anime Thumbnail',
				image: '/images/anime-website-thumbnail',
			},
			icon: {
				name: 'Anime Icon',
				image: '/images/anime-website-icon',
			},
			articleContent: ['/images/p-a-c-1', '/images/p-a-c-2'],
		},
		links: [
			{
				website: 'Google',
				websiteUrl: 'https://google.com',
			},
			{
				website: 'Github',
				websiteUrl: 'https://github.com',
			},
		],
	},
];

export default projects;
