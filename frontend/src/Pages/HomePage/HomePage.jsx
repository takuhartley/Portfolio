import React, { useEffect, useState } from 'react';
import CarVisuals from '../../3D/SceneOne/SceneOne';
import ReactTypingEffect from 'react-typing-effect';
import './HomePage.css';

const Homepage = () => {
	return (
		<>
			<div className="homepage-container">
				<div className="homepage-title-container">
					<p className="homepage-title">Hi there 👋🏼 I'm Robbie</p>
					<p className="homepage-subtitle">Full Stack Engineer/Agile IT Business Analyst</p>
					<p className="homepage-location">Based in Tokyo</p>
				</div>
				<div className="scene-one-container">
					<CarVisuals />
				</div>
			</div>
		</>
	);
};

export default Homepage;
