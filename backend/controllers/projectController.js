// Dependencies Imports
import asyncHandler from 'express-async-handler';
// ----------------------------------------------------------------------------------------------------
// Utilities Imports
import generateToken from '../utils/generateToken.js';
// ----------------------------------------------------------------------------------------------------
// Models Imports
import Project from '../models/projectModel.js';
import User from '../models/userModel.js';
// ----------------------------------------------------------------------------------------------------
// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const createProject = asyncHandler(async (req, res) => {
	// Destructure Request Body
	// Build objects (technologies, links, images)
	// const technologies = { languages, frameworks, libraries, databases, stateManagement, other };
	// const links = { websiteURL, github };
	// const images = { thumbnail, icon, articleContent };

	// Normalize links in URL
	// for (const [key, value] of Object.entries(links)) {
	// 	if (value && value.length > 0) links[key] = normalize(value, { forceHttps: true });
	// }

	// Build Project
	const project = new Project({
		user: req.user._id,
		title: 'Sample Title',
		subTitle: 'Sample Sub Title',
		description: 'Sample Description',
		technologies: {
			languages: ['Sample Language 1', 'Sample Language 2', 'Sample Language 3'],
			frameworks: ['React', 'VueJS', 'Angular'],
			libraries: ['Next.js'],
			databases: ['MongoDB'],
			stateManagement: 'Redux',
			other: ['MongooseJS', 'ExpressJS', 'NodeJS'],
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
		links: {
			gitHubUrl: 'github.com',
			websiteUrl: 'google.com',
		},
	});

	const createdProject = await project.save();
	res.status(201).json(createdProject);

	// Add to Project Object
	// project.technologies = technologies;
	// project.images = images;
	// project.links = links;

	// if (project) {
	// 	res.status(201).json({
	// 		project,
	// 	});
	// } else {
	// 	res.status(400);
	// 	throw new Error('Invalid project data');
	// }
});
// ----------------------------------------------------------------------------------------------------
// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateProject = asyncHandler(async (req, res) => {
	// const {
	// 	title,
	// 	subTitle,
	// 	description,
	// 	images,
	// 	private,
	// 	technologies,
	// 	links,
	// 	// spread the rest of the fields we don't need to check
	// 	...rest
	// } = req.body;
	// const gitHubUrl = links.gitHub;
	// const websiteUrl = links.URL;
	// const projectFields = {
	// 	user: req.user.id,
	// 	gitHubUrl: gitHubUrl && gitHubUrl !== '' ? normalize(gitHubUrl, { forceHttps: true }) : '',
	// 	websiteURL: websiteURL && websiteURL !== '' ? normalize(websiteURL, { forceHttps: true }) : '',

	// 	skills: Array.isArray(skills) ? skills : skills.split(',').map((skill) => ' ' + skill.trim()),
	// 	...rest,
	// };
	const project = await Project.findById(req.params.id);

	if (project) {
		project.title = req.body.title || project.title;
		project.subTitle = req.body.subTitle || project.subTitle;
		project.description = req.body.description || project.description;
		project.images = req.body.images || project.images;
		project.private = req.body.private || project.private;
		project.technologies.stack = req.body.technologies.stack || project.technologies.stack;
		project.technologies.framework = req.body.technologies.framework || project.technologies.stack;
		project.technologies.stack = req.body.technologies.stack || project.technologies.stack;
		project.technologies.stack = req.body.technologies.stack || project.technologies.stack;
		project.technologies.stack = req.body.technologies.stack || project.technologies.stack;
		project.technologies.stack = req.body.technologies.stack || project.technologies.stack;

		const updatedProject = await project.save();

		res.json({
			_id: updatedProject._id,
			title: updatedProject.title,
			subTitle: updatedProject.subTitle,
			description: updatedProject.description,
			images: updatedProject.images,
			private: updatedProject.private,
		});
	} else {
		res.status(404);
		throw new Error('Project not found');
	}
});
// ----------------------------------------------------------------------------------------------------
// @desc    Get all users
// @route   GET /api/users
// @access  Public
const getProjectById = asyncHandler(async (req, res) => {
	const project = await Project.findById(req.params.id);
	if (project) {
		res.json(project);
	} else {
		res.status(404);
		throw new Error('Project not found');
	}
});
// ----------------------------------------------------------------------------------------------------
// @desc    Find all Projects
// @route   DELETE /api/projects
// @access  Public
const getAllProjects = asyncHandler(async (req, res) => {
	try {
		const projects = await Project.find({});
		res.json(projects);
	} catch (error) {
		res.status(500);
		throw new Error('No projects found');
	}
});
// ----------------------------------------------------------------------------------------------------
// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const deleteProject = asyncHandler(async (req, res) => {
	const project = await Project.findById(req.params.id);
	if (project) {
		await project.remove();
		res.json({ message: 'Project deleted' });
	} else {
		res.status(404);
		throw new Error('Project not found');
	}
});
// ----------------------------------------------------------------------------------------------------
export { createProject, updateProject, getProjectById, getAllProjects, deleteProject };
