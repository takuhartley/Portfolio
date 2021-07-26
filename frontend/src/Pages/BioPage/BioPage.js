// Dependencies Imports
import React from 'react';

// Styles
import './BioPage.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BioPage = () => {
	return (
		<>
			<div className="bio-page-container">
				<div className="bio-page-header">
					<h1>Robbie Docs 😉</h1>
				</div>
				<div className="bio-page-body">
					<div className="bio-page-main-body">
						<h3>🥷 A little bit about me 🧛</h3>
						<p>
							Hi my name is Robert & I'm currently a IT Agile Business Analyst living in Tokyo since 2019,
							you can call me Robbie for short.
							<br />
							As you can probably tell from my website, I'm a avid design and development geek.
							<br />
							Being on the business side of things, I don't have much time to work on projects, so this is
							an outlet for some of my work I do in my free time.
						</p>
					</div>
					<div className="bio-page-second-body">
						<hr />
						<h3>When I'm not programming...</h3>
						<p>
							I kind of don't have a life 😔, jkjk haha I have a few main interests that I like exploring
							further on. In reality I have too many interests to keep track of so it's nice to have them
							on my official website.
						</p>
						<ul>
							<li>
								I'm a pretty big on getting out and exploring 🏙 So you might run into me in Tokyo!
								Though I doubt you know what I look like lol
							</li>
							<li>
								I like to think I'm a photographer, but my current camera broke so I'm just a guy with
								lenses...HAHA
							</li>
							<li>
								I'm weirdly really into biology and aquascaping or anything related to fresh water
								aquariums 🐟
							</li>
							<li>Seasonal Skier/Snowboader ⛷</li>
							<li>Not a botanist but a plantsman 🪴</li>
						</ul>
					</div>
					<div className="bio-page-second-body">
						<hr />
						<h3>✨ Professional Interests ✨</h3>
						<p>
							I have a bunch of career related interests which mainly manifests in the form of occassional
							weekend book binges. Or you might start to see my work here on the Blog Page.
						</p>
						<ul>
							<li>🏘️ International Real Estate Investment Strategies</li>
							<li>₿ FinTech/Crypto/Blockchain</li>
							<li>🧠 Machine Learning/AI</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default BioPage;
