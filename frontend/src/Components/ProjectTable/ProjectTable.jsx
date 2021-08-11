import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../Message/Message';
import Loader from '../Loader/Loader';
import { listProjects, deleteProject } from '../../redux/actions/projectActions';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// Material UI Icons
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});
const ProjectTable = ({ history }) => {
	const dispatch = useDispatch();
	const projectList = useSelector((state) => state.projectList);
	const { loading, error, projects } = projectList;
	const projectDelete = useSelector((state) => state.projectDelete);
	const { success: successDelete } = projectDelete;
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	useEffect(() => {
		if (userInfo && userInfo.isAdmin) {
			dispatch(listProjects());
		} else {
			history.push('/login');
		}
	}, [userInfo, dispatch, history, successDelete]);

	const deleteHandler = (id) => {
		if (window.confirm('Are you sure?')) {
			dispatch(deleteProject(id));
		}
	};
	// Material UI
	const classes = useStyles();

	return (
		<div className="projectlist-container">
			<h1>Projects</h1>
			<RouterLink to={`/admin/project/new`}>
				<Button variant="light">New</Button>
			</RouterLink>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<TableContainer component={Paper} size="small" class="user-list">
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>ID:</TableCell>
								<TableCell alignCenter>Title</TableCell>
								<TableCell alignCenter>Public</TableCell>
								<TableCell alignCenter>Edit</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{projects.map((project) => (
								<TableRow key={project._id}>
									<TableCell alignCenter>{project._id}</TableCell>
									<TableCell alignCenter>
										<RouterLink to={`/project/${project._id}`}>{project.title}</RouterLink>
									</TableCell>
									<TableCell alignCenter>
										{project.published ? (
											<CheckIcon color="primary" />
										) : (
											<ErrorIcon color="secondary" />
										)}
									</TableCell>
									<TableCell alignCenter>
										<RouterLink to={`/admin/project/${project._id}/edit`}>
											<Button variant="light">
												<EditIcon />
											</Button>
										</RouterLink>
										<Button variant="danger" onClick={() => deleteHandler(project._id)}>
											<DeleteIcon />
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</div>
	);
};

export default ProjectTable;
