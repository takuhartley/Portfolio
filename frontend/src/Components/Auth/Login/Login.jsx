<<<<<<< HEAD
import { GoogleLogin } from 'react-google-login';
=======
// Dependencies Imports
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import clsx from 'clsx';

// Material UI Core Imports
import { makeStyles } from '@material-ui/core/styles';
import {
	Avatar,
	Button,
	TextField,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
	Link,
	Grid,
	Box,
	Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/material/icons/LockOutlined';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

// Components Imports
// import Message from '../Message/Message';
import Loader from '../../Loader/Loader';

// Actions Imports
import { login } from '../../../redux/actions/userActions';

// Style
>>>>>>> 4994ea23f9c8306a7d9f624961861af1cacf2098
import './Login.css';
const clientId = "904186568841-gks6q3vtdflehakqfei6rb3vm4p6hkev.apps.googleusercontent.com";

<<<<<<< HEAD
const Login = () => {
	const onSucess =  (res) => {
		console.log("Login Sucess! Current user: ", res.profileObj)
	}
	const onFailure = (res) => {
		console.log("Login Failure! Current user: ", res.profileObj)
	}
=======
// Copy Right Function
function Copyright() {
	return (
		 <Typography variant="body2" color="textSecondary" align="center">
		 	{'Copyright © '}
		 	<RouterLink component={RouterLink} to="/">
		 		AnimeCenter
		 	</RouterLink>{' '}
		 	{new Date().getFullYear()}
		 	{'.'}{' '}
		</Typography>
		null
	);
}

// Material UI Core Styles
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
		// border: '1px solid red',
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	textField: {
		width: '100%',
	},
}));

const Login = ({ location, history }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [values, setValues] = useState({
		showPassword: false,
	});

	// Redux
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);

	// Decontructured userLogin data
	const { loading, error, userInfo } = userLogin;
	const redirect = location.search ? location.search.split('=')[1] : '/';

	// Showing Password
	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	// Prevent Mousedown Default Event
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
		//console.log(email, password);
		// console.log('Redirection: ' + redirection);
	};

	// Google Auth
	const handleLogin = async (googleData) => {
		console.log(googleData);
	};

	// Material UI Core
	const classes = useStyles();

	useEffect(() => {
		if (userInfo) {
			history.push(redirect);
		}
	}, [history, userInfo, redirect]);
>>>>>>> 4994ea23f9c8306a7d9f624961861af1cacf2098

	return (
		<>
			<div className="login_container">
			<GoogleLogin
    		clientId={clientId}
    		buttonText="Login"
    		onSuccess={onSucess}
    		onFailure={onFailure}
    		cookiePolicy={'single_host_origin'}
  />
			</div>
		</>
	);
};

export default Login;