import React from 'react';
// React-Router-Dom
import { Link } from 'react-router-dom';
import './BlogPage.css';

const BlogPage = () => {
	return (
		<div className="blog-page-container">
			<Link to={'/login'}>Login</Link>
			<p>
				🚧 Under Contruction 🚧 <br />
				👷 Sorry for the inconvinience 👷
			</p>
		</div>
	);
};

export default BlogPage;
