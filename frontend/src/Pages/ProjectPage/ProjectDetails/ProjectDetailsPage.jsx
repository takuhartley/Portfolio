// Dependencies
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

// SCSS
import './ProjectDetailsPage.css';
import { getProjectDetails } from '../../../redux/actions/projectActions';
import Message from '../../../Components/Message/Message';
import Loader from '../../../Components/Loader/Loader';

const ProjectDetailsPage = ({ match }) => {
	const dispatch = useDispatch();
	const projectDetails = useSelector((state) => state.projectDetails);
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const { loading, error, project } = projectDetails;
	//const mainImage = project.images.main;

	return (
		<>
			<div className="project-details-page-container">
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
					<>
						<div className="project-details-page-link">
							<RouterLink to="/projects">Back</RouterLink>
							{userInfo ? <RouterLink to={`/project/${match.params.id}/edit`}>Edit</RouterLink> : null}
						</div>
						<div className="project-details-page-title">
							<p>{project.title}</p>
						</div>
						<div className="project-details-page-subTitle">
							<p>{project.subTitle}</p>
						</div>
						<div className="project-details-page-image"></div>

						<div className="project-details-page-description">
							<p>{project.description}</p>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default ProjectDetailsPage;
