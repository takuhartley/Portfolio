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
	published: {
		type: Boolean,
		default: false,
		required: true,
		lowercase: true,
	},
	technologies: {
		language: { type: String },
		framework: { type: String },
		library: { type: String },
		database: { type: String },
		stateManagement: { type: String },
		other: [{ type: String }],
	},
	images: {
		thumbnail: {
			name: { type: String },
			image: { type: String },
		},
		icon: {
			name: { type: String },
			image: { type: String },
		},
		articleContent: [],
	},
	links: [
		{
			website: { type: String },
			websiteUrl: { type: String },
		},
	],
});
// ----------------------------------------------------------------------------------------------------
const Project = mongoose.model('Project', ProjectSchema);

export default Project;
