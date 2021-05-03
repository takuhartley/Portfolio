// @@Title: Footer
// @@Desc: For displaying footer data which contains:
// My social Media (Need to create a list for that)
// When website was last updated

// Dependencies
import React from 'react';

// Style
import './Footer.css';

// Export function as it will be a simpel component.
export default function Footer() {
	return (
		<>
			<div className="footer-wrapper">
				<div className="footer-date">
					<p>Last Updated: Mar,2021 ⚙️</p>
				</div>
				<div className="footer-author">
					<p>
						Proudly made by:
						<br />
						<span>🧙 Robert Hartley</span>
					</p>
				</div>
			</div>
		</>
	);
}
