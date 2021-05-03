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
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

// Components Imports
// import Message from '../Message/Message';
import Loader from '../../Loader/Loader';

// Actions Imports
import { login } from '../../../redux/actions/userActions';

// Style
import './Login.css';

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

	return (
		<>
			<div className="login_container">
				<div className="login_card">
					<div>{loading && <Loader />}</div>
					<Avatar className={classes.avatar} style={{ textAlign: 'center', margin: '0 auto' }}>
						<LockOutlinedIcon />
					</Avatar>

					<Box>
						<Typography
							component="h1"
							variant="h5"
							style={{ textAlign: 'center', paddingTop: '10px', color: 'black' }}
						>
							Sign in
						</Typography>
					</Box>

					<form onSubmit={submitHandler} className={classes.form} noValidate>
						<TextField
							error={error ? true : false}
							id="outlined-error-helper-text"
							helperText={error}
							variant="outlined"
							margin="normal"
							fullWidth
							required
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							onChange={(e) => setEmail(e.target.value)}
						/>

						<FormControl className={clsx(classes.textField, classes.form)} variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={values.showPassword ? 'text' : 'password'}
								value={values.password}
								onChange={(e) => setPassword(e.target.value)}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{values.showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								}
								labelWidth={70}
								fullWidth
							/>
						</FormControl>

						<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
							Sign In
						</Button>

						<Grid container>
							<Grid item xs>
								<Link component={RouterLink} to="/login" color="secondary" variant="inherit">
									Forgot password?
								</Link>
							</Grid>

							<Grid item>
								<Link
									component={RouterLink}
									to={redirect ? `/register?redirect=${redirect}` : '/register'}
								>
									Don't have an account? Sign up
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
				<Box mt={8}>
					<Copyright />
				</Box>
			</div>
		</>
	);
};

export default Login;

// export default function AuthExample() {
// 	return (
// 		<ProvideAuth>
// 			<Router>
// 				<div>
// 					<AuthButton />

// 					<ul>
// 						<li>
// 							<Link to="/public">Public Page</Link>
// 						</li>
// 						<li>
// 							<Link to="/protected">Protected Page</Link>
// 						</li>
// 					</ul>

// 					<Switch>
// 						<Route path="/public">
// 							<PublicPage />
// 						</Route>
// 						<Route path="/login">
// 							<LoginPage />
// 						</Route>
// 						<PrivateRoute path="/protected">
// 							<ProtectedPage />
// 						</PrivateRoute>
// 					</Switch>
// 				</div>
// 			</Router>
// 		</ProvideAuth>
// 	);
// }

// const fakeAuth = {
// 	isAuthenticated: false,
// 	signin(cb) {
// 		fakeAuth.isAuthenticated = true;
// 		setTimeout(cb, 100); // fake async
// 	},
// 	signout(cb) {
// 		fakeAuth.isAuthenticated = false;
// 		setTimeout(cb, 100);
// 	},
// };

// const authContext = createContext();

// function ProvideAuth({ children }) {
// 	const auth = useProvideAuth();
// 	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
// }

// function useAuth() {
// 	return useContext(authContext);
// }

// function useProvideAuth() {
// 	const [user, setUser] = useState(null);

// 	const signin = (cb) => {
// 		return fakeAuth.signin(() => {
// 			setUser('user');
// 			cb();
// 		});
// 	};

// 	const signout = (cb) => {
// 		return fakeAuth.signout(() => {
// 			setUser(null);
// 			cb();
// 		});
// 	};

// 	return {
// 		user,
// 		signin,
// 		signout,
// 	};
// }

// function AuthButton() {
// 	let history = useHistory();
// 	let auth = useAuth();

// 	return auth.user ? (
// 		<p>
// 			Welcome!{' '}
// 			<button
// 				onClick={() => {
// 					auth.signout(() => history.push('/'));
// 				}}
// 			>
// 				Sign out
// 			</button>
// 		</p>
// 	) : (
// 		<p>You are not logged in.</p>
// 	);
// }

// // A wrapper for <Route> that redirects to the login
// // screen if you're not yet authenticated.
// function PrivateRoute({ children, ...rest }) {
// 	let auth = useAuth();
// 	return (
// 		<Route
// 			{...rest}
// 			render={({ location }) =>
// 				auth.user ? (
// 					children
// 				) : (
// 					<Redirect
// 						to={{
// 							pathname: '/login',
// 							state: { from: location },
// 						}}
// 					/>
// 				)
// 			}
// 		/>
// 	);
// }

// function PublicPage() {
// 	return <h3>Public</h3>;
// }

// function ProtectedPage() {
// 	return <h3>Protected</h3>;
// }

// function LoginPage() {
// 	let history = useHistory();
// 	let location = useLocation();
// 	let auth = useAuth();

// 	let { from } = location.state || { from: { pathname: '/' } };
// 	let login = () => {
// 		auth.signin(() => {
// 			history.replace(from);
// 		});
// 	};

// 	return (
// 		<div>
// 			<p>You must log in to view the page at {from.pathname}</p>
// 			<button onClick={login}>Log in</button>
// 		</div>
// 	);
// }
