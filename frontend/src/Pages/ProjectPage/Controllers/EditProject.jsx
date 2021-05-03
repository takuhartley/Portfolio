// Dependencies
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../../Components/Message/Message';
import Loader from '../../../Components/Loader/Loader';

import { getProjectDetails, updateProject } from '../../../redux/actions/projectActions';

import { PROJECT_UPDATE_RESET } from '../../../redux/constants/projectConstants';

const EditProject = ({ match, history }) => {
	const projectId = match.params.id;
	const [title, setTitle] = useState('');
	const [subTitle, setSubTitle] = useState(0);
	const [image, setImage] = useState('');
	const [description, setDescription] = useState('');
	const [privateStatus, setPrivateStatus] = useState(false);
	const [technologies, setTechnologies] = useState({
		stack: '',
		language: [],
		database: [],
		stateManagement: [],
		other: [],
	});
	const [links, setLinks] = useState({
		gitHub: '',
		URL: '',
	});
	const [uploading, setUploading] = useState(false);

	const dispatch = useDispatch();

	const projectDetails = useSelector((state) => state.projectDetails);
	const { loading, error, project } = projectDetails;

	const projectUpdate = useSelector((state) => state.projectUpdate);
	const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = projectUpdate;

	useEffect(() => {
		if (successUpdate) {
			dispatch({ type: PROJECT_UPDATE_RESET });
			history.push(`/project/${projectId}`);
		} else {
			if (!project.title || project._id !== projectId) {
				dispatch(getProjectDetails(projectId));
			} else {
				setTitle(project.title);
				setSubTitle(project.subTitle);
				setDescription(project.description);
				setImage(project.image);
				setPrivateStatus(project.privateStatus);
				setTechnologies(project.technologies);
				setLinks(project.links);
			}
		}
	}, [dispatch, history, projectId, project, successUpdate]);

	const uploadFileHandler = async (e) => {
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append('image', file);
		setUploading(true);

		try {
			const config = {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			};

			const { data } = await axios.post('/api/upload', formData, config);

			setImage(data);
			setUploading(false);
		} catch (error) {
			console.error(error);
			setUploading(false);
		}
	};
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			updateProject({
				_id: projectId,
				title,
				subTitle,
				description,
				image,
				privateStatus,
				technologies,
				links,
			})
		);
	};
	const updateField = (e) => {
		setTechnologies({
			...technologies,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<>
			<Link to={`/project/${projectId}`} className="edit-project-link">
				Go Back
			</Link>
			<h1>Edit Project</h1>
			<form onSubmit={submitHandler}>
				<div>
					<input
						type="title"
						placeholder="Enter title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					></input>
				</div>
				<div>
					<input
						type="subTitle"
						placeholder="Enter Sub Title"
						value={subTitle}
						onChange={(e) => setSubTitle(e.target.value)}
					></input>
				</div>
				<div>
					<input
						type="description"
						placeholder="Enter description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></input>
				</div>
				<div>
					<input
						type="privateStatus"
						placeholder="Enter Status"
						value={privateStatus}
						onChange={(e) => setPrivateStatus(e.target.value)}
					></input>
				</div>
				<div>
					<input
						type="Stack"
						placeholder="Enter stack"
						value={technologies.stack}
						onChange={updateField}
					></input>
				</div>
				<div>
					<input
						type="statemanagement"
						placeholder="Enter statemanagement"
						value={technologies.stateManagement}
						onChange={updateField}
					></input>
				</div>
				<div>
					<input
						type="database"
						placeholder="Enter database"
						value={technologies.database}
						onChange={updateField}
					></input>
				</div>
				<div>
					<input
						type="other"
						placeholder="Enter other"
						value={technologies.other}
						onChange={updateField}
					></input>
				</div>
				<div>
					<input
						type="language"
						placeholder="Enter language"
						value={technologies.language}
						onChange={updateField}
					></input>
				</div>
				<button type="submit" variant="primary">
					Update
				</button>
			</form>
		</>
	);
};

export default EditProject;
