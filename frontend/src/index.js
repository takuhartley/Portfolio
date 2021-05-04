import React from 'react';
import ReactDOM from 'react-dom';
// import your fontawesome library
// import './fontawesome';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';

const rootEl = document.getElementById('root');

function render() {
	ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>,
		rootEl
	);
}

if (module.hot) {
	module.hot.accept('./App', function () {
		setTimeout(render);
	});
}

render();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
