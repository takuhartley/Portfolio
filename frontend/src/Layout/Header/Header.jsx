// Dependencies Imports
import React, { useState } from 'react';

// React-Router-Dom
import { Link } from 'react-router-dom';

// React Hamburger
import { Divide as Hamburger } from 'hamburger-react';

// Layout Imports
import Navbar from '../../Components/Navbar/Navbar';

// ThreeJS Imports
// import SceneX from '../../3D/SceneX/SceneX';
// import Logo from '../../3D/SceneZ/Logo';

// Styles Imports
import './Header.css';

const Header = () => {
	const [isOpen, setOpen] = useState(false);
	const onClickHandler = (e) => {
		setOpen(!isOpen);
	};
	return (
		<>
			<section className="header-container">
				<header>
					<div className="logo">
						<Link to={'/'}>Robert Hartley</Link>
					</div>
					<div className="toggle" onClick={onClickHandler}>
						<Hamburger label="Show menu" rounded toggled={isOpen} toggle={setOpen} />
					</div>
					<div onClick={onClickHandler} className={isOpen ? 'backdrop active' : 'backdrop'}></div>
					<div className={isOpen ? 'panel active' : 'panel'}></div>
				</header>
				<div className={isOpen ? 'navbar active' : 'navbar'}>
					<Navbar />
				</div>
			</section>
		</>
	);
};

export default Header;
