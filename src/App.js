import React, { useEffect } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import AOS from 'aos';

// components
import Navbar from "./components/Navbar.js";

// pages
import About from "./pages/About";
import Error from "./pages/Error";
import Home  from "./pages/Home";
import Blog  from "./pages/Blog";

import 'aos/dist/aos.css';

const App = (props) => {

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<Router>

			<Navbar
				location={ props }/>

			<Switch>

				{/* landing page */}
				<Route
					exact
					path="/"
					component={ Home }/>

				{/* about page */}
				<Route
					exact
					path="/about"
					component={ About }/>

				{/* blog page */}
				<Route
					exact
					path="/blog"
					component={ Blog }/>

				{/* error page */}
				<Route
					component={ Error }
					path="/*"/>

			</Switch>

		</Router>
	);
}

export default App;
