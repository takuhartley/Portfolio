import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => {

	return (
		<div style={{width: '40px', position: 'absolute', right: '50%', top: '50%'}}>
			<CircularProgress />
		</div>
	);
};

export default Loader;
