// Dependencies Imports
import React from 'react';

// React Router Dom
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Components Imports
import Login from './Components/Auth/Login/Login';
// Layout Imports
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';

// Pages Imports
import HomePage from './Pages/HomePage/HomePage';
import BioPage from './Pages/BioPage/BioPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import BlogPage from './Pages/BlogPage/BlogPage';

// Project
import ProjectPage from './Pages/ProjectPage/ProjectPage';
import ProjectDetailsPage from './Pages/ProjectPage/ProjectDetails/ProjectDetailsPage';
import CreateProject from './Pages/ProjectPage/Controllers/CreateProject';
import EditProject from './Pages/ProjectPage/Controllers/EditProject';

// Styles Imports
import './App.css';

function App() {
	return (
		<>
			<div className="App">
				<Router>
					<Header />
					<main>
						<Route exact path="/" component={HomePage} />
						<Route
							path={'/(.+)'}
							render={() => (
								<>
									<Route exact path="/about" component={BioPage} />
									<Route exact path="/projects" component={ProjectPage} />
									<Route exact path="/project/:id" component={ProjectDetailsPage} />
									<Route exact path="/project/:id/edit" component={EditProject} />
									<Route exact path="/meh/create" component={CreateProject} />
									<Route exact path="/contact" component={ContactPage} />
									<Route exact path="/login" component={Login} />
									<Route exact path="/blog" component={BlogPage} />
								</>
							)}
						/>
					</main>
					<Footer />
				</Router>
			</div>
		</>
	);
}

export default App;
