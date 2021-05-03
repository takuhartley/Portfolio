import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// ----------------------------------------------------------------------------------------------------
const ProjectSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users',
	},
	title: {
		type: String,
		required: true,
	},
	subTitle: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	images: {
		headerImage: {
			type: String,
		},
		mainImage: {
			type: String,
		},
		subImage: {
			type: String,
		},
		imageCollection: [],
	},
	privateStatus: {
		type: Boolean,
		default: true,
	},
	technologies: {
		stack: { type: String },
		language: { type: [String] },
		framework: { type: [String] },
		database: { type: [String] },
		stateManagement: { type: [String] },
		other: { type: [String] },
	},
	links: {
		gitHub: { type: String },
		URL: { type: String },
	},
});
// ----------------------------------------------------------------------------------------------------
const Project = mongoose.model('Project', ProjectSchema);

export default Project;
