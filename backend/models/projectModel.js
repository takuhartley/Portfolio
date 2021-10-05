import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// ----------------------------------------------------------------------------------------------------
const ProjectSchema = new Schema(
	{
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
		},
		technologies: {
			languages: [String],
			frameworks: [String],
			libraries: [String],
			databases: [String],
			stateManagement: { type: String },
			other: [String],
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
			articleContent: [String],
		},
		links: {
			gitHubUrl: { type: String },
			websiteUrl: { type: String },
		},
	},
	{
		timestamps: true,
	}
);
// ----------------------------------------------------------------------------------------------------
const Project = mongoose.model('Project', ProjectSchema);

export default Project;
