// Dependencies
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// Redux Imports
import { useDispatch, useSelector } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Material UI Core
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Components
import ProjectCard from './ProjectCard/ProjectCard';
import Message from '../../Components/Message/Message';
import Loader from '../../Components/Loader/Loader';

// Actions Imports
import { listProjects } from '../../redux/actions/projectActions';

// SCSS
import './ProjectPage.css';

// Material UI Core
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));
// ----------------------------------------------------------------------------------------------------
const ProjectPage = () => {
	// Redux
	const dispatch = useDispatch();
	const projectList = useSelector((state) => state.projectList);
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	// Decontructing animeDetails on Redux store
	const { loading, error, projects } = projectList;

	// const classes = useStyles();
	// Effect
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
							<p className="linear-wipe">Check out my projects idk</p>
						</div>
						{userInfo ? (
							<div className="project-navigation">
								<ul>
									<li>
										<Link to={`/project/edit`}>Edit</Link>
									</li>
									<li>
										<Link to={'/project/new'}>
											I
											{/* <FontAwesomeIcon
												icon={['fal', 'plus-octagon']}
												size="lg"
												style={{ textDecoration: 'none' }}
											/> */}
										</Link>
									</li>
								</ul>
							</div>
						) : null}

						<div className="project-page-row">
							{projects.map((project) => (
								<>
									<ProjectCard key={project._id} className="project-card" project={project} />
								</>
							))}
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default ProjectPage;
