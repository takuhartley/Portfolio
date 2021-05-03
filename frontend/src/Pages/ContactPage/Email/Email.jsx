import React from 'react';

const Email = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.value);
	};
	return (
		<div>
			<form id="contact-form" onSubmit={handleSubmit} method="POST">
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input type="text" className="form-control" />
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input type="email" className="form-control" aria-describedby="emailHelp" />
				</div>
				<div className="form-group">
					<label htmlFor="message">Message</label>
					<textarea className="form-control" rows="5"></textarea>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Email;
