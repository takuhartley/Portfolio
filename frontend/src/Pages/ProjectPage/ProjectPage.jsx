// Dependencies
import React, { useEffect } from 'react';
// 
// Redux Imports
import { useDispatch, useSelector } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import ProjectCard from './ProjectCard/ProjectCard';
import Message from '../../Components/Message/Message';
import Loader from '../../Components/Loader/Loader';

// Actions Imports
import { listProjects } from '../../redux/actions/projectActions';

// SCSS
import './ProjectPage.css';

// Material UI Core
// ----------------------------------------------------------------------------------------------------
const ProjectPage = () => {
	// Redux
	const dispatch = useDispatch();
	const projectList = useSelector((state) => state.projectList);
	// const userLogin = useSelector((state) => state.userLogin);
	// const { userInfo } = userLogin;
	// Decontructing projectDetails on Redux store
	const { loading, error, projects } = projectList;
	// On Page Load call List of Projects
	useEffect(() => {
		dispatch(listProjects());
	}, [dispatch]);

	return (
		<>
			<div className="project-container">
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="error">{error}</Message>
				) : (
					<div className="project-content">
						<div className="project-page-title">
							<p className="linear-wipe">Projects</p>
						</div>
						<div className="project-page-row">
							{projects.map((project) => (
								<ProjectCard key={project._id} className="project-card" project={project} />
							))}
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default ProjectPage;
