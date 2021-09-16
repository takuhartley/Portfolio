// Dependencies
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../../../Components/FormContainer';
import { createProject } from '../../../redux/actions/projectActions';
// import { PROJECT_CREATE_RESET } from '../../../redux/constants/projectConstants';
import Loader from '../../../Components/Loader/Loader';
// Material UI
import {
	Box,
	FormControl,
	Input,
	InputLabel,
	Container,
	Checkbox,
	Switch,
	FormGroup,
	FormControlLabel,
	TextField,
	MenuItem,
	NativeSelect,
	FormHelperText,
} from '@material-ui/core';

import './ProjectCreatePage.css';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const ProjectCreatePage = ({ location, history }) => {
	const [title, setTitle] = useState('');
	const [subTitle, setSubTitle] = useState('');
	const [image, setImage] = useState('');
	const [description, setDescription] = useState('');
	const [published, setPublished] = useState(true);
	const [stack, setStack] = useState('');
	const [framework, setFramework] = useState('');
	const [language, setLanguage] = useState([]);
	const [library, setLibrary] = useState([]);
	const [database, setDatabase] = useState('');
	const [other, setOther] = useState([]);
	const [stateManagement, setStateManagement] = useState('');
	const [uploading, setUploading] = useState(false);
	const [components, setComponents] = useState([]);

	// Mateiral UI
	const classes = useStyles();

	// Dispatch Redux
	const dispatch = useDispatch();
	const projectCreate = useSelector((state) => state.projectCreate);
	const { loading, error, success } = projectCreate;

	const submitHandler = (e) => {
		e.preventDefault();
		
		dispatch(
			createProject({
				title,
				subTitle,
				description,
				image,
				published,
				stack,
				language,
				framework,
				library,
				database,
				stateManagement,
			})
		);
		if (success) {
			history.push('/admin/dashboard');
		}
	};

	const handleChange = (e) => {
		setPublished(e.target.checked);
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
	const handleClick = () => {
		console.log('clicked bitch');
	};

	return (
		<>
			<div className="project-create-page">
				<Container maxWidth="md">
					<Link to={'/admin/dashboard'} className="go-back-button">
						<Button variant="contained" color="primary">
							Go Back
						</Button>
					</Link>

					<FormContainer>
						<h1>Add Project Data</h1>
						<Form onSubmit={submitHandler}>
							<Box component="span" display="block">
								<FormControl>
									<InputLabel htmlFor="title">Title</InputLabel>
									<Input
										id="title"
										placeholder="enter title"
										autoComplete
										color="primary"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
									/>
								</FormControl>
							</Box>
							<Box component="span" display="block">
								<FormControl>
									<InputLabel required htmlFor="subTitle">
										Sub Title
									</InputLabel>
									<Input
										id="subTitle"
										placeholder="Enter Sub Title"
										autoComplete
										color="primary"
										multiline
										rows="5"
										value={subTitle}
										onChange={(e) => setSubTitle(e.target.value)}
									/>
								</FormControl>
							</Box>
							<Box component="span" display="block">
								<FormControl>
									<InputLabel required htmlFor="description">
										Description
									</InputLabel>
									<Input
										id="description"
										placeholder="enter description"
										autoComplete
										color="primary"
										multiline
										rows="10"
										value={description}
										onChange={(e) => setDescription(e.target.value)}
									/>
								</FormControl>
							</Box>
							<Box component="span" display="block">
								<FormControl className={classes.formControl}>
									<InputLabel shrink htmlFor="age-native-label-placeholder">
										Stack
									</InputLabel>
									<NativeSelect
										value={stack}
										onChange={(e) => setStack(e.target.value)}
										inputProps={{
											name: 'Stack',
											id: 'stack-native-label-placeholder',
										}}
									>
										<option value="">None</option>
										<option value={'MERN'}>MERN</option>
										<option value={'MEAN'}>MEAN</option>
										<option value={'C#'}>C#</option>
										<option value={'Python'}>Python</option>
									</NativeSelect>
								</FormControl>
							</Box>
							<Box component="span" display="block">
								<FormControl>
									<InputLabel htmlFor="language">Language</InputLabel>
									<Input
										id="language"
										placeholder="enter language"
										autoComplete
										color="primary"
										value={language}
										onChange={(e) => setLanguage(e.target.value)}
									/>
								</FormControl>
							</Box>
							<Box component="span" display="block">
								<FormControl>
									<InputLabel htmlFor="framework">Framework</InputLabel>
									<Input
										id="framework"
										placeholder="enter framework"
										autoComplete
										color="primary"
										value={framework}
										onChange={(e) => setFramework(e.target.value)}
									/>
								</FormControl>
							</Box>
							<Box component="span" display="block">
								<FormControl>
									<InputLabel htmlFor="library">Library</InputLabel>
									<Input
										id="library"
										placeholder="enter library"
										autoComplete
										color="primary"
										value={library}
										onChange={(e) => setLibrary(e.target.value)}
									/>
								</FormControl>
							</Box>
							<Box component="span" display="block">
								<FormControl>
									<InputLabel htmlFor="database">Database</InputLabel>
									<Input
										id="database"
										placeholder="enter database"
										autoComplete
										color="primary"
										value={database}
										onChange={(e) => setDatabase(e.target.value)}
									/>
								</FormControl>
							</Box>
							<Box component="span" display="block">
								<FormControl>
									<InputLabel htmlFor="database">Card Image</InputLabel>
									<Input
										id="raised-button-file"
										type="text"
										value={image}
										onChange={(e) => setImage(e.target.value)}
									/>
									<Input id="raised-button-file" multiple type="file" onChange={uploadFileHandler} />
								</FormControl>
							</Box>
							<Box component="span" display="block">
								<FormControlLabel
									control={<Switch checked={published} onChange={handleChange} name="published" />}
									label="Publish"
								/>
							</Box>
							<Button type="submit" variant="primary">
								Submit
							</Button>
						</Form>
					</FormContainer>
				</Container>
			</div>
		</>
	);
};

export default ProjectCreatePage;
