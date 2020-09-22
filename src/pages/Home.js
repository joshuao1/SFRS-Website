import React from "react";

import logo from "../assets/images/sfrs_logo.png";

// stylesheets
import "../stylesheets/home.css";

const Home = () => {
	return (
		<div
			id="home-page">

			<section
				id="intro">

				<img
				src={ logo }
				className="logo"
				alt="SFRS main logo"/>

				<div
					className="cta"
					data-aos="fade-in"
					data-aos-duration="1500"
					data-aos-easing="ease-in-out">
					<h1>
						Working towards a more <b>inclusive</b> future.
					</h1>
				</div>

			</section>

			<section
				id="goals">

			</section>

		</div>
	)
}

export default Home;