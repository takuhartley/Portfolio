// Dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../../Components/Message/Message';
import Loader from '../../../Components/Loader/Loader';
import FormContainer from '../../../Components/FormContainer';
import { getProjectDetails, updateProject } from '../../../redux/actions/projectActions';
import { PROJECT_UPDATE_RESET } from '../../../redux/constants/projectConstants';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ProjectEditPage = ({ match, history }) => {
	// Get the Project ID
	const projectId = match.params.id;
	// Define State
	const [title, setTitle] = useState('');
	const [subTitle, setSubTitle] = useState('');
	const [image, setImage] = useState('');
	const [description, setDescription] = useState('');
	const [privateStatus, setPrivateStatus] = useState(false);
	const [published, setPublished] = useState(false);
	const [stack, setStack] = useState('');
	const [language, setLanguage] = useState([]);
	const [database, setDatabase] = useState('');
	const [stateManagement, setStateManagement] = useState('');
	const [gitHub, setGitHub] = useState('');
	const [url, setUrl] = useState('');
	const [uploading, setUploading] = useState(false);

	// Dispatch Redux
	const dispatch = useDispatch();
	// Define project details from state
	const projectDetails = useSelector((state) => state.projectDetails);
	const { loading, error, project } = projectDetails;
	const projectUpdate = useSelector((state) => state.projectUpdate);
	const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = projectUpdate;

	useEffect(() => {
		if (successUpdate) {
			dispatch({ type: PROJECT_UPDATE_RESET });
			history.push('/admin/dashboard');
		} else {
			if (!project.title || project._id !== projectId) {
				dispatch(getProjectDetails(projectId));
			} else {
				setTitle(project.title);
				setSubTitle(project.subTitle);
				setImage(project.image);
				setDescription(project.description);
				setPrivateStatus(project.privateStatus);
				setLanguage(project.language);
				setStack(project.stack);
				setDatabase(project.database);
				setStateManagement(project.stateManagement);
				setGitHub(project.gitHub);
				setUrl(project.url);
			}
		}
	}, [dispatch, history, project, projectId, successUpdate]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			updateProject({
				_id: projectId,
				title,
				subTitle,
				description,
				image,
				published,
				privateStatus,
				stack,
				language,
				database,
				stateManagement,
				gitHub,
				url,
			})
		);
	};

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

	return (
		<>
			<Link to={`/project/${projectId}`} className="edit-project-link">
				Go Back
			</Link>
			<FormContainer>
				<h1>Edit {project.title}</h1>
				{loadingUpdate && <Loader />}
				{errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
					<Form onSubmit={submitHandler}>
						<Row>
							<Col>
								<Form.Group controlId="title">
									<Form.Label>Title</Form.Label>
									<Form.Control
										type="title"
										placeholder="Enter title"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
									></Form.Control>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group controlId="subtitle">
									<Form.Label>Sub-Title</Form.Label>
									<Form.Control
										type="subTitle"
										placeholder="Enter Sub-Title"
										value={subTitle}
										onChange={(e) => setSubTitle(e.target.value)}
									></Form.Control>
								</Form.Group>
							</Col>
						</Row>
						<Form.Group controlId="description">
							<Form.Label>Description</Form.Label>
							<Form.Control
								type="text-field"
								as="textarea"
								rows={3}
								placeholder="Enter Description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlSelect1">
							<Form.Label>Stack</Form.Label>
							<Form.Control as="select">
								<option>{stack}</option>
								<option>MERN</option>
								<option>MEAN</option>
								<option>Vue</option>
								<option>Django</option>
								<option>C#</option>
							</Form.Control>
						</Form.Group>
						<Form.Group controlId="published">
							<Form.Switch
								type="switch"
								id="custom-switch"
								label="Private"
								checked={privateStatus}
								onChange={(e) => setPrivateStatus(e.target.checked)}
							/>
						</Form.Group>
						<Form.Group controlId="published">
							<Form.Check
								type="checkbox"
								label="Published"
								checked={published}
								onChange={(e) => setPublished(e.target.checked)}
							></Form.Check>
						</Form.Group>
						<Form.Group controlId="links">
							<Form.Label>GitHub Link</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Github Link"
								value={gitHub}
								onChange={(e) => setGitHub(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group controlId="subtitle">
							<Form.Label>URL</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter URL"
								value={url}
								onChange={(e) => setUrl(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group controlId="image">
							<Form.Label>Image</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter image url"
								value={image}
								onChange={(e) => setImage(e.target.value)}
							></Form.Control>
							<Form.File
								id="image-file"
								label="Choose File"
								custom
								onChange={uploadFileHandler}
							></Form.File>
							{uploading && <Loader />}
						</Form.Group>
						<Button type="submit" variant="primary">
							Update
						</Button>
					</Form>
				)}
			</FormContainer>
		</>
	);
};

export default ProjectEditPage;
