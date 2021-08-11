// Dependencies Imports
import React from 'react';

// React Router Dom
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userActions';

// Styles Imports
import './Navbar.css';

const Navbar = () => {
	// Redux
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);

	// Deconstructing userLogin data
	const { userInfo } = userLogin;
	const logoutHandler = () => {
		dispatch(logout());
	};
	return (
		<>
			<div className="navbar-container">
				<nav>
					<ul>
						<li>
							<Link to={'/'} className="navbar-links">
								Home
							</Link>
						</li>
						<li>
							<Link to={'/projects'} className="navbar-links">
								Projects
							</Link>
						</li>
						<li>
							<Link to={'/about'} className="navbar-links">
								About
							</Link>
						</li>
						<li>
							<Link to={'/blog'} className="navbar-links">
								Blog
							</Link>
						</li>
						<li>
							<Link to={'/contact'} className="navbar-links">
								Contact
							</Link>
						</li>
						{userInfo ? (
							<li>
								<Link to={`/logout`} className="navbar-links" onClick={logoutHandler}>
									Logout
								</Link>
								<Link to={`/admin/dashboard`} className="navbar-links">
									Dashboard
								</Link>
							</li>
						) : null}
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
