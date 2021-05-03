import React from 'react';
// import Email from './Email/Email';
// import Social from './Social/Social';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ContactPage.css';
const ContactPage = () => {
	return (
		<>
			<div className="contact-page-container">
				<div className="contact-page-content">
					<div className="contact-page-header">
						<p>Connect</p>
					</div>
					<div className="contact-page-body">
						<p>👋 Hi there again,</p>
						<p>Here are some of the platforms you can find me on! 👀</p>
					</div>
					<div className="contact-page-links">
						<a href="https://www.linkedin.com/in/robin-hartley/" target="_blank">
							<FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" style={{ textDecoration: 'none' }} />
						</a>
						<a href="https://github.com/RobHart01" target="_blank">
							<FontAwesomeIcon
								icon={['fab', 'github-square']}
								size="lg"
								style={{ textDecoration: 'none' }}
							/>
						</a>
						<a href="https://github.com/RobHart01" target="_blank">
							<FontAwesomeIcon
								icon={['fab', 'medium']}
								size="lg"
								style={{ textDecoration: 'none' }}
							/>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactPage;
