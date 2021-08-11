import React from 'react';
import UserTable from '../../Components/UserTable/UserTable';
import ProjectTable from '../../Components/ProjectTable/ProjectTable';

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
import Container from '@material-ui/core/Container';

// Material UI Icons
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

// SCSS
import './DashboardPage.css';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

const DashboardPage = () => {
	return (
		<>
			<Container maxWidth="md">
				<UserTable />
				<ProjectTable />
			</Container>
		</>
	);
};

export default DashboardPage;
