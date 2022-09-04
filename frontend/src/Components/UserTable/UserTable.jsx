import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../Components/Message/Message';
import Loader from '../../Components/Loader/Loader';

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
import Link from '@material-ui/core/Link';

// Material UI Icons
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

// Actions
import { listUsers, deleteUser } from '../../redux/actions/userActions';

// SCSS

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

const UserTable = ({ history }) => {
	const dispatch = useDispatch();
	const userList = useSelector((state) => state.userList);
	const { loading, error, users } = userList;
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const userDelete = useSelector((state) => state.userDelete);
	const { successUserDelete: successDelete } = userDelete;

	useEffect(() => {
		if (userInfo && userInfo.isAdmin) {
			dispatch(listUsers());
		} else {
			history.push('/login');
		}
	}, [userInfo, dispatch, history, successDelete]);

	const deleteHandler = (id) => {
		if (window.confirm('Are you sure?')) {
			dispatch(deleteUser(id));
		}
	};

	// Material UI
	const classes = useStyles();

	return (
		<div className="user-table-container">
			<h1>Users</h1>
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
								<TableCell alignCenter>First Name</TableCell>
								<TableCell alignCenter>Last Name</TableCell>
								<TableCell alignCenter>Email</TableCell>
								<TableCell alignCenter>Admin</TableCell>
								<TableCell alignCenter>Edit</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{users.map((user) => (
								<TableRow key={user._id}>
									<TableCell alignCenter>{user._id}</TableCell>
									<TableCell alignCenter>{user.firstName}</TableCell>
									<TableCell alignCenter>{user.lastName}</TableCell>
									<TableCell alignCenter>
										<a href={`mailto:${user.email}`}>{user.email}</a>
									</TableCell>
									<TableCell alignCenter>
										{user.isAdmin ? <CheckIcon color="primary" /> : <ErrorIcon color="secondary" />}
									</TableCell>
									<TableCell alignCenter>
										<Link to={`/admin/user/${user._id}/edit`}>
											<Button variant="light">
												<EditIcon />
											</Button>
										</Link>
										<Button variant="danger" onClick={() => deleteHandler(user._id)}>
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

export default UserTable;
