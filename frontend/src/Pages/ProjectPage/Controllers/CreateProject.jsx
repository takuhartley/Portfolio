import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../../Components/Message/Message';
import Loader from '../../../Components/Loader/Loader';
import { createProject } from '../../../redux/actions/projectActions';

const CreateProject = () => {
	const [name, setName] = useState('');

	const [image, setImage] = useState();

	const dispatch = useDispatch();
	const uploadFileHandler = async (e) => {
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append('image', file);

		try {
			const config = {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			};
			const { data } = await axios.post('/api/upload', formData, config);
			setImage(data);
		} catch (error) {
			console.error(error);
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();
		console.log('Yo');
	};

	return (
		<>
			<div className="create-project-container">
				<h1>Create New Project</h1>
			</div>
			<form action="#">
				<div className="flex">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						onChange={(event) => {
							const { value } = event.target;
							setName(value);
						}}
					/>
				</div>
				<div className="flex">
					<label htmlFor="name">Image</label>
					<input
						id="image"
						type="text"
						placeholder="Enter image url"
						value={image}
						onChange={(e) => setImage(e.target.value)}
					></input>
					<input type="file" id="image-file" label="Choose File" onChange={uploadFileHandler}></input>
				</div>
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default CreateProject;
