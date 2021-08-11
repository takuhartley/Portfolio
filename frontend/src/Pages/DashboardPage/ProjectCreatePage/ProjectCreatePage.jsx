// Dependencies
import axios from 'axios';
import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../../../Components/FormContainer';
import { createProject } from '../../../redux/actions/projectActions';
import { PROJECT_CREATE_RESET } from '../../../redux/constants/projectConstants';
import Loader from '../../../Components/Loader/Loader';

const ProjectCreatePage = ({ location, history }) => {
	const [title, setTitle] = useState('');
	const [subTitle, setSubTitle] = useState('');
	const [image, setImage] = useState('');
	const [description, setDescription] = useState('');
	const [privateStatus, setPrivateStatus] = useState(false);
	const [published, setPublished] = useState(false);
	const [stack, setStack] = useState('');
	const [framework, setFramework] = useState('');
	const [language, setLanguage] = useState([]);
	const [database, setDatabase] = useState('');
	const [stateManagement, setStateManagement] = useState('');
	const [gitHub, setGitHub] = useState('');
	const [url, setUrl] = useState('');
	const [uploading, setUploading] = useState(false);

	// Dispatch Redux
	const dispatch = useDispatch();
	const projectCreate = useSelector((state) => state.projectCreate);
	const { loading: loadingCreate, error: errorCreate, success: successCreate } = projectCreate;

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			createProject({
				title,
				subTitle,
				description,
				image,
				published,
				privateStatus,
				stack,
				language,
				framework,
				database,
				stateManagement,
				gitHub,
				url,
			})
		);
		if (successCreate) {
			history.push('/admin/dashboard');
		}
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
			<Link to={'/admin/dashboard'} className="edit-project-link">
				Go Back
			</Link>
			<FormContainer>
				<h1>Create Project</h1>
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

					<Form.Group controlId="stack">
						<Form.Label>Stack</Form.Label>
						<Form.Control as="select" onChange={(e) => setStack(e.target.value)}>
							<option>Please select one...</option>
							<option>MERN</option>
							<option>MEAN</option>
							<option>Vue</option>
							<option>Django</option>
							<option>C#</option>
						</Form.Control>
					</Form.Group>

					<Form.Group controlId="framework">
						<Form.Label>Framework</Form.Label>
						<Form.Control
							type=""
							placeholder="Enter Framework"
							value={framework}
							onChange={(e) => setFramework(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="language">
						<Form.Label>Langauge</Form.Label>
						<Form.Control
							type=""
							placeholder="Enter Language"
							value={language}
							onChange={(e) => setLanguage(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="database">
						<Form.Label>Database</Form.Label>
						<Form.Control
							type=""
							placeholder="Enter Database"
							value={database}
							onChange={(e) => setDatabase(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="stateManagement">
						<Form.Label>State Management</Form.Label>
						<Form.Control
							type=""
							placeholder="Enter State Management"
							value={stateManagement}
							onChange={(e) => setStateManagement(e.target.value)}
						></Form.Control>
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

					<Form.Group controlId="image">
						<Form.Label>Image</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter image url"
							value={image}
							onChange={(e) => setImage(e.target.value)}
						></Form.Control>
						<Form.File id="image-file" label="Choose File" custom onChange={uploadFileHandler}></Form.File>
						{uploading && <Loader />}
					</Form.Group>

					<Button type="submit" variant="primary">
						Submit
					</Button>
				</Form>
			</FormContainer>
		</>
	);
};

export default ProjectCreatePage;
